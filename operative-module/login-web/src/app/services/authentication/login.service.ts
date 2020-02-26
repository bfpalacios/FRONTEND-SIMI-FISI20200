import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'simi/api/v1/authentication';
   }

  public signInWithEmailAndPassword(user: User) {
    return this.http.post<User>(this.url + '/withEmailAndPassword', user);
  }

  public signInLikeInvited() {
    const user = new User();
    user.setUserInvited();
    return this.http.post<User>(this.url + '/signInLikeInvited', user);
  }
}
