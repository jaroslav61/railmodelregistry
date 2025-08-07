const admin = require('firebase-admin');

// Cesta k JSON súboru s kľúčom servisného účtu
// Uistite sa, že súbor serviceAccountKey.json je v tom istom priečinku ako tento skript
const serviceAccount = require('./serviceAccountKey.json'); // ZMEŇTE NÁZOV SÚBORU, AK STE HO INAK NAZVALI!

// UID používateľa, ktorému chcete priradiť rolu admina
const targetUid = 'CnN8aoisM9WDaRkU7KcXm8j372C2'; // <--- SEM VLOŽTE SKUTOČNÉ UID POUŽÍVATEĽA!

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

async function setAdminClaim() {
  try {
    // Nastaví custom claim 'admin' na true pre dané UID
    await admin.auth().setCustomUserClaims(targetUid, { admin: true });
    console.log(`Používateľovi s UID: ${targetUid} bola úspešne priradená rola 'admin'.`);

    // Voliteľné: Načítajte token používateľa a vypíšte jeho claims pre overenie
    const user = await admin.auth().getUser(targetUid);
    console.log('Claims používateľa po úprave:', user.customClaims);

  } catch (error) {
    console.error('Chyba pri priraďovaní roly admina:', error);
  } finally {
    // Ukončite aplikáciu po dokončení
    process.exit();
  }
}

setAdminClaim();