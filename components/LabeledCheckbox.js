        // =====================================================================================
        // KOMPONENTY: common/LabeledCheckbox.js
        // =====================================================================================
 function LabeledCheckbox({ label, id, checked, onChange, readOnly = false }) {
    return (
        <div className="flex items-center">
            <input
                type="checkbox"
                id={id}
                name={id}
                checked={checked}
                onChange={onChange}
                className={`h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 ${readOnly ? 'cursor-not-allowed opacity-60' : ''}`}
                disabled={readOnly}
            />
            <label htmlFor={id} className={`ml-2 text-sm font-medium text-gray-700 ${readOnly ? 'opacity-60' : ''}`}>{label}</label>
        </div>
    );
}