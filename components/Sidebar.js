       // ==============================================
        // KOMPONENTY: layout/Sidebar.js
        // =============================================
function Sidebar({ onNavigate, isRegisteredUser, isAdmin }) {
    if (!isRegisteredUser) {
        return (
            <aside className="w-64 bg-blue-50 text-blue-800 p-6 h-screen sticky top-0 shadow-md flex flex-col items-center justify-center">
                <p className="text-center text-lg font-semibold text-blue-700 mb-4">
                    Pre prístup k menu sa prosím prihláste alebo zaregistrujte.
                </p>
               
            </aside>
        );
    }

    return (
        <aside className="w-64 bg-blue-50 text-blue-800 p-6 h-screen sticky top-0 shadow-md flex flex-col">
            <h2 className="text-2xl font-bold mb-8">Navigácia</h2>
            <nav className="flex-grow">
                <ul>
                    <li className="mb-4">
                        <a href="#" onClick={() => onNavigate('lokomotivy')} className="block p-3 rounded-lg hover:bg-blue-200 hover:text-blue-900 font-medium transition duration-200">Lokomotívy</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" onClick={() => onNavigate('vagony')} className="block p-3 rounded-lg hover:bg-blue-200 hover:text-blue-900 font-medium transition duration-200">Vagóny</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" onClick={() => onNavigate('prislusenstvo')} className="block p-3 rounded-lg hover:bg-blue-200 hover:text-blue-900 font-medium transition duration-200">Príslušenstvo</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" onClick={() => onNavigate('lokomotivy')} className="block p-3 rounded-lg hover:bg-blue-200 hover:text-blue-900 font-medium transition duration-200">Evidenčné karty</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" onClick={() => onNavigate('ciselnici')} className="block p-3 rounded-lg hover:bg-blue-200 hover:text-blue-900 font-medium transition duration-200">Číselníky</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" onClick={() => onNavigate('print')} className="block p-3 rounded-lg hover:bg-blue-200 hover:text-blue-900 font-medium transition duration-200">Tlač</a>
                    </li>
                    <li>
                        <a href="#" onClick={() => onNavigate('settings')} className="block p-3 rounded-lg hover:bg-blue-200 hover:text-blue-900 font-medium transition duration-200">Nastavenia</a>
                    </li>
                    {isAdmin && (
                        <li className="mb-4">
                            <a href="#" onClick={() => onNavigate('userManagement')} className="block p-3 rounded-lg hover:bg-blue-200 hover:text-blue-900 font-medium transition duration-200">Správa používateľov</a>
                        </li>
                    )}
                </ul>
            </nav>
            <div className="mt-auto pt-6 border-t border-blue-200 text-base text-blue-600 text-center">
                <p className="font-semibold">Zephyr</p>
                <p className="text-sm text-blue-500">© 2025</p>
            </div>
        </aside>
    );
}