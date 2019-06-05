import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  registrationUser() {
    this.afAuth.auth.createUserWithEmailAndPassword('hfyyv@fghfgh.ui', 'dfgfdgdf')
      .then( user => console.log(user) )
      .catch( er => console.log(er))
  }
}
