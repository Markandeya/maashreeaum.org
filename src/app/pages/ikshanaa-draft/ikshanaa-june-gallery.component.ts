import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-ikshanaa-june-gallery',
    standalone: true,
    templateUrl: './ikshanaa-june-gallery.component.html',
    styleUrl: './ikshanaa-june-gallery.component.scss'
})
export class IkshanaaJuneGalleryComponent {
    protected readonly photos = [
        { file: 'participants', width: 800, smallWidth: 480, alt: 'Ikshanaa participants standing together outside Shreejaashram' },
        { file: '1192', width: 768, smallWidth: 384, portrait: true, alt: 'Seven participants standing together on a tree-lined path' },
        { file: 'gathering', width: 720, smallWidth: 480, alt: 'Participants gathered in the ashram hall' },
        { file: '1368', width: 768, smallWidth: 384, portrait: true, alt: 'Participants seated on the floor behind a flower arrangement' },
        { file: 'hills', width: 720, smallWidth: 480, alt: 'A participant looking out over the hills at dawn' },
        { file: '1282', width: 768, smallWidth: 384, portrait: true, alt: 'An Ikshanaa Programme booklet tied with a red ribbon beside a pencil' }
    ];

    protected readonly activeSlide = signal(0);

    protected updateActiveSlide(track: HTMLElement) {
        this.activeSlide.set(Math.round(track.scrollLeft / track.clientWidth));
    }

    protected moveSlide(track: HTMLElement, direction: number) {
        track.scrollTo({ left: (this.activeSlide() + direction) * track.clientWidth });
    }
}
