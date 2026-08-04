import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';

import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: "AIzaSyBtd4MiTKfl-Ob1u-xq_mxDckNWg8L3cYo",
  authDomain: "test-f2fc0.firebaseapp.com",
  projectId: "test-f2fc0",
  storageBucket: "test-f2fc0.firebasestorage.app",
  messagingSenderId: "913405811129",
  appId: "1:913405811129:web:75dbca5dcf595680953e68",
  measurementId: "G-1R3N3PD1J4"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
};
