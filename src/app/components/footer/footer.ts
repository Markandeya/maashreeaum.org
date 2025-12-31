import { Component, NgZone, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import * as emailjs from '@emailjs/browser';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  contactName: string = '';
  contactEmail: string = '';
  contactMessage: string = '';
  isSubmitting: boolean = false;
  showToast: boolean = false;
  toastMessage: string = '';
  toastType: 'success' | 'error' = 'success';

  constructor(private ngZone: NgZone, private cdr: ChangeDetectorRef) { }

  public async sendEmail() {
    console.log('sendEmail called');
    if (!this.contactName || !this.contactEmail || !this.contactMessage) {
      this.showToastNotification('Please fill in all fields.', 'error');
      return;
    }

    this.isSubmitting = true;

    try {
      const templateParams = {
        name: this.contactName,
        email: this.contactEmail,
        message: this.contactMessage,
      };

      console.log('Calling emailjs.send');
      await emailjs.send(
        'service_xqf3ldn',
        'template_s0tjsm8',
        templateParams,
        'mgOkCx1iPK20WYB2q'
      );

      this.ngZone.run(() => {
        console.log('Email sent successfully - inside NgZone');
        this.showToastNotification('Message sent successfully!', 'success');
        this.contactName = '';
        this.contactEmail = '';
        this.contactMessage = '';
        this.isSubmitting = false; // Reset explicitly here too just in case
        this.cdr.detectChanges(); // Force update
      });
    } catch (error) {
      this.ngZone.run(() => {
        console.error('Error sending email:', error);
        console.log('Caught error in sendEmail');
        this.showToastNotification(
          'Failed to send message. Please try again later.',
          'error'
        );
        this.isSubmitting = false;
        this.cdr.detectChanges();
      });
    }
  }

  private showToastNotification(message: string, type: 'success' | 'error') {
    this.toastMessage = message;
    this.toastType = type;
    this.showToast = true;

    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }
}
