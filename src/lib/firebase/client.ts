import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app'
import { getAuth, type Auth } from 'firebase/auth'
import { firebaseConfig } from './config'

let _app: FirebaseApp | undefined
let _auth: Auth | undefined

export function getFirebaseAuth(): Auth {
  if (!_auth) {
    _app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()
    _auth = getAuth(_app)
  }
  return _auth
}
