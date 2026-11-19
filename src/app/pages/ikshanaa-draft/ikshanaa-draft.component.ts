import { Component, DestroyRef, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import * as emailjs from '@emailjs/browser';
import { IkshanaaJuneGalleryComponent } from './ikshanaa-june-gallery.component';

@Component({
    selector: 'app-ikshanaa-draft',
    standalone: true,
    imports: [ReactiveFormsModule, RouterLink, IkshanaaJuneGalleryComponent],
    templateUrl: './ikshanaa-draft.component.html',
    styleUrls: ['./ikshanaa-draft.component.scss']
})
export class IkshanaaDraftComponent {
    protected readonly enquiryEmail = 'uttarannofmaashree@gmail.com';
    protected readonly directionsUrl = 'https://www.google.com/maps/dir/?api=1&origin=Mumbai%2C+Maharashtra&destination=Shreejaashram%2C+Khodala%2C+Maharashtra&travelmode=driving';

    protected readonly enquiryForm = inject(FormBuilder).nonNullable.group({
        name: ['', [Validators.required, Validators.pattern(/\S/), Validators.maxLength(120)]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern(/\+?[\d\s().-]*\d[\d\s().-]*/),
            Validators.minLength(7), Validators.maxLength(30)]],
        question: ['', Validators.maxLength(1000)],
        consent: [false, Validators.requiredTrue]
    });
    protected readonly fields = this.enquiryForm.controls;
    protected readonly submitting = signal(false);
    protected readonly submitStatus = signal<'idle' | 'success' | 'error'>('idle');

    constructor() {
        const title = inject(Title);
        const meta = inject(Meta);
        const isDraft = inject(ActivatedRoute).snapshot.routeConfig?.path === 'ikshanaa-draft';
        const originalTitle = title.getTitle();
        const pageTitle = 'Ikshanaa | December 2026 Programme | Shreejaashram';
        const description = 'Ikshanaa is a residential spiritual Programme for self-enquiry at Shreejaashram, Khodala, from 16 to 19 December 2026.';
        const tags: MetaDefinition[] = [
            { property: 'og:title', content: pageTitle },
            { property: 'og:description', content: description },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'https://maashreeaum.org/ikshanaa' },
            { property: 'og:image', content: 'https://maashreeaum.org/ikshanaa/meditation.jpg' },
            { property: 'og:image:alt', content: 'Ikshanaa participants sitting in meditation overlooking the Sahyadri hills' }
        ];

        const originalDescription = meta.getTag('name="description"')?.content;
        title.setTitle(pageTitle);
        if (isDraft) {
            meta.updateTag({ name: 'robots', content: 'noindex' });
        } else {
            meta.removeTag('name="robots"');
        }
        meta.updateTag({ name: 'description', content: description });
        for (const tag of tags) meta.updateTag(tag);

        inject(DestroyRef).onDestroy(() => {
            // On a direct load, prerendering may already have set the December metadata.
            title.setTitle(originalTitle === pageTitle ? 'Maashreeaum — Uttarann Spiritual Foundation' : originalTitle);
            meta.removeTag('name="robots"');
            meta.updateTag({
                name: 'description',
                content: originalDescription && originalDescription !== description
                    ? originalDescription
                    : 'Uttarann is a Spiritual Foundation comprised of Shreejaashram and Shree Aum Charitable Trust, guided by Shree Guru Maashree.'
            });
            for (const tag of tags) meta.removeTag(`property="${tag['property']}"`);
        });
    }

    protected async submitEnquiry() {
        if (this.submitting()) return;

        this.submitStatus.set('idle');
        if (this.enquiryForm.invalid) {
            this.enquiryForm.markAllAsTouched();
            return;
        }

        this.submitting.set(true);
        const { name, email, phone, question } = this.enquiryForm.getRawValue();
        const subject = 'Ikshanaa enquiry | December 2026';

        try {
            await emailjs.send('service_xqf3ldn', 'template_s0tjsm8', {
                name: name.trim(),
                email: email.trim(),
                reply_to: email.trim(),
                subject,
                message: [
                    subject,
                    `Name: ${name.trim()}`,
                    `Email: ${email.trim()}`,
                    `Mobile / WhatsApp: ${phone.trim()}`,
                    question.trim() ? `\nEnquiry: ${question.trim()}` : ''
                ].filter(Boolean).join('\n')
            }, 'mgOkCx1iPK20WYB2q');

            this.enquiryForm.reset();
            this.submitStatus.set('success');
        } catch {
            this.submitStatus.set('error');
        } finally {
            this.submitting.set(false);
        }
    }
}
