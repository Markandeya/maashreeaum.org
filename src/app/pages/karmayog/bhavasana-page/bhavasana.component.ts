import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-bhavasana',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './bhavasana.component.html',
    styleUrl: './bhavasana.component.scss'
})
export class BhavasanaComponent {
    currentSlide = 0;
    galleryImages = [
        { src: 'bhavasana-1.jpeg', alt: 'Bhavasana Session 1' },
        { src: 'bhavasana-2.jpg', alt: 'Bhavasana Session 2' },
        { src: 'bhavasana-3.jpg', alt: 'Bhavasana Session 3' }
    ];

    nextSlide(): void {
        this.currentSlide = (this.currentSlide + 1) % this.galleryImages.length;
    }

    prevSlide(): void {
        this.currentSlide = (this.currentSlide - 1 + this.galleryImages.length) % this.galleryImages.length;
    }

    goToSlide(index: number): void {
        this.currentSlide = index;
    }
}
