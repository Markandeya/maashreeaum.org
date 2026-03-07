import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing-page/landing-page';

export const routes: Routes = [
    { path: '', component: LandingPage },
    { path: 'maashree', loadComponent: () => import('./pages/maashree-page/maashree-page').then(m => m.MaashreePage) },
    { path: 'shreeja-ashram', loadComponent: () => import('./pages/shreeja-ashram/shreeja-ashram.component').then(m => m.ShreejaAshramComponent) },
    { path: 'donate', loadComponent: () => import('./pages/donate-page/donate-page.component').then(m => m.DonatePageComponent) },
    { path: 'newsletters', loadComponent: () => import('./pages/newsletters/newsletters-overview/newsletters-overview').then(m => m.NewslettersOverviewComponent) },
    { path: 'newsletters/jan-2025', loadComponent: () => import('./pages/newsletters/newsletter-jan-2025/newsletter-jan-2025').then(m => m.NewsletterJan2025Component) },
    { path: 'newsletters/jan-jun-2025', loadComponent: () => import('./pages/newsletters/newsletter-jan-jun-2025/newsletter-jan-jun-2025').then(m => m.NewsletterJanJun2025Component) },
    { path: 'newsletters/jul-2025', loadComponent: () => import('./pages/newsletters/newsletter-jul-2025/newsletter-jul-2025').then(m => m.NewsletterJul2025Component) },
    { path: 'newsletters/jan-apr-2024', loadComponent: () => import('./pages/newsletters/newsletter-jan-apr-2024/newsletter-jan-apr-2024').then(m => m.NewsletterJanApr2024) },
    { path: 'newsletters/may-aug-2024', loadComponent: () => import('./pages/newsletters/newsletter-may-aug-2024/newsletter-may-aug-2024').then(m => m.NewsletterMayAug2024) },
    { path: 'newsletters/oct-dec-2024', loadComponent: () => import('./pages/newsletters/newsletter-oct-dec-2024/newsletter-oct-dec-2024').then(m => m.NewsletterOctDec2024) },
    { path: 'karmayog/stand-for-animals', loadComponent: () => import('./pages/karmayog/stand-for-animals-page/stand-for-animals.component').then(m => m.StandForAnimalsComponent) },
    { path: 'karmayog/bhavasana', loadComponent: () => import('./pages/karmayog/bhavasana-page/bhavasana.component').then(m => m.BhavasanaComponent) },
    { path: 'karmayog/shree-guru-vidyalaya', loadComponent: () => import('./pages/karmayog/shree-guru-vidyalaya-page/shree-guru-vidyalaya.component').then(m => m.ShreeGuruVidyalayaComponent) },
    { path: 'ikshanaa', loadComponent: () => import('./pages/ikshanaa/ikshanaa.component').then(m => m.IkshanaaComponent) },
    { path: 'privacy-policy', loadComponent: () => import('./pages/privacy-policy/privacy-policy').then(m => m.PrivacyPolicyComponent) },
    { path: 'wip', loadComponent: () => import('./pages/wip/wip.component').then(m => m.WipComponent) },
    { path: '404', loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFoundComponent) },
    { path: '**', loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFoundComponent) }
];
