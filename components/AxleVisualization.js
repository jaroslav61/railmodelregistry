       // =====================================================================================
        // KOMPONENTY: common/AxleVisualization.js
        // =====================================================================================
function AxleVisualization({ numberOfAxles, bandagedWheels, onBandageChange, readOnly = false }) {
    const axles = Array.from({ length: numberOfAxles }, (_, axleIndex) => {
        const bottomWheelDataIndex = axleIndex * 2;
        const topWheelDataIndex = axleIndex * 2 + 1;

        return (
            <React.Fragment key={axleIndex}>
                {axleIndex === numberOfAxles / 2 && numberOfAxles === 4 && (
                    <div className="axle-gap-horizontal"></div>
                )}
                <div className="axle-group">
                    <div
                        className={`wheel ${bandagedWheels[topWheelDataIndex] ? 'bandaged' : ''} ${readOnly ? 'cursor-default' : 'cursor-pointer'}`}
                        onClick={() => !readOnly && onBandageChange(topWheelDataIndex)}
                    ></div>
                    <div className="axle-bar"></div>
                    <div
                        className={`wheel ${bandagedWheels[bottomWheelDataIndex] ? 'bandaged' : ''} ${readOnly ? 'cursor-default' : 'cursor-pointer'}`}
                        onClick={() => !readOnly && onBandageChange(bottomWheelDataIndex)}
                    ></div>
                </div>
            </React.Fragment>
        );
    });

    return (
        <div className="axle-visualization-container">
            {axles}
        </div>
    );
}