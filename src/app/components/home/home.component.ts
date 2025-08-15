import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <div class="hero-content">
        <h1 >Hi, I'm <span class="highlight">Arshad Mahmood</span></h1>
        <h2 >Frontend Developer</h2>
        <p >I build modern, responsive web applications with Angular and other cutting-edge technologies.</p>
        <div class="cta-buttons">
          <a routerLink="/projects" class="btn primary">View My Work</a>
          <a routerLink="/contact" class="btn secondary">Contact Me</a>
        </div>
      </div>
      <div class="hero-image">
        <img src="assets/profile.jpg" alt="Your Name" />
      </div>
    </section>

    <section class="featured-skills">
      <h2 >My Expertise</h2>
      <div class="skills-container">
        <div class="skill-card">
          <i class="fas fa-code"></i>
          <h3 >Frontend Development</h3>
          <p >Creating responsive and interactive user interfaces with Angular, TypeScript, and modern CSS.</p>
        </div>
        <div class="skill-card">
          <i class="fas fa-mobile-alt"></i>
          <h3 >Responsive Design</h3>
          <p >Building applications that work flawlessly across all devices and screen sizes.</p>
        </div>
        <div class="skill-card">
          <i class="fas fa-server"></i>
          <h3 >Backend Integration</h3>
          <p >Connecting frontend applications with RESTful APIs and backend services.</p>
        </div>
      </div>
      <div class="center-button">
        <a routerLink="/skills" class="btn secondary">All Skills</a>
      </div>
    </section>

    <section class="featured-projects">
      <h2 >Featured Projects</h2>
      <div class="projects-grid">
        <div class="project-card">
          <div class="project-image">
            <img src="assets/projects/project1.jpg" alt="Project 1" />
          </div>
          <div class="project-info">
            <h3 >Project Name 1</h3>
            <p >A brief description of the project and the technologies used.</p>
            <div class="project-tags">
              <span >Angular</span>
              <span >TypeScript</span>
              <span >SCSS</span>
            </div>
            <div class="project-links">
              <a href="https://github.com/yourusername/project1" target="_blank" class="btn small">GitHub</a>
              <a href="https://project1-demo.com" target="_blank" class="btn small primary">Live Demo</a>
            </div>
          </div>
        </div>
        <div class="project-card">
          <div class="project-image">
            <img src="assets/projects/project2.jpg" alt="Project 2" />
          </div>
          <div class="project-info">
            <h3 >Project Name 2</h3>
            <p >A brief description of the project and the technologies used.</p>
            <div class="project-tags">
              <span >Angular</span>
              <span >Firebase</span>
              <span >Material UI</span>
            </div>
            <div class="project-links">
              <a href="https://github.com/yourusername/project2" target="_blank" class="btn small">GitHub</a>
              <a href="https://project2-demo.com" target="_blank" class="btn small primary">Live Demo</a>
            </div>
          </div>
        </div>
      </div>
      <div class="center-button">
        <a routerLink="/projects" class="btn secondary">View All Projects</a>
      </div>
    </section>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
