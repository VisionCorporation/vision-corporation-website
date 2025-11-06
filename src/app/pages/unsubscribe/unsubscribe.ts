import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-unsubscribe',
  imports: [],
  templateUrl: './unsubscribe.html',
  styleUrl: './unsubscribe.css'
})
export class Unsubscribe {
  public email: string | null = null;
  public isProcessing = true;
  public success = false;
  public message = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.email = this.route.snapshot.queryParamMap.get('email');

    setTimeout(() => {
      this.isProcessing = false;
      this.success = true;
      this.message = `Your email (${this.email}) has been unsubscribed successfully.`;
    }, 1500);
  }
}
