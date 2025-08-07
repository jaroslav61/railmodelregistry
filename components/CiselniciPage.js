// =====================================================================================
// KOMPONENTY: pages/CiselniciPage.js
// =====================================================================================
function CiselniciPage({ showMessage, db, userId, isAuthReady, appId }) {
    const [referenceData, setReferenceData] = React.useState({});
    const [newValue, setNewValue] = React.useState('');
    const [editingValue, setEditingValue] = React.useState(null);
    const [editValue, setEditValue] = React.useState('');

    // Definícia všetkých kategórií presne ako na obrázku - 4 riadky po 8 stĺpcov
    const categoryGrid = [
        [
            { id: 'manufacturers', label: 'Výrobcovia' },
            { id: 'scales', label: 'Mierky' },
            { id: 'epochs', label: 'Epochy' },
            { id: 'administrations', label: 'Správy' },
            { id: 'depots', label: 'Depá' },
            { id: 'conditions', label: 'Stavy modelov' },
            { id: 'dealers', label: 'Obchodníci' },
            { id: 'couplingTypes', label: 'Typ spriahla' }
        ],
        [
            { id: 'decoderInterfaces', label: 'Rozhrania dekodérov' },
            { id: 'dataDecoderTypes', label: 'Typy dekodérov' },
            { id: 'decoderManufacturers', label: 'Výrobcovia dekodérov' },
            { id: 'wagonTypes', label: 'Typy vagónov' },
            { id: 'loadTypes', label: 'Typy nákladov' },
            { id: 'colors', label: 'Farby' },
            { id: 'railTypes', label: 'Typy koľají' },
            { id: 'trackRadius', label: 'Dĺžka/Polomer koľají' }
        ],
        [
            { id: 'trackMaterials', label: 'Materiály koľají' },
            { id: 'trackSystems', label: 'Systémy koľají' },
            { id: 'signalCommunication', label: 'Komunikácia návestidiel...' },
            { id: 'signalTypes', label: 'Typy návestidiel' },
            { id: 'signalKinds', label: 'Druhy návestidiel' },
            { id: 'figureTypes', label: 'Typy figúrok' },
            { id: 'lightingTypes', label: 'Typy osvetlenia' },
            { id: 'buildingMaterials', label: 'Materiály budov' }
        ],
        [
            { id: 'packagingConditions', label: 'Stavy obalov' },
            { id: 'conditionRatings', label: 'Hodnotenia stavu' },
            { id: 'locomotiveTypes', label: 'Typy lokomotív' },
            { id: 'carBrands', label: 'Značky áut' },
            { id: 'carConditions', label: 'Stavy áut' },
            { id: 'buildingTypes', label: 'Typy budov' },
            { id: '', label: '' },
            { id: '', label: '' }
        ]
    ];

    // Nastavenie prvej kategórie ako aktívnej pri načítaní
    const [activeCategory, setActiveCategory] = React.useState('manufacturers');

    React.useEffect(() => {
        if (!isAuthReady || !userId || !db || !appId) return;

        console.log('Loading reference data from Firebase...', { isAuthReady, userId, appId });
        
        const refDataCollection = db.collection(`artifacts/${appId}/public/data/referenceData`);
        const unsubscribe = refDataCollection.onSnapshot((snapshot) => {
            console.log('Firebase snapshot received:', snapshot.size, 'documents');
            const fetchedData = {};
            snapshot.docs.forEach(doc => {
                console.log('Document:', doc.id, 'Data:', doc.data());
                fetchedData[doc.id] = doc.data().values || [];
            });
            console.log('Final fetched data:', fetchedData);
            setReferenceData(fetchedData);
        }, (error) => {
            console.error('Chyba pri načítaní referenčných dát:', error);
            showMessage(`Chyba pri načítaní referenčných dát: ${error.message}`);
        });

        return () => unsubscribe();
    }, [isAuthReady, userId, db, appId]);

    const handleAddValue = async () => {
        if (!newValue.trim()) {
            showMessage('Hodnota nemôže byť prázdna.');
            return;
        }

        const currentValues = referenceData[activeCategory] || [];
        if (currentValues.includes(newValue.trim())) {
            showMessage('Táto hodnota už existuje.');
            return;
        }

        const docRef = db.collection(`artifacts/${appId}/public/data/referenceData`).doc(activeCategory);
        try {
            await docRef.set({
                values: firebase.firestore.FieldValue.arrayUnion(newValue.trim())
            }, { merge: true });
            showMessage(`Hodnota "${newValue.trim()}" bola pridaná.`);
            setNewValue('');
        } catch (error) {
            showMessage(`Chyba pri pridávaní hodnoty: ${error.message}`);
        }
    };

    const handleRemoveValue = async (value) => {
        if (!confirm(`Naozaj chcete odstrániť hodnotu "${value}"?`)) return;

        const docRef = db.collection(`artifacts/${appId}/public/data/referenceData`).doc(activeCategory);
        try {
            await docRef.update({
                values: firebase.firestore.FieldValue.arrayRemove(value)
            });
            showMessage(`Hodnota "${value}" bola odstránená.`);
        } catch (error) {
            showMessage(`Chyba pri odstraňovaní hodnoty: ${error.message}`);
        }
    };

    const handleEditValue = async () => {
        if (!editValue.trim()) {
            showMessage('Hodnota nemôže byť prázdna.');
            return;
        }

        const currentValues = referenceData[activeCategory] || [];
        if (currentValues.includes(editValue.trim()) && editValue.trim() !== editingValue) {
            showMessage('Táto hodnota už existuje.');
            return;
        }

        const docRef = db.collection(`artifacts/${appId}/public/data/referenceData`).doc(activeCategory);
        try {
            const updatedValues = currentValues.map(val => val === editingValue ? editValue.trim() : val);
            await docRef.set({ values: updatedValues });
            showMessage(`Hodnota bola aktualizovaná.`);
            setEditingValue(null);
            setEditValue('');
        } catch (error) {
            showMessage(`Chyba pri aktualizácii hodnoty: ${error.message}`);
        }
    };

    const startEditing = (value) => {
        setEditingValue(value);
        setEditValue(value);
    };

    const cancelEditing = () => {
        setEditingValue(null);
        setEditValue('');
    };

    const handleCategoryClick = (categoryId) => {
        if (!categoryId) return;
        setActiveCategory(categoryId);
        setEditingValue(null);
        setEditValue('');
        setNewValue('');
    };

    const getCurrentCategoryLabel = () => {
        for (const row of categoryGrid) {
            for (const category of row) {
                if (category.id === activeCategory) {
                    return category.label;
                }
            }
        }
        return '';
    };

    const currentValues = referenceData[activeCategory] || [];
    
    console.log('Current category:', activeCategory, 'Values:', currentValues);

    return (
        <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100">
            <h1 className="text-3xl font-bold text-blue-800 mb-6">Číselníky</h1>
            
           
            
            {/* Mriežka kategórií - stále viditeľná */}
            <div className="space-y-2 mb-8">
                {categoryGrid.map((row, rowIndex) => (
                    <div key={rowIndex} className="grid grid-cols-8 gap-2">
                        {row.map((category, colIndex) => (
                            <div key={colIndex}>
                                {category.id ? (
                                    <button
                                        onClick={() => handleCategoryClick(category.id)}
                                        className={`w-full p-2 text-xs font-medium rounded-md transition duration-200 min-h-[50px] flex items-center justify-center text-center ${
                                            activeCategory === category.id 
                                                ? 'bg-blue-200 text-blue-800 border-2 border-blue-400' 
                                                : 'text-gray-700 bg-gray-100 border border-gray-300 hover:bg-blue-100 hover:text-blue-800 hover:border-blue-300'
                                        }`}
                                    >
                                        {category.label}
                                    </button>
                                ) : (
                                    <div className="w-full p-2 min-h-[50px]"></div>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* Formulár pre aktívnu kategóriu */}
            {activeCategory && (
                <div className="bg-gray-50 p-6 rounded-lg shadow-inner border border-gray-200">
                    <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                        {getCurrentCategoryLabel()}
                    </h2>

                    {/* Pridanie novej hodnoty */}
                    <div className="flex gap-2 mb-6">
                        <input
                            type="text"
                            value={newValue}
                            onChange={(e) => setNewValue(e.target.value)}
                            placeholder={`Nová položka pre ${getCurrentCategoryLabel()}`}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            onKeyPress={(e) => e.key === 'Enter' && handleAddValue()}
                        />
                        <button
                            onClick={handleAddValue}
                            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-200"
                        >
                            Pridať
                        </button>
                    </div>

                    {/* Zoznam hodnôt v dvoch stĺpcoch */}
                    <div className="bg-white rounded-lg border border-gray-200 p-4">
                        {currentValues.length === 0 ? (
                            <p className="text-gray-500 text-center py-4">
                                Žiadne hodnoty pre túto kategóriu.
                            </p>
                        ) : (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                {currentValues.map((value, index) => (
                                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded border">
                                        {editingValue === value ? (
                                            <div className="flex gap-2 w-full">
                                                <input
                                                    type="text"
                                                    value={editValue}
                                                    onChange={(e) => setEditValue(e.target.value)}
                                                    className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm"
                                                    onKeyPress={(e) => e.key === 'Enter' && handleEditValue()}
                                                />
                                                <button
                                                    onClick={handleEditValue}
                                                    className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                                                >
                                                    ✓
                                                </button>
                                                <button
                                                    onClick={cancelEditing}
                                                    className="bg-gray-500 text-white px-3 py-1 rounded text-sm hover:bg-gray-600"
                                                >
                                                    ✕
                                                </button>
                                            </div>
                                        ) : (
                                            <>
                                                <span className="text-gray-800 flex-1">{value}</span>
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => startEditing(value)}
                                                        className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                                                    >
                                                        Upraviť
                                                    </button>
                                                    <button
                                                        onClick={() => handleRemoveValue(value)}
                                                        className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                                                    >
                                                        Vymazať
                                                    </button>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}