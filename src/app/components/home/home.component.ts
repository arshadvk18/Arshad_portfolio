import { Component, AfterViewInit, OnDestroy, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-content">
        <h1 id="hero-title">Hi, I'm <span class="highlight">Arshad Mahmood</span></h1>

        <h2 aria-live="polite" class="hero-subtitle">
          <span id="typed-text" class="typed-text" aria-hidden="false"></span>
          <span class="cursor" aria-hidden="true">|</span>
        </h2>

        <p class="hero-desc">
          I build <strong>AI-driven, scalable, and enterprise-grade applications</strong>
          using Angular, Java Spring Boot, Python, and AWS. Recognized as
          <em>Best Performer of the Year 2024</em> and winner of the
          <em>Veolia Techathon 2024</em>.
        </p>

        <div class="cta-buttons">
          <a routerLink="/projects" class="btn primary animate-btn" title="View projects">View My Work</a>
          <a routerLink="/contact" class="btn secondary animate-btn" title="Contact me">Contact Me</a>
        </div>
      </div>

      <div class="hero-image" role="img" aria-label="Photo of Arshad Mahmood">
        <img src="assets/profile.jpg" alt="Arshad Mahmood" />
      </div>
    </section>

    <section class="featured-skills fade-in-section" id="skills" aria-labelledby="skills-title">
      <h2 id="skills-title">My Expertise</h2>
      <div class="skills-container">
        <div class="skill-card">
          <i class="fas fa-code" aria-hidden="true"></i>
          <h3>Frontend Development</h3>
          <p>Modern, responsive UIs with Angular 16+, RxJS, PrimeNG and custom component libraries.</p>
        </div>

        <div class="skill-card">
          <i class="fas fa-server" aria-hidden="true"></i>
          <h3>Backend & APIs</h3>
          <p>Scalable backends with Spring Boot & Flask, REST API design and secure integrations.</p>
        </div>

        <div class="skill-card">
          <i class="fas fa-cloud" aria-hidden="true"></i>
          <h3>Cloud & DevOps</h3>
          <p>Deployments on AWS (S3, Lambda, Cognito, CloudFront) with CI/CD pipelines and monitoring.</p>
        </div>

        <div class="skill-card">
          <i class="fas fa-robot" aria-hidden="true"></i>
          <h3>AI Solutions</h3>
          <p>AI-driven tools and chatbots using Google Gemini API, prompt engineering and fallback strategies.</p>
        </div>
      </div>

      <div class="center-button">
        <a routerLink="/skills" class="btn secondary">All Skills</a>
      </div>
    </section>

    <section class="featured-projects fade-in-section" id="projects" aria-labelledby="projects-title">
      <h2 id="projects-title">Featured Projects</h2>
      <div class="projects-grid">
        <article class="project-card" aria-labelledby="p1">
          <div class="project-image">
            <img src="assets/projects/cooling-tower.png" alt="Cooling Tower Water Treatment Calculator" />
          </div>
          <div class="project-info">
            <h3 id="p1">Cooling Tower Water Treatment Calculator</h3>
            <p>An Angular 16+ app with reactive forms, heat-map visualizations, LIMS integration, JSON import/export and JWT auth.</p>
            <div class="project-tags"><span>Angular</span><span>PrimeNG</span><span>REST APIs</span></div>
          </div>
        </article>

        <article class="project-card" aria-labelledby="p2">
          <div class="project-image">
            <img src="assets/projects/ai-learning.jpg" alt="AI-powered Learning Assistant" />
          </div>
          <div class="project-info">
            <h3 id="p2">AI-Powered Learning Assistant</h3>
            <p>Flask + Google Gemini API platform generating personalized learning paths, adaptive quizzes and progress analytics.</p>
            <div class="project-tags"><span>Python</span><span>Flask</span><span>Gemini API</span></div>
          </div>
        </article>
      </div>

      <div class="center-button">
        <a routerLink="/projects" class="btn secondary">View All Projects</a>
      </div>
    </section>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  private timers: number[] = [];
  private observer?: IntersectionObserver;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // Enable smooth scroll for the document
    this.renderer.setStyle(document.documentElement, 'scrollBehavior', 'smooth');

    // Start typing animation
    this.startTypingEffect();

    // Initialize fade-in observer for .fade-in-section
    this.initFadeInObserver();
  }

  ngOnDestroy(): void {
    // Clear all timeouts used by typing animation
    this.timers.forEach(id => clearTimeout(id));
    // Disconnect observer
    if (this.observer) this.observer.disconnect();
    // Remove scroll behavior override (optional)
    this.renderer.removeStyle(document.documentElement, 'scrollBehavior');
  }

  private startTypingEffect() {
    const typedEl = document.getElementById('typed-text');
    if (!typedEl) return;

    const texts = [
      'Full-Stack Software Engineer',
      'AI Developer',
      'Cloud & DevOps Enthusiast',
      'Innovation-Driven Engineer'
    ];
    const typingDelay = 90;
    const erasingDelay = 45;
    const newTextDelay = 1500;

    let textIndex = 0;
    let charIndex = 0;

    const type = () => {
      if (charIndex < texts[textIndex].length) {
        typedEl.textContent = typedEl.textContent + texts[textIndex].charAt(charIndex);
        charIndex++;
        const t = window.setTimeout(type, typingDelay);
        this.timers.push(t);
      } else {
        const t = window.setTimeout(erase, newTextDelay);
        this.timers.push(t);
      }
    };

    const erase = () => {
      if (charIndex > 0) {
        typedEl.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        const t = window.setTimeout(erase, erasingDelay);
        this.timers.push(t);
      } else {
        textIndex = (textIndex + 1) % texts.length;
        const t = window.setTimeout(type, typingDelay);
        this.timers.push(t);
      }
    };

    // Start
    const startDelay = window.setTimeout(type, 300);
    this.timers.push(startDelay);
  }

  private initFadeInObserver() {
    const fadeEls = Array.from(document.querySelectorAll<HTMLElement>('.fade-in-section'));
    if (!fadeEls.length) return;

    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add('visible');
            // Unobserve once visible to save work
            if (this.observer) this.observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );

    fadeEls.forEach(el => this.observer!.observe(el));
  }
}
