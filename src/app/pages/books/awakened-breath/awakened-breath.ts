import { Component, HostListener, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Chapter {
    title: string;
    subtitle: string;
    pageIndex: number;
}

@Component({
    selector: 'app-awakened-breath',
    standalone: true,
    imports: [RouterLink, CommonModule],
    templateUrl: './awakened-breath.html',
    styleUrl: './awakened-breath.scss',
})
export class AwakenedBreathComponent {
    currentPage = 0;
    totalPages = 8;
    showChapterMenu = false;
    pageDirection: 'next' | 'prev' | '' = '';

    chapters: Chapter[] = [
        { title: 'Cover', subtitle: '', pageIndex: 0 },
        { title: 'Foreword', subtitle: 'A Pause in the Race', pageIndex: 1 },
        { title: 'Chapter One', subtitle: 'The Grand Illusion and Our Real Purpose', pageIndex: 2 },
        { title: 'Chapter Two', subtitle: 'The Nature of Our Current Karma', pageIndex: 3 },
        { title: 'Chapter Three', subtitle: 'Cleaning the Mirror of the Mind', pageIndex: 4 },
        { title: 'Chapter Four', subtitle: 'Conquering the Inner Fear', pageIndex: 5 },
        { title: 'Conclusion', subtitle: 'The Grace of the Guide', pageIndex: 6 },
        { title: 'Back Cover', subtitle: '', pageIndex: 7 },
    ];

    private touchStartX = 0;
    private touchEndX = 0;
    private swipeThreshold = 50;

    get progress(): number {
        return ((this.currentPage + 1) / this.totalPages) * 100;
    }

    @HostListener('window:keydown', ['$event'])
    handleKeyDown(event: KeyboardEvent) {
        if (event.key === 'ArrowRight') {
            this.nextPage();
        } else if (event.key === 'ArrowLeft') {
            this.prevPage();
        } else if (event.key === 'Escape') {
            this.showChapterMenu = false;
        }
    }

    onTouchStart(event: TouchEvent) {
        this.touchStartX = event.changedTouches[0].screenX;
    }

    onTouchEnd(event: TouchEvent) {
        this.touchEndX = event.changedTouches[0].screenX;
        this.handleSwipe();
    }

    private handleSwipe() {
        const diff = this.touchStartX - this.touchEndX;
        if (Math.abs(diff) > this.swipeThreshold) {
            if (diff > 0) {
                this.nextPage();
            } else {
                this.prevPage();
            }
        }
    }

    nextPage() {
        if (this.currentPage < this.totalPages - 1) {
            this.pageDirection = 'next';
            this.currentPage++;
        }
    }

    prevPage() {
        if (this.currentPage > 0) {
            this.pageDirection = 'prev';
            this.currentPage--;
        }
    }

    goToPage(index: number) {
        this.pageDirection = index > this.currentPage ? 'next' : 'prev';
        this.currentPage = index;
        this.showChapterMenu = false;
    }

    toggleChapterMenu() {
        this.showChapterMenu = !this.showChapterMenu;
    }
}
