import { Component, NgZone, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as emailjs from '@emailjs/browser';

@Component({
    selector: 'app-ikshanaa',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './ikshanaa.component.html',
    styleUrls: ['./ikshanaa.component.scss']
})
export class IkshanaaComponent {
    registrationForm: FormGroup;
    isSubmitting = false;
    submitStatus: 'success' | 'error' | null = null;
    statusMessage = '';

    constructor(
        private fb: FormBuilder,
        private ngZone: NgZone,
        private cdr: ChangeDetectorRef
    ) {
        this.registrationForm = this.fb.group({
            name: ['', Validators.required],
            age: ['', Validators.required],
            gender: ['', Validators.required],
            location: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', Validators.required],
            expectations: [''],
            ailments: ['']
        });
    }

    get f() { return this.registrationForm.controls; }

    async onSubmit() {
        if (this.registrationForm.invalid) {
            this.registrationForm.markAllAsTouched();
            return;
        }

        this.isSubmitting = true;
        this.submitStatus = null;

        const formVal = this.registrationForm.value;

        const templateParams = {
            name: formVal.name,
            email: formVal.email,
            reply_to: formVal.email,
            // Mapping fields to parameters if supported, otherwise sending formatted message
            age: formVal.age,
            gender: formVal.gender,
            location: formVal.location,
            phone: formVal.phone,
            expectations: formVal.expectations,
            ailments: formVal.ailments,
            // Consolidated message just in case the template relies on 'message'
            message: `
        New Registration for Ikshanaa:
        -----------------------------
        Name: ${formVal.name}
        Age: ${formVal.age}
        Gender: ${formVal.gender}
        Location: ${formVal.location}
        Email: ${formVal.email}
        Phone: ${formVal.phone}
        
        Expectations:
        ${formVal.expectations}
        
        Physical Ailments:
        ${formVal.ailments}
      `
        };

        try {
            await emailjs.send(
                'service_xqf3ldn',
                'template_64e5s34', // User provided template ID
                templateParams,
                'mgOkCx1iPK20WYB2q'
            );

            this.ngZone.run(() => {
                this.submitStatus = 'success';
                this.statusMessage = 'Registration successful! We will contact you soon.';
                this.registrationForm.reset();
                this.isSubmitting = false;
                this.cdr.detectChanges();
            });
        } catch (error) {
            this.ngZone.run(() => {
                console.error('EmailJS Error:', error);
                this.submitStatus = 'error';
                this.statusMessage = 'Failed to submit registration. Please try again later.';
                this.isSubmitting = false;
                this.cdr.detectChanges();
            });
        }
    }
}
