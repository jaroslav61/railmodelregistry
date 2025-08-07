// =====================================================================================
// KOMPONENTY: pages/ModelsPage.js (opravené)
// =====================================================================================
function ModelsPage({ showMessage: appShowMessage, db, userId, isAuthReady, allReferenceData, initialCategory = 'Lokomotíva' }) {
    const appId = window.APP_ID || "railmodelregistryapp-production";
    const [activeCategory, setActiveCategory] = React.useState(initialCategory);

    React.useEffect(() => {
        setActiveCategory(initialCategory);
    }, [initialCategory]);

    const [models, setModels] = React.useState([]);
    const [selectedModel, setSelectedModel] = React.useState(null);
    const [isFormVisible, setIsFormVisible] = React.useState(false);
    const [viewMode, setViewMode] = React.useState('table');
    const [formEditMode, setFormEditMode] = React.useState('view');

    // Lokálny modal pre hlášky tejto stránky (neprepisujeme prop showMessage)
    const [modalMessage, setModalMessage] = React.useState(null);
    const localShowMessage = (msg) => setModalMessage(msg);
    const closeMessageModal = () => setModalMessage(null);

    // Stav predplatného – načítame z user dokumentu
    const [hasPaidSubscription, setHasPaidSubscription] = React.useState(false);

    React.useEffect(() => {
        if (!isAuthReady || !userId) return;
        const userRef = db.doc(`artifacts/${appId}/users/${userId}`);
        userRef.get().then(doc => {
            const data = doc.exists ? doc.data() : {};
            setHasPaidSubscription(!!data.subscriptionActive);
        }).catch(err => {
            // ak zlyhá, aspoň zalogujme na app úrovni
            if (typeof appShowMessage === 'function') {
                appShowMessage(`Chyba pri načítaní profilu používateľa: ${err.message}`);
            }
        });
    }, [isAuthReady, userId, db, appId]);

    React.useEffect(() => {
        if (!isAuthReady || !userId) return;

        const q = db
            .collection(`artifacts/${appId}/users/${userId}/myModels`)
            .where('category', '==', activeCategory);

        const unsubscribe = q.onSnapshot((snapshot) => {
            const modelsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setModels(modelsData);

            if (modelsData.length > 0) {
                setSelectedModel(modelsData[0]);
                setFormEditMode('view');
            } else {
                setSelectedModel(null);
                setFormEditMode('new');
            }
            setIsFormVisible(false); // po načítaní preferujeme zoznam/mriežku
        }, (error) => {
            // použijeme lokálny modal, ak je na stránke; inak aplikáčný prop
            if (typeof localShowMessage === 'function') {
                localShowMessage(`Chyba pri načítaní modelov: ${error.message}`);
            } else if (typeof appShowMessage === 'function') {
                appShowMessage(`Chyba pri načítaní modelov: ${error.message}`);
            }
        });

        return () => unsubscribe();
    }, [activeCategory, isAuthReady, userId, db, appId]);

    const handleSelectModel = (modelId) => {
        const model = models.find(m => m.id === modelId);
        setSelectedModel(model);
        setIsFormVisible(true);
        setFormEditMode('view');
    };

    const handleBackToList = () => {
        setIsFormVisible(false);
        setSelectedModel(null);
        setFormEditMode('view');
    };

    const renderForm = () => {
        const commonProps = {
            initialData: selectedModel || {},
            showMessage: appShowMessage || localShowMessage,
            allReferenceData: allReferenceData,
            db: db,
            userId: userId,
            appId: appId,
            onCloseForm: handleBackToList,
            formEditMode: formEditMode,
            setFormEditMode: setFormEditMode
        };

        switch (activeCategory) {
            case 'Lokomotíva':
                return <LokomotivaForm {...commonProps} />;
            case 'Vagón':
                return <VagonForm {...commonProps} />;
            case 'Príslušenstvo':
                return <PrislusenstvoForm {...commonProps} />;
            default:
                return null;
        }
    };

    return (
        <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100">
            {/* Hlavička a prepínače sa zobrazia len v režime zoznamu */}
            {!isFormVisible && (
                <>
                    <h1 className="text-3xl font-bold text-blue-800 mb-6">Evidenčné karty</h1>
                    <div className="flex justify-between items-center mb-4">
                        <div className="space-x-2">
                            <button onClick={() => setActiveCategory('Lokomotíva')} className={`px-4 py-2 rounded ${activeCategory === 'Lokomotíva' ? 'bg-blue-500 text-white' : 'bg-white border'}`}>Lokomotívy</button>
                            <button onClick={() => setActiveCategory('Vagón')} className={`px-4 py-2 rounded ${activeCategory === 'Vagón' ? 'bg-blue-500 text-white' : 'bg-white border'}`}>Vagóny</button>
                            <button onClick={() => setActiveCategory('Príslušenstvo')} className={`px-4 py-2 rounded ${activeCategory === 'Príslušenstvo' ? 'bg-blue-500 text-white' : 'bg-white border'}`}>Príslušenstvo</button>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => {
                                    if (!hasPaidSubscription && models.length >= 5) {
                                        localShowMessage("Bez aktívneho predplatného môžete pridať maximálne 5 modelov. Pre viac modelov si aktivujte mesačné členstvo.");
                                        return;
                                    }
                                    setIsFormVisible(true);
                                    setSelectedModel(null);
                                    setFormEditMode('new');
                                }}
                                disabled={!hasPaidSubscription && models.length >= 5}
                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Pridať model
                            </button>
                            <button onClick={() => setViewMode('table')} className={`px-4 py-2 rounded ${viewMode === 'table' ? 'bg-gray-300' : 'bg-white border'}`}>Tabuľka</button>
                            <button onClick={() => setViewMode('grid')} className={`px-4 py-2 rounded ${viewMode === 'grid' ? 'bg-gray-300' : 'bg-white border'}`}>Mriežka</button>
                        </div>
                    </div>
                </>
            )}

            {isFormVisible ? (
                <div>{renderForm()}</div>
            ) : (
                <div>
                    {viewMode === 'table' ? (
                        <ModelListTable category={activeCategory} models={models} onSelectModel={handleSelectModel} selectedModelId={selectedModel?.id} />
                    ) : (
                        <ModelListGrid category={activeCategory} models={models} onSelectModel={handleSelectModel} selectedModelId={selectedModel?.id} />
                    )}
                </div>
            )}
            <MessageModal message={modalMessage} onClose={closeMessageModal} />
        </div>
    );
}

// Sprístupníme komponent globálne (projekt nepoužíva ESM importy)
window.ModelsPage = ModelsPage;