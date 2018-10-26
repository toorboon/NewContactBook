// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


// Connect the Firebase database  with the infos we get from the Firebase
// Must change the Api-key when you want to upload it to GitHub, otwherwise it will be comprimised
export const environment = { 
  production: false,
firebaseConfig:{
	apiKey: "AIzaSyB14CsNighS4wNpya3KALW80FFPXb3JEw8",
    authDomain: "contactbook-new.firebaseapp.com",
    databaseURL: "https://contactbook-new.firebaseio.com",
    projectId: "contactbook-new",
    storageBucket: "contactbook-new.appspot.com",
    messagingSenderId: "494926399176"
	}
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
