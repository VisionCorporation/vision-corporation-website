import { ChangeDetectorRef, Component, inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Api } from '../../services/api';

@Component({
  selector: 'app-unsubscribe',
  imports: [RouterLink],
  templateUrl: './unsubscribe.html',
  styleUrl: './unsubscribe.css'
})
export class Unsubscribe implements OnInit {
  public isProcessing = true;
  public success = false;
  public message = '';
  private cdr = inject(ChangeDetectorRef);
  private api = inject(Api);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.unsubscribeFromNewsletter()
  }

  private unsubscribeFromNewsletter() {
    const email = this.route.snapshot.queryParamMap.get('email');
    const token = this.route.snapshot.queryParamMap.get('token');

    if (email && token) {
      this.api.unsubscribeFromNewsletter(email, token).subscribe({
        next: () => {
          this.detectFormChanges()
          this.success = true;
          this.message = `Your email, (${email}) has been permanently removed from Vision Corporation’s mailing list`;

        },
        error: (err) => {
          this.detectFormChanges()
          this.success = false;
          this.message = 'We encountered a problem while unsubscribing you. Please try again later.';
        }
      });
    } else {
      this.detectFormChanges()
      this.message = 'Invalid unsubscribe link.';
    }
  }

  private detectFormChanges() {
    queueMicrotask(() => {
      this.isProcessing = false;
      this.cdr.detectChanges();
    });
  }
}
