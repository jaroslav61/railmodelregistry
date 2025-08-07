// firebase.auth().currentUser.getIdTokenResult(true).then(idTokenResult => { console.log(idTokenResult.claims); });
function App() {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [modalMessage, setModalMessage] = React.useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);
  const [allReferenceData, setAllReferenceData] = React.useState({});

  const [userId, setUserId] = React.useState(null);
  const [isRegisteredUser, setIsRegisteredUser] = React.useState(false);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [firebaseStatusMessage, setFirebaseStatusMessage] = React.useState('Inicializácia Firebase...');

  // Initialize Firebase Firestore and appId
  const db = firebase.firestore();
  const appId = window.APP_ID || "railmodelregistryapp-production";
  const isAuthReady = userId !== null;

  React.useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
        setIsRegisteredUser(true);
        setFirebaseStatusMessage(`Prihlásený: ${user.email}`);
        setCurrentPage('models');
        
        // Skontroluj či používateľ existuje v novej kolekcii, ak nie, vytvor ho
        const checkAndMigrateUser = async () => {
          try {
            console.log('Checking user migration for:', user.uid, user.email);
            const userDocRef = firebase.firestore().collection(`artifacts/${appId}/users`).doc(user.uid);
            console.log('User doc path:', `artifacts/${appId}/users/${user.uid}`);
            const userDoc = await userDocRef.get();
            console.log('User doc exists:', userDoc.exists);
            
            if (!userDoc.exists) {
              // Používateľ neexistuje v novej kolekcii, vytvor ho
              console.log('Creating new user document...');
              const userData = {
                name: user.displayName || 'Používateľ',
                email: user.email,
                uid: user.uid,
                createdAt: new Date(user.metadata.creationTime),
                lastSignIn: new Date(),
                emailVerified: user.emailVerified,
                customClaims: {},
                migratedFromAuth: true // označenie, že bol migrovaný z Auth
              };
              console.log('User data to save:', userData);
              await userDocRef.set({
                ...userData
              });
              console.log('Používateľ bol migrovaný do novej kolekcie');
            } else {
              console.log('User already exists, updating last sign in...');
              // Aktualizuj posledné prihlásenie
              await userDocRef.update({
                lastSignIn: new Date(),
                emailVerified: user.emailVerified // aktualizuj aj email verification status
              });
              console.log('Last sign in updated');
            }
          } catch (error) {
            console.error('Chyba pri migrácii používateľa:', error);
            console.error('Error details:', error.code, error.message);
          }
        };
        
        checkAndMigrateUser();
        
        // Skontroluj admin status
        user.getIdTokenResult().then((idTokenResult) => {
          const claims = idTokenResult.claims;
          setIsAdmin(!!claims.admin);
        }).catch((error) => {
          console.error('Chyba pri načítaní admin claims:', error);
          setIsAdmin(false);
        });
      } else {
        setUserId(null);
        setIsRegisteredUser(false);
        setIsAdmin(false);
        setFirebaseStatusMessage("Neprihlásený");
        setCurrentPage('home');
      }
    });

    return () => unsubscribe();
  }, []);

  // Load reference data
  React.useEffect(() => {
    if (!isAuthReady || !userId) return;

    const loadReferenceData = async () => {
      try {
        const refDataCollection = firebase.firestore().collection(`artifacts/${appId}/public/data/referenceData`);
        const snapshot = await refDataCollection.get();
        
        const fetchedData = {};
        snapshot.docs.forEach(doc => {
          fetchedData[doc.id] = doc.data().values || [];
        });
        
        setAllReferenceData(fetchedData);
      } catch (error) {
        showMessage(`Chyba pri načítaní referenčných dát: ${error.message}`);
      }
    };

    loadReferenceData();
  }, [isAuthReady, userId, appId]);

  const handleNavigate = (page) => setCurrentPage(page);
  const showMessage = (message) => setModalMessage(message);
  const closeMessageModal = () => setModalMessage(null);

  const handleLogin = async (email, password) => {
    try {
      console.log('Attempting login with email:', email);
      console.log('Firebase config check:', {
        apiKey: firebase.app().options.apiKey,
        authDomain: firebase.app().options.authDomain,
        projectId: firebase.app().options.projectId
      });
      await firebase.auth().signInWithEmailAndPassword(email, password);
      setIsAuthModalOpen(false);
      showMessage('Úspešne ste sa prihlásili!');
    } catch (error) {
      console.error('Login error details:', error);
      console.error('Error code:', error.code);
      console.error('Error message:', error.message);
      showMessage(`Chyba pri prihlasovaní: ${error.message}`);
    }
  };

  const handleRegister = async (email, password, name) => {
    try {
      console.log('Attempting registration with email:', email, 'name:', name);
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      await userCredential.user.updateProfile({ displayName: name });

      // Pošli overovací email
      await userCredential.user.sendEmailVerification({
        url: window.location.origin, // URL kam sa používateľ vráti po overení
        handleCodeInApp: false
      });

      // Uloženie používateľa do globálnej kolekcie používateľov
      await firebase.firestore().collection(`artifacts/${appId}/users`).doc(userCredential.user.uid).set({
        name: name,
        email: email,
        uid: userCredential.user.uid,
        createdAt: new Date(),
        lastSignIn: new Date(),
        emailVerified: false,
        customClaims: {}
      });

      setIsAuthModalOpen(false);
      showMessage('Úspešne ste sa zaregistrovali! Skontrolujte si email a potvrďte svoju adresu.');
    } catch (error) {
      console.error('Registration error details:', error);
      console.error('Error code:', error.code);
      console.error('Error message:', error.message);
      showMessage(`Chyba pri registrácii: ${error.message}`);
    }
  };

  const renderPage = () => {
    console.log('App.jsx renderPage called with currentPage:', currentPage);
    console.log('App.jsx state:', { userId, isAuthReady, isRegisteredUser });
    
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'lokomotivy':
        return <ModelsPage 
          showMessage={showMessage} 
          db={db} 
          userId={userId} 
          isAuthReady={isAuthReady} 
          allReferenceData={allReferenceData} 
          initialCategory="Lokomotíva"
        />;
      case 'vagony':
        return <ModelsPage 
          showMessage={showMessage} 
          db={db} 
          userId={userId} 
          isAuthReady={isAuthReady} 
          allReferenceData={allReferenceData} 
          initialCategory="Vagón"
        />;
      case 'prislusenstvo':
        return <ModelsPage 
          showMessage={showMessage} 
          db={db} 
          userId={userId} 
          isAuthReady={isAuthReady} 
          allReferenceData={allReferenceData} 
          initialCategory="Príslušenstvo"
        />;
      case 'models':
        console.log('Rendering ModelsPage with props:', { 
          showMessage: !!showMessage, 
          db: !!db, 
          userId, 
          isAuthReady, 
          allReferenceDataKeys: Object.keys(allReferenceData) 
        });
        return <ModelsPage 
          showMessage={showMessage} 
          db={db} 
          userId={userId} 
          isAuthReady={isAuthReady} 
          allReferenceData={allReferenceData} 
          initialCategory="Lokomotíva"
        />;
      case 'ciselnici':
        return <CiselniciPage 
          showMessage={showMessage} 
          db={db} 
          userId={userId} 
          isAuthReady={isAuthReady} 
          appId={appId} 
        />;
      case 'print':
        return <PrintPage />;
      case 'settings':
        return <SettingsPage />;
      case 'userManagement':
        return <UserManagement showMessage={showMessage} appId={appId} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <Header 
        onNavigate={handleNavigate} 
        onLoginClick={() => setIsAuthModalOpen(true)} 
        authStatusMessage={firebaseStatusMessage} 
        userId={userId} 
        isHomePage={currentPage === 'home'} 
      />
      <div className="flex flex-1">
        <Sidebar onNavigate={handleNavigate} isRegisteredUser={isRegisteredUser} isAdmin={isAdmin} />
        <main className="flex-1 p-8 overflow-y-auto">
          {renderPage()}
        </main>
      </div>
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={handleLogin}
        onRegister={handleRegister}
      />
      <MessageModal message={modalMessage} onClose={closeMessageModal} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));