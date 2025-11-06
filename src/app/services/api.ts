import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Newsletter } from '../interfaces/newsletter.interface';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private http = inject(HttpClient);

  public subscribeToNewsletter(email: string) {
    return this.http.post(`${environment.baseUrl}/newsletter/subscribe`, { email });
  }

  public sendNewsletter(newsletterData: Newsletter) {
    return this.http.post(`${environment.baseUrl}/newsletter/send`, { newsletterData })
  }
}
