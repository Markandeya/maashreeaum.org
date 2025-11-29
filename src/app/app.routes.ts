import { Routes } from '@angular/router';
import { MaashreePage } from './pages/maashree-page/maashree-page';
import { LandingPage } from './pages/landing-page/landing-page';
import { ShreejaAshramComponent } from './pages/shreeja-ashram/shreeja-ashram.component';
import { DonatePage } from './pages/donate-page/donate-page';
import { NewsletterJan2025Component } from './pages/newsletters/newsletter-jan-2025/newsletter-jan-2025';
import { NewslettersOverviewComponent } from './pages/newsletters/newsletters-overview/newsletters-overview';

export const routes: Routes = [
    { path: '', component: LandingPage },
    { path: 'maashree', component: MaashreePage },
    { path: 'shreeja-ashram', component: ShreejaAshramComponent },
    { path: 'donate', component: DonatePage },
    { path: 'newsletters', component: NewslettersOverviewComponent },
    { path: 'newsletters/jan-2025', component: NewsletterJan2025Component }
];
