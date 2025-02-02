import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { type Profile } from '../../types/profile.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http = inject(HttpClient);
  baseApiUrl = 'https://icherniakov.ru/yt-course';
  constructor() {}

  getTestsAccounts() {
    return this.http.get<Profile[]>(`${this.baseApiUrl}/account/test_accounts`);
  }

  getMe() {
    return this.http.get<Profile>(`${this.baseApiUrl}/account/me`);
  }
}
