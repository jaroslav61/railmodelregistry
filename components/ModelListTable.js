function ModelListTable({ category, models, onSelectModel, selectedModelId }) {
    const filteredModels = models.filter(model => model.category === category);

    return (
        <div className="model-table-container">
            {filteredModels.length === 0 ? (
                <p className="text-gray-700 p-4 bg-white rounded-lg">Zatiaľ žiadne modely typu "{category}" nie sú uložené.</p>
            ) : (
                <table className="model-table bg-white">
                    <thead>
                        <tr>
                            <th>Obrázok</th>
                            <th>Ev. číslo</th>
                            <th>Názov</th>
                            <th>Kategória</th>
                            <th>Cena</th>
                            <th>Výrobca</th>
                            <th>Epocha</th>
                            <th>Správa</th>
                            <th>Depo</th>
                            <th>Umiestnenie</th>
                            <th>Stav obalu</th>
                            <th>Hodnotenie stavu</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredModels.map((model) => (
                            <tr
                                key={model.id}
                                onClick={() => onSelectModel(model.id)}
                                className={selectedModelId === model.id ? 'selected' : ''}
                            >
                                <td>
                                    {model.imageDataUrl ? (
                                        <img src={model.imageDataUrl} alt={model.modelName} className="w-16 h-auto object-contain rounded-md" />
                                    ) : (
                                        <div className="w-16 h-10 bg-gray-200 flex items-center justify-center text-xs text-gray-500 rounded-md">N/A</div>
                                    )}
                                </td>
                                <td>{model.evidencneCislo || model.evidencneCisloAuto || 'N/A'}</td>
                                <td>{model.modelName}</td>
                                <td>{model.category} {model.subCategory ? `(${model.subCategory})` : ''}</td>
                                <td>{model.cenaModelu} </td>
                                <td>{model.manufacturer}</td>
                                <td>{model.epocha || 'N/A'}</td>
                                <td>{model.sprava || 'N/A'}</td>
                                <td>{model.depo || 'N/A'}</td>
                                <td>{model.location || 'N/A'}</td>
                                <td>{model.packagingCondition || 'N/A'}</td>
                                <td>{model.conditionRating || 'N/A'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}