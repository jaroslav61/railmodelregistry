       // =====================================================================================
        // KOMPONENTY: ReferenceDataManager.js (Nový komponent pre správu číselníkov)
        // =====================================================================================
 function ReferenceDataManager({ categoryId, categoryLabel, db, userId, showMessage, appId, isEditingAnyRefData, setIsEditingAnyRefData }) {
    const [items, setItems] = React.useState([]);
    const [newItem, setNewItem] = React.useState('');
    const [editingItem, setEditingItem] = React.useState(null);

    const categoryDocRef = db && appId ? firebase.firestore().collection(`artifacts/${appId}/public/data/referenceData`).doc(categoryId) : null;

    React.useEffect(() => {
        if (db && appId && categoryDocRef) {
            const unsubscribe = categoryDocRef.onSnapshot((docSnap) => {
                if (docSnap.exists) {
                    try {
                        const data = docSnap.data();
                        const fetchedValues = data.values || [];
                        setItems(fetchedValues);
                    } catch (dataError) {
                        showMessage(`Chyba pri spracovaní dát pre číselník ${categoryLabel}: ${dataError.message}`);
                    }
                } else {
                    setItems([]);
                }
            }, (error) => {
                showMessage(`Chyba pri načítaní číselníka ${categoryLabel}: ${error.message}`);
            });
            return () => unsubscribe();
        }
    }, [db, appId, categoryDocRef, categoryId, categoryLabel, showMessage]);

    const handleAddItem = async () => {
        if (!newItem.trim()) {
            showMessage('Nová položka nemôže byť prázdna.');
            return;
        }
        if (items.includes(newItem.trim())) {
            showMessage('Táto položka už existuje.');
            return;
        }
        try {
            await categoryDocRef.set({
                values: firebase.firestore.FieldValue.arrayUnion(newItem.trim())
            }, { merge: true });
            setNewItem('');
            showMessage('Položka úspešne pridaná!');
        } catch (error) {
            showMessage(`Chyba pri pridávaní položky: ${error.message}`);
        }
    };

    const handleUpdateItem = async () => {
        if (!editingItem || !newItem.trim()) {
            showMessage('Nová hodnota nemôže byť prázdna.');
            return;
        }
        if (items.includes(newItem.trim()) && newItem.trim() !== editingItem.value) {
            showMessage('Táto položka už existuje.');
            return;
        }
        try {
            const updatedValues = items.map(item => item === editingItem.value ? newItem.trim() : item);
            await categoryDocRef.set({ values: updatedValues });
            setEditingItem(null);
            setNewItem('');
            setIsEditingAnyRefData(false);
            showMessage('Položka úspešne aktualizovaná!');
        } catch (error) {
            showMessage(`Chyba pri aktualizácii položky: ${error.message}`);
        }
    };

    const handleDeleteItem = async (itemToDelete) => {
        if (!window.confirm(`Naozaj chcete vymazať položku "${itemToDelete}"?`)) {
            return;
        }
        try {
            await categoryDocRef.update({
                values: firebase.firestore.FieldValue.arrayRemove(itemToDelete)
            });
            showMessage('Položka úspešne vymazaná!');
        } catch (error) {
            showMessage(`Chyba pri mazaní položky: ${error.message}`);
        }
    };

    const startEditing = (item) => {
        setEditingItem({ value: item });
        setNewItem(item);
        setIsEditingAnyRefData(true);
    };

    const cancelEditing = () => {
        setEditingItem(null);
        setNewItem('');
        setIsEditingAnyRefData(false);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-inner border border-gray-200 mb-6 w-full">
            <h3 className="text-xl font-semibold text-blue-700 mb-4 text-left">{categoryLabel}</h3>
            <div className="flex gap-2 mb-4">
                <LabeledInput
                    id={`new-item-${categoryId}`}
                    placeholder={`Nová položka pre ${categoryLabel}`}
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    className="flex-grow"
                    readOnly={isEditingAnyRefData && !editingItem}
                />
                {editingItem ? (
                    <React.Fragment>
                        <button
                            onClick={handleUpdateItem}
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200 shadow-sm"
                        >
                            Uložiť
                        </button>
                        <button
                            onClick={cancelEditing}
                            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-200 shadow-sm"
                        >
                            Zrušiť
                        </button>
                    </React.Fragment>
                ) : (
                    <button
                        onClick={handleAddItem}
                        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-200 shadow-sm"
                        disabled={isEditingAnyRefData}
                    >
                        Pridať
                    </button>
                )}
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-24 gap-y-2 border border-gray-200 rounded-md p-3 bg-gray-50 text-left">
                {items.length === 0 ? (
                    <li className="text-gray-500 col-span-full">Žiadne položky.</li>
                ) : (
                    items.map((item, index) => (
                        <li key={item} className="flex justify-between items-center py-1.5 text-gray-800">
                            <span>{item}</span>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => startEditing(item)}
                                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition duration-200 text-sm"
                                    disabled={isEditingAnyRefData && editingItem?.value !== item}
                                >
                                    Upraviť
                                </button>
                                <button
                                    onClick={() => handleDeleteItem(item)}
                                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-200 text-sm"
                                    disabled={isEditingAnyRefData}
                                >
                                    Vymazať
                                </button>
                            </div>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}