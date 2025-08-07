// =====================================================================================
        // KOMPONENTY: pages/ModelsPage.js
        // =====================================================================================
function ModelsPage({ showMessage, db, userId, isAuthReady, allReferenceData, initialCategory = 'Lokomotíva' }) {
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


    React.useEffect(() => {
        if (!isAuthReady || !userId) return;

        const q = db.collection(`artifacts/${appId}/users/${userId}/myModels`).where('category', '==', activeCategory);

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
            setIsFormVisible(false); // Zobrazíme zoznam/mriežku namiesto formulára
          
        }, (error) => {
            showMessage(`Chyba pri načítaní modelov: ${error.message}`);
        });

        return () => unsubscribe();
    }, [activeCategory, isAuthReady, userId, db]);

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
            showMessage: showMessage,
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
            {/* Nadpis a tlačidlá kategórií/zobrazenia sa zobrazia len v režime zoznamu/mriežky */}
            {!isFormVisible && (
                <>
                    <h1 className="text-3xl font-bold text-blue-800 mb-6">Evidenčné karty</h1>
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <button onClick={() => setActiveCategory('Lokomotíva')} className={`px-4 py-2 rounded-md ${activeCategory === 'Lokomotíva' ? 'bg-blue-500 text-white' : 'bg-white'}`}>Lokomotívy</button>
                            <button onClick={() => setActiveCategory('Vagón')} className={`px-4 py-2 rounded-md ${activeCategory === 'Vagón' ? 'bg-blue-500 text-white' : 'bg-white'}`}>Vagóny</button>
                            <button onClick={() => setActiveCategory('Príslušenstvo')} className={`px-4 py-2 rounded-md ${activeCategory === 'Príslušenstvo' ? 'bg-blue-500 text-white' : 'bg-white'}`}>Príslušenstvo</button>
                        </div>
                        <div className="flex items-center gap-2">
                            <button onClick={() => {
                                setIsFormVisible(true);
                                setSelectedModel(null);
                                setFormEditMode('new');
                            }} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200">Pridať model</button>
                            <button onClick={() => setViewMode('table')} className={`px-4 py-2 rounded-md ${viewMode === 'table' ? 'bg-gray-300' : 'bg-white'}`}>Tabuľka</button>
                            <button onClick={() => setViewMode('grid')} className={`px-4 py-2 rounded-md ${viewMode === 'grid' ? 'bg-gray-300' : 'bg-white'}`}>Mriežka</button>
                        </div>
                    </div>
                </>
            )}

            {isFormVisible ? (
                // Zobrazenie formulára
                <div>
                    {renderForm()}
                </div>
            ) : (
                // Zobrazenie zoznamu/mriežky
                <div>
                    {viewMode === 'table' ? (
                        <ModelListTable category={activeCategory} models={models} onSelectModel={handleSelectModel} selectedModelId={selectedModel?.id} />
                    ) : (
                        <ModelListGrid category={activeCategory} models={models} onSelectModel={handleSelectModel} selectedModelId={selectedModel?.id} />
                    )}
                </div>
            )}
        </div>
    );


}