import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <div class="hero-content">
        <h1>Hi, I'm <span class="highlight">Arshad Mahmood</span></h1>
        <h2>
          <span id="typed-text"></span>
          <span class="cursor">|</span>
        </h2>
        <p>
          I build <strong>AI-driven, scalable, and enterprise-grade applications</strong> 
          using Angular, Java Spring Boot, Python, and AWS. Recognized as 
          <em>Best Performer of the Year 2024</em> and winner of the 
          <em>Veolia Techathon 2024</em>.
        </p>
        <div class="cta-buttons">
          <a routerLink="/projects" class="btn primary animate-btn">View My Work</a>
          <a routerLink="/contact" class="btn secondary animate-btn">Contact Me</a>
        </div>
      </div>
      <div class="hero-image">
        <img src="assets/profile.jpg" alt="Arshad Mahmood" />
      </div>
    </section>

    <section class="featured-skills fade-in-section">
      <h2>My Expertise</h2>
      <div class="skills-container">
        <div class="skill-card">
          <i class="fas fa-code"></i>
          <h3>Frontend Development</h3>
          <p>
            Building modern, responsive UIs with Angular 16+, RxJS, PrimeNG, and custom component libraries.
          </p>
        </div>
        <div class="skill-card">
          <i class="fas fa-server"></i>
          <h3>Backend & APIs</h3>
          <p>
            Developing scalable backends with Spring Boot & Flask, integrating RESTful APIs, and ensuring secure data flows.
          </p>
        </div>
        <div class="skill-card">
          <i class="fas fa-cloud"></i>
          <h3>Cloud & DevOps</h3>
          <p>
            Deploying applications on AWS (S3, Lambda, Cognito, CloudFront) with CI/CD pipelines for smooth releases.
          </p>
        </div>
        <div class="skill-card">
          <i class="fas fa-robot"></i>
          <h3>AI Solutions</h3>
          <p>
            Creating AI-powered tools like chatbots and learning platforms with Google Gemini API integration.
          </p>
        </div>
      </div>
      <div class="center-button">
        <a routerLink="/skills" class="btn secondary">All Skills</a>
      </div>
    </section>

    <section class="featured-projects fade-in-section">
      <h2>Featured Projects</h2>
      <div class="projects-grid">
        <div class="project-card">
          <div class="project-image">
            <img src="assets/projects/cooling-tower.jpg" alt="Cooling Tower Water Treatment Calculator" />
          </div>
          <div class="project-info">
            <h3>Cooling Tower Water Treatment Calculator</h3>
            <p>
              An Angular-based tool with reactive forms and heat maps for optimizing chemical treatment programs.
            </p>
            <div class="project-tags">
              <span>Angular</span>
              <span>PrimeNG</span>
              <span>REST APIs</span>
            </div>
          </div>
        </div>

        <div class="project-card">
          <div class="project-image">
            <img src="assets/projects/ai-learning.jpg" alt="AI-Powered Learning Assistant" />
          </div>
          <div class="project-info">
            <h3>AI-Powered Learning Assistant</h3>
            <p>
              A Flask + Google Gemini API platform that generates personalized learning paths and quizzes in real-time.
            </p>
            <div class="project-tags">
              <span>Python</span>
              <span>Flask</span>
              <span>Gemini AI API</span>
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
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.initTypingEffect();
  }

  private initTypingEffect() {
    const textArray = [
      "Full-Stack Software Engineer",
      "AI Developer",
      "Cloud & DevOps Enthusiast",
      "Innovation-Driven Engineer"
    ];
    let textIndex = 0;
    let charIndex = 0;
    const typedText = document.getElementById("typed-text")!;
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 1500;

    const type = () => {
      if (charIndex < textArray[textIndex].length) {
        typedText.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        setTimeout(erase, newTextDelay);
      }
    };

    const erase = () => {
      if (charIndex > 0) {
        typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(type, typingDelay);
      }
    };

    setTimeout(type, typingDelay);
  }
}
