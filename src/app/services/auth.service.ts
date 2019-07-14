import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

interface User {
  name?: string;
  email: string;
  password: string;
  avatar?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = `${environment.SERVER_URL}/auth/login`;
  private registerUrl = `${environment.SERVER_URL}/auth/register`;

  constructor(private httpClient: HttpClient, private router: Router) { }

  async login(userData: User) {
    interface LoggedUser {
      expiresIn: number;
      accessToken: string;
      userId: string;
      status: number;
    }

    try {
      const loggedUser = await this.httpClient.post<LoggedUser>(this.loginUrl, userData).toPromise();

      if (loggedUser && loggedUser.expiresIn) {
        this.setSession(loggedUser);
        this.router.navigate(['info']);
      }
    } catch {
      this.router.navigate(['register']);
    }
  }

  async register(userData: User) {
    type createdUser = User & { id: number };
    const user = await this.httpClient.post<createdUser>(this.registerUrl, userData).toPromise();

    if (user && user.id) {
      this.login(user);
    }
  }

  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('id_token', authResult.accessToken);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

}
