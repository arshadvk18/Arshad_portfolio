import { Component } from '@angular/core';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];   // include filters like 'Front End' | 'Full Stack' | 'Angular' | 'AI' etc.
  github: string;
  demo: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section class="projects-container">
      <h1>My Projects</h1>
      
      <div class="projects-filter">
        <button 
          [class.active]="activeFilter === 'all'"
          (click)="filterProjects('all')"
        >All</button>

        <button 
          [class.active]="activeFilter === 'front end'"
          (click)="filterProjects('front end')"
        >Front End</button>

        <button 
          [class.active]="activeFilter === 'full stack'"
          (click)="filterProjects('full stack')"
        >Full Stack</button>

        <button 
          [class.active]="activeFilter === 'angular'"
          (click)="filterProjects('angular')"
        >Angular</button>

        <button 
          [class.active]="activeFilter === 'ai'"
          (click)="filterProjects('ai')"
        >AI</button>
      </div>
      
      <div class="projects-grid">
        @for (project of filteredProjects; track project.id) {
          <div class="project-card">
            <div class="project-image">
              <img [src]="project.image" [alt]="project.title" />
              @if (project.featured) {
                <span class="featured-badge">Featured</span>
              }
            </div>
            <div class="project-info">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="project-tags">
                @for (tag of project.tags; track tag) {
                  <span>{{ tag }}</span>
                }
              </div>
              <div class="project-links">
                <a [href]="project.github" target="_blank" class="btn small">GitHub</a>
                <a [href]="project.demo" target="_blank" class="btn small primary">Live Demo</a>
              </div>
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Cooling Tower Water Treatment Program (2025)',
      description:
        'Responsive Angular 16+ calculator that optimizes chemical treatment based on water chemistry and system parameters. Includes reactive forms, heat map visualizations, LIMS integration, JWT auth, and JSON import/export.',
      image: 'assets/projects/cooling-tower.jpg',
      tags: [
        'Front End',
        'Angular',
        'RxJS',
        'PrimeNG',
        'Bootstrap',
        'NGX-Translate',
        'REST APIs'
      ],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 2,
      title: 'AI-Powered Learning Assistant',
      description:
        'Flask + Google Gemini API platform with adaptive quizzes, structured prompt engineering, progress analytics, robust fallbacks, and a RESTful backend with strong error handling, env management, and CORS.',
      image: 'assets/projects/ai-learning.jpg',
      tags: ['Full Stack', 'Python', 'Flask', 'AI', 'Gemini API', 'REST APIs'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 3,
      title: 'AI Assistant UI Development',
      description:
        'Angular UI redesign and integration with Insight to improve adoption and accessibility. Managed end-to-end AWS deployment (Cognito, CloudFront, S3, Lambda, CodeCommit) and ongoing product improvements.',
      image: 'assets/projects/ai-assistant-ui.jpg',
      tags: ['Front End', 'Angular', 'RxJS', 'AWS', 'CI/CD'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Tank Sizing & Cost Estimation Platform',
      description:
        'Angular + Ant Design app that automates chemical storage calculations and cost estimation. Dynamic forms for 10+ concurrent tank configs, location-aware warehouse/shipping, PDF/Excel/JSON exports via Google Sheets API, and server-side filtering.',
      image: 'assets/projects/tank-sizing.jpg',
      tags: ['Front End', 'Angular', 'Ant Design', 'Google Sheets API', 'Exports'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 5,
      title: 'Reporting Module Revamp (2024)',
      description:
        'Collaborated to deliver a scalable, user-friendly reporting module from scratch using Angular Material & PrimeNG on AWS, incorporating continuous feedback for improvements.',
      image: 'assets/projects/reporting-module.jpg',
      tags: ['Front End', 'Angular', 'Angular Material', 'PrimeNG', 'AWS'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Attendance Monitoring Tool (2024)',
      description:
        'Apps Script + Google Sheets tool used by 500+ users to streamline attendance across locations. Built with HTML/CSS UI and automated workflows.',
      image: 'assets/projects/attendance-tool.jpg',
      tags: ['Full Stack', 'Apps Script', 'Google Sheets', 'Automation'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 7,
      title: 'Chemical Compatibility Tool (2023)',
      description:
        'Solo-built tool combining chemical engineering with software—HTML/CSS/JS frontend with Spring Boot + SQL backend. Foundation for future internal full-stack tools.',
      image: 'assets/projects/chemical-compatibility.jpg',
      tags: ['Full Stack', 'Spring Boot', 'SQL', 'JavaScript', 'Engineering'],
      github: '#',
      demo: '#',
      featured: false
    }
  ];

  filteredProjects: Project[] = this.projects;
  activeFilter: string = 'all';

  filterProjects(filter: string) {
    this.activeFilter = filter;

    if (filter === 'all') {
      this.filteredProjects = this.projects;
      return;
    }

    this.filteredProjects = this.projects.filter(project =>
      project.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
    );
  }
}
