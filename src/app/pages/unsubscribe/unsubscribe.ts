import { ChangeDetectorRef, Component, Inject, inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Api } from '../../services/api';
import { isPlatformBrowser } from '@angular/common';
import { AlertComponent } from '../../components/shared/alert/alert';

@Component({
  selector: 'app-unsubscribe',
  imports: [],
  templateUrl: './unsubscribe.html',
  styleUrl: './unsubscribe.css'
})
export class Unsubscribe implements OnInit {
  @ViewChild('alert') alert!: AlertComponent;
  public isProcessing = true;
  public isResubscribed = false
  public success = false;
  public message = 'Please wait...';
  private cdr = inject(ChangeDetectorRef);
  private api = inject(Api);
  private route = inject(ActivatedRoute);
  public email: string | null = ''

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.unsubscribeFromNewsletter();
    }
  }

  private unsubscribeFromNewsletter() {
    this.email = this.route.snapshot.queryParamMap.get('email');
    const token = this.route.snapshot.queryParamMap.get('token');

    if (this.email && token) {
      const alreadyUnsubscribed = localStorage.getItem(`unsubscribed:${this.email}`);
      if (alreadyUnsubscribed) {
        this.success = true;
        this.message = `Your email, (${this.email}) has already been permanently removed from Vision Corporation’s mailing list.`;
        this.detectFormChanges();
        return;
      }

      this.api.unsubscribeFromNewsletter(this.email, token).subscribe({
        next: () => {
          this.success = true;
          this.message = `Your email, (${this.email}) has been permanently removed from Vision Corporation’s mailing list.`;
          localStorage.setItem(`unsubscribed:${this.email}`, 'true');
          this.detectFormChanges();
        },
        error: () => {
          this.success = false;
          this.message = 'We encountered a problem while unsubscribing you. Please try again later.';
          this.detectFormChanges();
        }
      });
    } else {
      this.success = false;
      this.message = 'Invalid unsubscribe link.';
      this.detectFormChanges();
    }
  }

  private detectFormChanges() {
    queueMicrotask(() => {
      this.isProcessing = false;
      this.cdr.detectChanges();
    });
  }

  public resubscribeUser() {
    this.api.subscribeToNewsletter(this.email ?? '').subscribe({
      next: () => {
        this.isResubscribed = true
      },
      error: () => {

      }
    })
  }
}
