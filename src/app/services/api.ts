import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private http = inject(HttpClient);

  public subscribeToNewsletter(email: string) {
    return this.http.post(`${environment.baseUrl}/newsletter/subscribe`, { email });
  }
}
