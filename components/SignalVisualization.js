       // =====================================================================================
        // KOMPONENTY: common/SignalVisualization.js
        // =====================================================================================
 function SignalVisualization({ signalType, pocetSvetiel, signalKind, isEditMode }) {
    if (!signalType) return (
        <div className="signal-visualization-container text-gray-500">
            Vyplňte typ návestidla pre vizualizáciu.
        </div>
    );

    const renderLights = () => {
        const lights = [];
        for (let i = 0; i < pocetSvetiel; i++) {
            let colorClass = '';
            if (signalType === 'Svetelné') {
                if (['Odjazdové', 'Vjazdové', 'Oddielové'].includes(signalKind)) {
                    if (pocetSvetiel === 1) colorClass = 'red';
                    else if (pocetSvetiel === 2) colorClass = i === 0 ? 'red' : 'green';
                    else if (pocetSvetiel === 3) colorClass = i === 0 ? 'red' : i === 1 ? 'yellow' : 'green';
                } else if (signalKind === 'Predzvesť') {
                    if (pocetSvetiel === 1) colorClass = 'yellow';
                    else if (pocetSvetiel === 2) colorClass = i === 0 ? 'yellow' : 'green';
                } else if (signalKind === 'Zoraďovacie') {
                    if (pocetSvetiel === 2) colorClass = 'white';
                }
            }
            lights.push(<div key={i} className={`signal-light ${colorClass}`}></div>);
        }
        return lights;
    };

    return (
        <div className="signal-visualization-container">
            {signalType === 'Svetelné' && pocetSvetiel > 0 && (
                <div className="flex flex-col items-center">
                    <div className="signal-light-head">
                        {renderLights()}
                    </div>
                    <div className="signal-post"></div>
                </div>
            )}
            {signalType === 'Mechanické' && (
                <div className="flex flex-col items-center">
                    <div className={`signal-mechanical-arm ${isEditMode ? 'down' : 'up'}`}></div>
                    <div className="signal-post"></div>
                </div>
            )}
            {(!signalType || (signalType === 'Svetelné' && pocetSvetiel === 0)) && (
                <div className="text-gray-500">
                    Vyberte platný typ a počet svetiel pre vizualizáciu.
                </div>
            )}
        </div>
    );
}