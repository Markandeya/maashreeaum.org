import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { MaashreeIntro } from '../../components/maashree-intro/maashree-intro';
import { NewsletterPreview } from '../../components/newsletter-preview/newsletter-preview';
import { Uttarann } from '../../components/uttarann/uttarann';
import { Shreejaashram } from '../../components/shreejaashram/shreejaashram';
import { MaashreeSays } from '../../components/maashree-says/maashree-says';
import { Activities } from '../../components/activities/activities';


@Component({
    selector: 'app-landing-page',
    standalone: true,
    imports: [
        Hero,
        MaashreeIntro,
        NewsletterPreview,
        Uttarann,
        Shreejaashram,
        MaashreeSays,
        Activities,

    ],
    templateUrl: './landing-page.html',
    styleUrl: './landing-page.scss',
})
export class LandingPage { }
