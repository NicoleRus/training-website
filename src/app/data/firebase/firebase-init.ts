import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { environment } from './firebase';
import { InjectionToken } from '@angular/core';
import { AngularFireModule } from "@angular/fire/compat";

export const FIREBASE_INITIALIZATION = new InjectionToken<Promise<any>>('firebase-initialization');

@Injectable({
  providedIn: 'root'
})
export class FirebaseInitializationService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  loadFirebaseAndFirebaseUI(): Promise<any> {
    if (isPlatformBrowser(this.platformId)) {

      return new Promise((resolve, reject) => {
        import('firebaseui-angular').then(firebaseUiAngular => {
          const { firebase, firebaseui, FirebaseUIModule } = firebaseUiAngular;
          const firebaseUiAuthConfig: firebaseui.auth.Config = {
            signInFlow: 'popup',
            signInOptions: [
              firebase.auth.GoogleAuthProvider.PROVIDER_ID,
              {
                scopes: [
                  'public_profile',
                  'email',
                  'user_likes',
                  'user_friends'
                ],
                customParameters: {
                  'auth_type': 'reauthenticate'
                },
                provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
              },
              firebase.auth.TwitterAuthProvider.PROVIDER_ID,
              firebase.auth.GithubAuthProvider.PROVIDER_ID,
              {
                requireDisplayName: false,
                provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
              },
              firebase.auth.PhoneAuthProvider.PROVIDER_ID,
              firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
            ],
            tosUrl: '<your-tos-link>',
            privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
            credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO
          };
          resolve(FirebaseUIModule);
          return Promise.all([
            AngularFireModule.initializeApp(environment.firebaseConfig),
            FirebaseUIModule.forRoot(firebaseUiAuthConfig),
          ]);
        }).catch(error => {
          console.error('Error loading FirebaseUI:', error);
          reject(error);
        });
      });
    } else {
      return Promise.resolve(null);
    }
  }
}
