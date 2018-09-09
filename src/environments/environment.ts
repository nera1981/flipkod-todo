// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyC54sAi2E2Y08Hz8x53BaS_caxuFeY6Gck',
    authDomain: 'flipkodtestproject.firebaseapp.com',
    databaseURL: 'https://flipkodtestproject.firebaseio.com',
    projectId: 'flipkodtestproject',
    storageBucket: 'flipkodtestproject.appspot.com',
    messagingSenderId: '625117816943'
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
