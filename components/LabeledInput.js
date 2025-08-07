        // =====================================================================================
        // KOMPONENTY: common/LabeledInput.js
        // =====================================================================================
       function LabeledInput({
    label, id, type = "text", value, onChange, placeholder, options, min, step, required = false, className = "", readOnly = false, spanFull = false
}) {
    const fileInputRef = React.useRef(null);
    const [isDragOver, setIsDragOver] = React.useState(false);

    const baseInputClasses = "px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base h-10";
    const combinedInputClasses = `${baseInputClasses} ${className} ${readOnly ? 'bg-gray-100 cursor-not-allowed' : ''}`;
    const labelClasses = "text-gray-700 font-medium text-sm";
    const wrapperClasses = `flex flex-col gap-1 w-full ${spanFull ? 'col-span-full' : ''}`;

    if (type === "file") {
        const handleDragOver = (e) => {
            e.preventDefault();
            setIsDragOver(true);
        };
        const handleDragLeave = (e) => {
            e.preventDefault();
            setIsDragOver(false);
        };
        const handleDrop = (e) => {
            e.preventDefault();
            setIsDragOver(false);
            if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                onChange(e.dataTransfer.files[0]);
            }
        };
        const handleClick = () => {
            if (!readOnly) {
                fileInputRef.current.click();
            }
        };

        return (
            <div className={wrapperClasses}>
                <label htmlFor={id} className="text-sm font-medium text-gray-700 mt-2">{label}</label>
                <div
                    className={`custom-file-upload ${isDragOver ? 'drag-over' : ''} ${readOnly ? 'opacity-60 cursor-not-allowed' : ''}`}
                    onClick={handleClick}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L40 32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="mt-2 text-sm text-gray-600">
                        <span className="font-medium text-blue-600 hover:text-blue-500">Pretiahnite sem obrázok</span>
                        {' '}alebo kliknite pre vyhľadanie
                    </p>
                    <p className="mt-1 text-xs text-gray-500">JPG, PNG – bude uložený ako .jpg</p>
                    <input
                        type="file"
                        id={id}
                        name={id}
                        ref={fileInputRef}
                        onChange={(e) => onChange(e.target.files[0])}
                        className="sr-only"
                        accept="image/jpeg, image/png"
                        required={required}
                        disabled={readOnly}
                    />
                </div>
            </div>
        );
    }

    if (type === "textarea") {
        return (
            <div className={wrapperClasses}>
                <label htmlFor={id} className={labelClasses}>{label}</label>
                <textarea
                    id={id}
                    name={id}
                    value={value}
                    onChange={onChange}
                    className={`${baseInputClasses.replace('h-10', '')} w-full`}
                    placeholder={placeholder}
                    rows="3"
                    required={required}
                    readOnly={readOnly}
                    disabled={readOnly}
                ></textarea>
            </div>
        );
    }

    return (
        <div className={wrapperClasses}>
            <label htmlFor={id} className={labelClasses}>{label}</label>
            {options ? (
                <select id={id} name={id} value={value} onChange={onChange} className={combinedInputClasses} required={required} readOnly={readOnly} disabled={readOnly}>
                    <option value="">-- Vyberte --</option>
                    {options.map(option => (
                        <option key={option.value || option} value={option.value || option}>{option.label || option}</option>
                    ))}
                </select>
            ) : (
                <input
                    type={type}
                    id={id}
                    name={id}
                    value={value}
                    onChange={onChange}
                    className={combinedInputClasses}
                    placeholder={placeholder}
                    min={min}
                    step={step}
                    required={required}
                    readOnly={readOnly}
                    disabled={readOnly}
                />
            )}
        </div>
    );
}