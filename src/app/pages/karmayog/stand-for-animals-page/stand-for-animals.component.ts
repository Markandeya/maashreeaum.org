import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-stand-for-animals',
    standalone: true,
    imports: [CommonModule, RouterModule, FormsModule],
    templateUrl: './stand-for-animals.component.html',
    styleUrl: './stand-for-animals.component.scss'
})
export class StandForAnimalsComponent {
    currentSlide = 0;
    galleryImages = [
        { src: 'stand-for-animals-1.jpg', alt: 'Stand For Animals Event 1' },
        { src: 'stand-for-animals-2.jpg', alt: 'Stand For Animals Event 2' },
        { src: 'stand-for-animals-3.jpg', alt: 'Stand For Animals Event 3' }
    ];

    contactForm = {
        name: '',
        email: '',
        message: ''
    };

    nextSlide(): void {
        this.currentSlide = (this.currentSlide + 1) % this.galleryImages.length;
    }

    prevSlide(): void {
        this.currentSlide = (this.currentSlide - 1 + this.galleryImages.length) % this.galleryImages.length;
    }

    goToSlide(index: number): void {
        this.currentSlide = index;
    }

    onSubmit(): void {
        console.log('Contact form submitted:', this.contactForm);
        // Reset form
        this.contactForm = { name: '', email: '', message: '' };
        alert('Thank you for your message. We will get back to you soon!');
    }
}
