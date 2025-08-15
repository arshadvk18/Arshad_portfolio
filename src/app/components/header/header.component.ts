import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,CommonModule],
  template: `
    <header >
      <div class="logo">
        <a routerLink="/">My Portfolio</a>
      </div>
      <nav >
        <ul >
          <li ><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
          <li ><a routerLink="/about" routerLinkActive="active">About</a></li>
          <li ><a routerLink="/skills" routerLinkActive="active">Skills</a></li>
          <li ><a routerLink="/projects" routerLinkActive="active">Projects</a></li>
          <li ><a routerLink="/contact" routerLinkActive="active">Contact</a></li>
        </ul>
      </nav>
      <button class="theme-toggle" (click)="themeService.toggleTheme()">
        <span *ngIf="themeService.isDarkMode()">☀️</span>
        <span *ngIf="!themeService.isDarkMode()">🌙</span>
      </button>
    </header>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public themeService: ThemeService) {}
}
