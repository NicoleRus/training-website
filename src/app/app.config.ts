import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { ExtraOptions, provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { FIREBASE_INITIALIZATION, FirebaseInitializationService } from './data/firebase/firebase-init';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withHashLocation()),
    provideClientHydration(),
    FirebaseInitializationService,
    {
      provide: APP_INITIALIZER,
      useFactory: (firebaseInitializationService: FirebaseInitializationService) => () => firebaseInitializationService.loadFirebaseAndFirebaseUI(),
      multi: true,
      deps: [FirebaseInitializationService]
    },
    {
      provide: FIREBASE_INITIALIZATION,
      useFactory: (firebaseInitializationService: FirebaseInitializationService) => firebaseInitializationService.loadFirebaseAndFirebaseUI(),
      deps: [FirebaseInitializationService]
    }
  ]
};

export const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload' //Must have if you want to be able to use the anchor more than once
};
