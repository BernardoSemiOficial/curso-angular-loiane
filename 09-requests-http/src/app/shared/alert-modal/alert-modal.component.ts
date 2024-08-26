import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap/alert';

type AlertType = { type: string; msg: string; timeout: number };

@Component({
  selector: 'app-alert-modal',
  standalone: true,
  imports: [CommonModule, AlertModule],
  template: `
    @for (alert of alerts; track alert.msg) {
    <alert
      [type]="alert.type"
      [dismissOnTimeout]="alert.timeout"
      (onClosed)="onClosed(alert)"
    >
      {{ alert.msg }}
    </alert>
    }
  `,
  styleUrl: './alert-modal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertModalComponent {
  alerts: AlertType[] = [];
  dismissible = true;

  pushAlert(alert: Partial<AlertType>): void {
    if (alert.type && alert.msg) {
      this.alerts.push({
        type: alert.type,
        msg: alert.msg,
        timeout: 2000,
      });
    }
  }

  onClosed(dismissedAlert: AlertType): void {
    this.alerts = this.alerts.filter((alert) => alert !== dismissedAlert);
  }
}
