import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Newsletter } from '../interfaces/newsletter.interface';
import { ContactUs } from '../interfaces/contact-us.interface';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private http = inject(HttpClient);

  public subscribeToNewsletter(email: string) {
    return this.http.post(`${environment.baseUrl}/newsletter/subscribe`, { email });
  }

  public sendNewsletter(newsletterData: Newsletter) {
    return this.http.post(`${environment.baseUrl}/newsletter/send`, newsletterData)
  }

  public unsubscribeFromNewsletter(email: string, token: string) {
    return this.http.get(`${environment.baseUrl}/newsletter/unsubscribe`, {
      params: { email, token },
    });
  }

  public sendContactUsForm(formData: ContactUs) {
    return this.http.post(`${environment.baseUrl}/contact-us`, formData);
  }
}
