import { Component } from '@angular/core';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section class="projects-container">
      <h1 >My Projects</h1>
      
      <div class="projects-filter">
        <button 
          [class.active]="activeFilter === 'all'"
          (click)="filterProjects('all')"
        >All</button>
        <button 
          [class.active]="activeFilter === 'angular'"
          (click)="filterProjects('angular')"
        >Angular</button>
        <button 
          [class.active]="activeFilter === 'react'"
          (click)="filterProjects('react')"
        >React</button>
        <button 
          [class.active]="activeFilter === 'other'"
          (click)="filterProjects('other')"
        >Other</button>
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
              <h3 >{{ project.title }}</h3>
              <p >{{ project.description }}</p>
              <div class="project-tags">
                @for (tag of project.tags; track tag) {
                  <span >{{ tag }}</span>
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
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive admin dashboard for e-commerce platforms with analytics, product management, and order tracking.',
      image: 'assets/projects/project1.jpg',
      tags: ['Angular', 'TypeScript', 'Chart.js', 'SCSS'],
      github: 'https://github.com/yourusername/ecommerce-dashboard',
      demo: 'https://ecommerce-dashboard-demo.com',
      featured: true
    },
    {
      id: 2,
      title: 'Weather App',
      description: 'A weather application that provides current weather conditions and forecasts for any location.',
      image: 'assets/projects/project2.jpg',
      tags: ['Angular', 'RxJS', 'Weather API', 'SCSS'],
      github: 'https://github.com/yourusername/weather-app',
      demo: 'https://weather-app-demo.com',
      featured: false
    },
    {
      id: 3,
      title: 'Task Management System',
      description: 'A task management application with features like task creation, assignment, status tracking, and notifications.',
      image: 'assets/projects/project3.jpg',
      tags: ['React', 'Redux', 'Firebase', 'Material UI'],
      github: 'https://github.com/yourusername/task-management',
      demo: 'https://task-management-demo.com',
      featured: true
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing projects, skills, and professional experience.',
      image: 'assets/projects/project4.jpg',
      tags: ['Angular', 'TypeScript', 'SCSS', 'Animation'],
      github: 'https://github.com/yourusername/portfolio',
      demo: 'https://portfolio-demo.com',
      featured: false
    },
    {
      id: 5,
      title: 'Recipe Finder',
      description: 'An application that allows users to search for recipes based on ingredients, dietary restrictions, and cuisine types.',
      image: 'assets/projects/project5.jpg',
      tags: ['React', 'Context API', 'Recipe API', 'CSS'],
      github: 'https://github.com/yourusername/recipe-finder',
      demo: 'https://recipe-finder-demo.com',
      featured: false
    },
    {
      id: 6,
      title: 'Movie Database',
      description: 'A movie database application that provides information about movies, actors, and reviews.',
      image: 'assets/projects/project6.jpg',
      tags: ['JavaScript', 'HTML', 'CSS', 'TMDB API'],
      github: 'https://github.com/yourusername/movie-database',
      demo: 'https://movie-database-demo.com',
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
    
    this.filteredProjects = this.projects.filter(project => {
      return project.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()));
    });
  }
}
