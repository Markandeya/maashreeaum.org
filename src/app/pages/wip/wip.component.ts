import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-wip',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './wip.component.html',
    styleUrls: ['./wip.component.scss']
})
export class WipComponent { }
