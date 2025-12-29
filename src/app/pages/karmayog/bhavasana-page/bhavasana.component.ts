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
export class BhavasanaComponent { }
