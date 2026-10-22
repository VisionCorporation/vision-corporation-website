import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Alert } from '../../../interfaces/alert.interface';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.html',
  styleUrls: ['./alert.css']
})
export class AlertComponent {
  private alerts = signal<Alert[]>([]);
  positions = ['top-right', 'top-left', 'bottom-right', 'bottom-left'];

  public showAlert(
    type: 'success' | 'error' | 'notification',
    message: string,
    duration = 5000,
    position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' = 'top-right'
  ) {
    const alert: Alert = {
      id: Date.now() + Math.random(),
      type,
      message,
      position,
      isVisible: true,
      duration
    };


    this.alerts.update(list => [...list, alert]);


    if (duration > 0) {
      setTimeout(() => {
        this.fadeOutAlert(alert.id);
      }, duration);
    }
  }

  public fadeOutAlert(id: number) {
    const alert = this.alerts().find(a => a.id === id);
    if (!alert) return;


    alert.isVisible = false;
    this.alerts.update(list => [...list]);


    setTimeout(() => {
      this.removeAlert(id);
    }, 350);
  }

  private removeAlert(id: number) {
    this.alerts.update(list => list.filter(a => a.id !== id));
  }

  public getAlertsByPosition(position: string): Alert[] {
    return this.alerts().filter(alert => alert.position === position);
  }

  public getTheme(type: string) {
    const map: Record<string, { icon: string; bar: string }> = {
      success: {
        icon: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400',
        bar: 'bg-emerald-500'
      },
      error: {
        icon: 'bg-red-500/15 text-red-600 dark:text-red-400',
        bar: 'bg-red-500'
      },
      notification: {
        icon: 'bg-amber-500/15 text-amber-600 dark:text-amber-400',
        bar: 'bg-amber-500'
      }
    };
    return map[type] || map['success'];
  }

  public getSlideClass(position: string): string {
    const v = position.startsWith('top') ? 'slide-top' : 'slide-bottom';
    const h = position.endsWith('right') ? 'slide-right' : 'slide-left';
    return `${v} ${h}`;
  }

  public getPositionClasses(position: string): string {
    const base = 'fixed z-50 flex flex-col gap-3 pointer-events-none w-full items-center';
    const map: Record<string, string> = {
      'top-right': `${base} top-4 sm:items-end sm:w-auto sm:right-4 sm:left-auto`,
      'top-left': `${base} top-4 sm:items-start sm:w-auto sm:left-4 sm:right-auto`,
      'bottom-right': `${base} bottom-4 sm:items-end sm:w-auto sm:right-4 sm:left-auto`,
      'bottom-left': `${base} bottom-4 sm:items-start sm:w-auto sm:left-4 sm:right-auto`
    };
    return map[position] || map['top-right'];
  }
}
