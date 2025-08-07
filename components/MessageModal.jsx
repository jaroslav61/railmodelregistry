        // ======================================
        // KOMPONENTY: common/MessageModal.js
        // =====================================
 function MessageModal({ message, onClose }) {
    if (!message) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full text-center">
                <p className="text-lg font-semibold text-gray-800 mb-4">{message}</p>
                <button
                    onClick={onClose}
                    className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition duration-200"
                >
                    Zavrieť
                </button>
            </div>
        </div>
    );
}