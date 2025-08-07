// =============================================================
// KOMPONENTY: common/AuthModal.js
// =============================================================
function AuthModal({ isOpen, onClose, onLogin, onRegister }) {
    const [isLoginMode, setIsLoginMode] = React.useState(true);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState('');

    const resetForm = () => {
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setName('');
        setError('');
        setIsLoading(false);
    };

    const handleClose = () => {
        resetForm();
        onClose();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            if (isLoginMode) {
                await onLogin(email, password);
            } else {
                if (password !== confirmPassword) {
                    throw new Error('Heslá sa nezhodujú');
                }
                await onRegister(email, password, name);
            }
            handleClose();
        } catch (err) {
            setError(err.message || 'Nastala chyba');
        } finally {
            setIsLoading(false);
        }
    };

    const switchMode = () => {
        setIsLoginMode(!isLoginMode);
        setError('');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-blue-800">
                            {isLoginMode ? 'Prihlásenie' : 'Registrácia'}
                        </h2>
                        <button
                            onClick={handleClose}
                            className="text-gray-400 hover:text-gray-600 text-2xl"
                        >
                            ×
                        </button>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {!isLoginMode && (
                            <LabeledInput
                                label="Meno a priezvisko"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Zadajte vaše meno"
                                required
                            />
                        )}
                        <LabeledInput
                            label="E-mail"
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="zadajte@email.com"
                            required
                        />
                        <LabeledInput
                            label="Heslo"
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Zadajte heslo"
                            required
                        />
                        {!isLoginMode && (
                            <LabeledInput
                                label="Potvrdiť heslo"
                                id="confirmPassword"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Zopakujte heslo"
                                required
                            />
                        )}
                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
                                {error}
                            </div>
                        )}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
                        >
                            {isLoading ? 'Spracováva sa...' : (isLoginMode ? 'Prihlásiť sa' : 'Registrovať sa')}
                        </button>
                    </form>
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            {isLoginMode ? 'Nemáte účet?' : 'Už máte účet?'}
                            <button
                                onClick={switchMode}
                                className="ml-2 text-blue-600 hover:text-blue-800 font-medium"
                            >
                                {isLoginMode ? 'Registrovať sa' : 'Prihlásiť sa'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}