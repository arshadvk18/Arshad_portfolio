import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <header >
      <div class="logo">
        <a routerLink="/">My Portfolio</a>
      </div>
      
      <button class="mobile-menu-toggle" (click)="toggleMobileMenu()" [class.active]="isMobileMenuOpen">
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <nav [class.mobile-open]="isMobileMenuOpen">
        <ul >
          <li ><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeMobileMenu()">Home</a></li>
          <li ><a routerLink="/about" routerLinkActive="active" (click)="closeMobileMenu()">About</a></li>
          <li ><a routerLink="/skills" routerLinkActive="active" (click)="closeMobileMenu()">Skills</a></li>
          <li ><a routerLink="/certifications" routerLinkActive="active" (click)="closeMobileMenu()">Certifications</a></li>
          <li ><a routerLink="/projects" routerLinkActive="active" (click)="closeMobileMenu()">Projects</a></li>
          <li ><a routerLink="/contact" routerLinkActive="active" (click)="closeMobileMenu()">Contact</a></li>
          <li class="theme-toggle-item">
            <button class="theme-toggle" (click)="themeService.toggleTheme()">
              <span *ngIf="themeService.isDarkMode()()">☀️ Light Mode</span>
              <span *ngIf="!themeService.isDarkMode()()">🌙 Dark Mode</span>
            </button>
          </li>
        </ul>
      </nav>
      
      <button class="theme-toggle desktop-only" (click)="themeService.toggleTheme()">
        <span *ngIf="themeService.isDarkMode()()">☀️</span>
        <span *ngIf="!themeService.isDarkMode()()">🌙</span>
      </button>
    </header>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  constructor(public themeService: ThemeService) { }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
