        // =====================================================================================
        // KOMPONENTY: ModelListGrid.js (nové mriežkové zobrazenie)
        // =====================================================================================
function ModelListGrid({ category, models, onSelectModel, selectedModelId }) {
    const filteredModels = models.filter(model => model.category === category);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredModels.length === 0 ? (
                <p className="text-gray-700 p-4 bg-white rounded-lg col-span-full">Zatiaľ žiadne modely typu "{category}" nie sú uložené.</p>
            ) : (
                filteredModels.map((model) => (
                    <div
                        key={model.id}
                        onClick={() => onSelectModel(model.id)}
                        className={`grid-card ${selectedModelId === model.id ? 'selected' : ''}`}
                    >
                        <img src={model.imageDataUrl || 'https://placehold.co/250x200/cccccc/333333?text=N/A'} alt={model.modelName} className="grid-card-image" />
                        <h3 className="grid-card-title">{model.modelName}</h3>
                        <p className="grid-card-subtitle">{model.evidencneCislo || model.evidencneCisloAuto || 'N/A'}</p>
                        <p className="grid-card-detail">Výrobca: {model.manufacturer}</p>
                        <p className="grid-card-detail">Mierka: {model.scale}</p>
                        {model.subCategory && <p className="grid-card-detail">Typ: {model.subCategory}</p>}
                    </div>
                ))
            )}
        </div>
    );
}