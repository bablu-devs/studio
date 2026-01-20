'use client';

import React, { useMemo, type ReactNode } from 'react';
import { FirebaseProvider } from '@/firebase/provider';
import { initializeFirebase } from '@/firebase';
import { firebaseConfig } from './config';

interface FirebaseClientProviderProps {
  children: ReactNode;
}

export function FirebaseClientProvider({ children }: FirebaseClientProviderProps) {
  const firebaseServices = useMemo(() => {
    // During a Vercel build (or any server-side build), public environment variables
    // may not be available. We check if the essential config is missing and,
    // if so, we skip Firebase initialization on the server to prevent build errors.
    // On the client-side, Next.js inlines the public env vars, so initialization proceeds.
    const isServer = typeof window === 'undefined';
    const isConfigMissing = !firebaseConfig.apiKey || !firebaseConfig.projectId;

    if (isServer && isConfigMissing) {
      console.warn(
        'Firebase config is missing on the server. Skipping initialization. This is expected during Vercel build if env vars are not set in the project settings.'
      );
      return { firebaseApp: null, auth: null, firestore: null };
    }
    
    return initializeFirebase();
  }, []); // Empty dependency array ensures this runs only once

  return (
    <FirebaseProvider
      firebaseApp={firebaseServices.firebaseApp}
      auth={firebaseServices.auth}
      firestore={firebaseServices.firestore}
    >
      {children}
    </FirebaseProvider>
  );
}
