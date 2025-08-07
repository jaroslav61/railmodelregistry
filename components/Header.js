const Header = ({ onLoginClick }) => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  const getUserLabel = () => {
    if (!user) return "Neprihlásený";
    return user.email || "Používateľ";
  };

  return (
    <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img src="obrazky/logo.png" alt="Logo" className="h-10 w-auto" />
        <h1 className="text-xl font-bold">RailModelRegistry</h1>
        <nav className="flex gap-4 text-sm ml-6">
          <a href="#" className="hover:underline">Domov</a>
          <a href="#" className="hover:underline">Modely</a>
          <a href="#" className="hover:underline">O projekte</a>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span className="text-sm">{getUserLabel()}</span>
            <button
              onClick={() => firebase.auth().signOut()}
              className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 text-sm"
            >
              Odhlásiť sa
            </button>
          </>
        ) : (
          <button
            onClick={onLoginClick}
            className="bg-green-600 px-3 py-1 rounded hover:bg-green-700 text-sm"
          >
            Prihlásiť sa
          </button>
        )}
      </div>
    </header>
  );
};