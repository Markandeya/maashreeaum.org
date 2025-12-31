import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

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

    setAmount(amount: string): void {
        this.donationForm.amount = amount;
        this.donationForm.customAmount = '';
    }

    onSubmit(): void {
        console.log('Donation form submitted:', this.donationForm);
        // Here you would typically integrate with a payment gateway
        alert('Thank you for your interest in donating. This feature is currently in demonstration mode.');

        // Reset form
        this.donationForm = {
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
    }
}
