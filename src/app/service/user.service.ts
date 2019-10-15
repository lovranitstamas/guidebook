import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _fireDb: AngularFireDatabase) {
  }

  public addUser(user: User): void {
    this._fireDb.object(`${USERS_CHILD}/${user.uid}`).set(user);
  }
}
