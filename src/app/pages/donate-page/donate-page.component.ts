import { Component, NgZone, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import * as emailjs from '@emailjs/browser';

@Component({
    selector: 'app-donate-page',
    standalone: true,
    imports: [CommonModule, RouterModule, FormsModule],
    templateUrl: './donate-page.component.html',
    styleUrl: './donate-page.component.scss'
})
export class DonatePageComponent {
    donationForm = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        idType: 'PAN CARD',
        idNumber: '',
        amount: '',
        customAmount: '',
        message: '',
        termsAccepted: false,
        donationType: 'General Donation'
    };

    donationTypes = ['General Donation', 'Corpus Donation'];
    donationAmounts = ['1000', '2000', '5000', '10000', '20000', '30000'];
    idTypes = ['ADHAAR NUMBER', 'PAN CARD NUMBER', 'VOTER ID', 'ID NUMBER'];
    
    isSubmitting = false;
    isSubmitted = false;
    errorMessage = '';

    constructor(private ngZone: NgZone, private cdr: ChangeDetectorRef) {}

    setAmount(amount: string): void {
        this.donationForm.amount = amount;
        this.donationForm.customAmount = '';
    }

    public async onSubmit(): Promise<void> {
        this.errorMessage = '';
        this.isSubmitting = true;

        try {
            const donationDetails = `Donation Details:
Type: ${this.donationForm.donationType}
Name: ${this.donationForm.firstName} ${this.donationForm.lastName}
Email: ${this.donationForm.email}
Phone: ${this.donationForm.phone}
ID Type: ${this.donationForm.idType}
ID Number: ${this.donationForm.idNumber}
Amount (INR): ${this.donationForm.amount}
User Message: ${this.donationForm.message || 'None'}
Terms Accepted: ${this.donationForm.termsAccepted}`;

            const templateParams = {
                name: `${this.donationForm.firstName} ${this.donationForm.lastName}`,
                email: this.donationForm.email,
                reply_to: this.donationForm.email,
                message: donationDetails,
            };

            await emailjs.send(
                'service_xqf3ldn',
                'template_s0tjsm8',
                templateParams,
                'mgOkCx1iPK20WYB2q'
            );

            this.ngZone.run(() => {
                this.isSubmitting = false;
                this.isSubmitted = true;
                this.cdr.detectChanges();
                
                // Open SBI Collect securely in a new tab
                window.open('https://onlinesbi.sbi.bank.in/sbicollect/icollecthome.htm?corpID=6033017', '_blank');
            });
        } catch (error) {
            this.ngZone.run(() => {
                console.error('Error sending donation notification:', error);
                this.errorMessage = 'Failed to submit the form. Please try again or contact support.';
                this.isSubmitting = false;
                this.cdr.detectChanges();
            });
        }
    }
}
