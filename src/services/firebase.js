import firebase from 'firebase';
import firebaseui from 'firebaseui';

class FirebaseService {
  constructor() {
    // Initialize Firebase
    const config = {
      /* put config */
    };

    firebase.initializeApp(config);
  }

  auth() {
    // FirebaseUI config.
    var uiConfig = {
      signInSuccessUrl: '<url-to-redirect-to-on-success>',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
      ],
      // Terms of service url.
      tosUrl: '<your-tos-url>',
      // Privacy policy url.
      privacyPolicyUrl: '<your-privacy-policy-url>'
    };

    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);
  }
}

export default FirebaseService;
