// components/UserManagement.js
function UserManagement({ showMessage, appId }) {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState(null);
  const [isAdmin, setIsAdmin] = React.useState(false);

  // Sledovanie aktuálneho používateľa
  React.useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      if (user) {
        try {
          // Skontroluj admin status
          const idTokenResult = await user.getIdTokenResult(true);
          const claims = idTokenResult.claims;
          setIsAdmin(!!claims.admin);
        } catch (error) {
          console.error('Chyba pri načítaní admin claims:', error);
          setIsAdmin(false);
        }
      } else {
        setIsAdmin(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const loadUsers = async () => {
    try {
      const db = firebase.firestore();
      const usersSnapshot = await db.collection(`artifacts/${appId}/users`).get();
      
      const usersList = [];
      usersSnapshot.forEach(doc => {
        const userData = {
          uid: doc.id,
          ...doc.data()
        };
        usersList.push(userData);
      });
      
      setUsers(usersList);
    } catch (error) {
      setError(`Chyba pri načítaní používateľov: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (currentUser && isAdmin) {
      loadUsers();
    } else {
      setLoading(false);
    }
  }, [currentUser, isAdmin]);

  if (!currentUser) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">Správa používateľov</h1>
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded-md">
          <p className="font-semibold">Nie ste prihlásený</p>
          <p>Pre prístup k správe používateľov sa musíte prihlásiť.</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">Správa používateľov</h1>
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
          <p className="font-semibold">Nedostatočné oprávnenia</p>
          <p>Pre prístup k správe používateľov musíte mať administrátorské práva.</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">Správa používateľov</h1>
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Testujem prístup k databáze...</p>
        </div>
        <div className="mt-4 p-4 bg-gray-100 rounded text-sm">
          <strong>Debug info:</strong> {debugInfo}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Správa používateľov</h1>
      
      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
          <p className="font-semibold">Chyba:</p>
          <p>{error}</p>
        </div>
      )}
      
      {users.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600 text-lg">
            Žiadni používatelia v databáze.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Noví používatelia sa zobrazia po registrácii.
          </p>
        </div>
      ) : (
        <div className="bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
          <div className="mb-4">
            <p className="text-sm text-gray-600">
              Celkový počet používateľov: <span className="font-semibold text-blue-600">{users.length}</span>
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
              <thead>
                <tr className="bg-blue-50 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">
                  <th className="py-3 px-4 border-b border-gray-200">Email</th>
                  <th className="py-3 px-4 border-b border-gray-200">Meno</th>
                  <th className="py-3 px-4 border-b border-gray-200">Email overený</th>
                  <th className="py-3 px-4 border-b border-gray-200">Admin</th>
                  <th className="py-3 px-4 border-b border-gray-200">Registrovaný</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.uid} className={`hover:bg-blue-50 border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="py-3 px-4 text-sm text-gray-700 font-medium">
                      {user.email || 'N/A'}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      {user.name || user.displayName || 'N/A'}
                    </td>
                    <td className="py-3 px-4 text-sm">
                      {user.emailVerified ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Áno
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          Nie
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-sm">
                      {(user.uid === currentUser?.uid && isAdmin) ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Áno
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          Nie
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      {user.createdAt ? new Date(user.createdAt.toDate()).toLocaleDateString('sk-SK') : 'N/A'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

// Globálne sprístupnenie komponenta
window.UserManagement = UserManagement;