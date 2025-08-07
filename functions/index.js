const functions = require('firebase-functions');
const admin = require('firebase-admin');

// Inicializácia Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp();
}

// Cloud Function na získanie zoznamu používateľov
exports.listUsers = functions.https.onCall(async (data, context) => {
  // Kontrola, či je používateľ prihlásený
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'Používateľ musí byť prihlásený.');
  }

  // Kontrola, či má používateľ admin práva z custom claims
  if (!context.auth.token.admin) {
    throw new functions.https.HttpsError('permission-denied', 'Nemáte oprávnenie na túto operáciu.');
  }

  try {
    // Získanie zoznamu používateľov
    const listUsersResult = await admin.auth().listUsers(1000); // max 1000 používateľov
    
    const users = listUsersResult.users.map(userRecord => ({
      uid: userRecord.uid,
      email: userRecord.email,
      displayName: userRecord.displayName,
      disabled: userRecord.disabled,
      emailVerified: userRecord.emailVerified,
      creationTime: userRecord.metadata.creationTime,
      lastSignInTime: userRecord.metadata.lastSignInTime,
      customClaims: userRecord.customClaims || {}
    }));

    return { users };
  } catch (error) {
    console.error('Chyba pri získavaní používateľov:', error);
    throw new functions.https.HttpsError('internal', 'Chyba pri získavaní používateľov.');
  }
});