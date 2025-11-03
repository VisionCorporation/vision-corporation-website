import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface Alert {
  id: number;
  type: 'success' | 'error' | 'warning';
  message: string;
  position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  isVisible: boolean;
}

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

  showAlert(
    type: 'success' | 'error' | 'warning',
    message: string,
    duration = 5000,
    position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' = 'top-right'
  ) {
    const alert: Alert = {
      id: Date.now() + Math.random(),
      type,
      message,
      position,
      isVisible: true
    };


    this.alerts.update(list => [...list, alert]);


    if (duration > 0) {
      setTimeout(() => {
        this.fadeOutAlert(alert.id);
      }, duration);
    }
  }

  fadeOutAlert(id: number) {
    const alert = this.alerts().find(a => a.id === id);
    if (!alert) return;


    alert.isVisible = false;
    this.alerts.update(list => [...list]);


    setTimeout(() => {
      this.removeAlert(id);
    }, 300);
  }

  removeAlert(id: number) {
    this.alerts.update(list => list.filter(a => a.id !== id));
  }

  getAlertsByPosition(position: string): Alert[] {
    return this.alerts().filter(alert => alert.position === position);
  }

  getPositionClasses(position: string): string {
    const base = 'fixed z-50 flex flex-col gap-2 pointer-events-none w-full **items-center**';

    const map: Record<string, string> = {
      'top-right': `${base} top-4 **sm:items-end sm:w-auto sm:right-4 sm:left-auto**`,
      'top-left': `${base} top-4 **sm:items-start sm:w-auto sm:left-4 sm:right-auto**`,
      'bottom-right': `${base} bottom-4 **sm:items-end sm:w-auto sm:right-4 sm:left-auto**`,
      'bottom-left': `${base} bottom-4 **sm:items-start sm:w-auto sm:left-4 sm:right-auto**`
    };
    return map[position] || map['top-right'];
  }


  getAlertClasses(type: string): string {
    const map: Record<string, string> = {
      success: 'bg-[#6ABE6D]/10 border border-[#348537]',
      error: 'bg-[#FC706D]/10 border border-[#E22420]',
      warning: 'bg-[#FBA03C]/10 border border-[#EA690C]'
    };
    return map[type] || map['success'];
  }

  getTextClass(type: string): string {
    const map: Record<string, string> = {
      success: 'text-[#348537]',
      error: 'text-[#E22420]',
      warning: 'text-[#EA690C]'
    };
    return map[type] || map['success'];
  }
}
