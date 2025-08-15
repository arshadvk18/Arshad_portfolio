import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="about-container">
      <h1 >About Me</h1>
      
      <div class="about-content">
        <div class="about-image">
          <img src="assets/about-me.jpg" alt="About Me" />
        </div>
        
        <div class="about-text">
          <p >
            Hello! I'm <strong >Arshad Mahmood</strong>, a passionate frontend developer with a focus on creating beautiful, 
            functional, and user-friendly web applications. With over X years of experience in web development, 
            I specialize in building modern applications using Angular and other cutting-edge technologies.
          </p>
          
          <p >
            My journey in web development began when I discovered my passion for creating interactive user experiences. 
            Since then, I've been constantly learning and improving my skills to stay up-to-date with the latest 
            technologies and best practices in the industry.
          </p>
          
          <p >
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
            or enjoying outdoor activities like hiking and photography.
          </p>
          
          <div class="about-buttons">
            <a href="assets/resume.pdf" download class="btn primary">Download Resume</a>
            <a routerLink="/contact" class="btn secondary">Contact Me</a>
          </div>
        </div>
      </div>
      
      <div class="education-experience">
        <div class="education">
          <h2 >Education</h2>
          
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <h3 >Bachelor's Degree in Computer Science</h3>
                <p class="timeline-date">2016 - 2020</p>
                <p >University Name</p>
                <p >Relevant coursework: Web Development, Data Structures, Algorithms, Database Systems</p>
              </div>
            </div>
            
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <h3 >Web Development Bootcamp</h3>
                <p class="timeline-date">2020</p>
                <p >Bootcamp Name</p>
                <p >Intensive training in modern web development technologies and practices</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="experience">
          <h2 >Experience</h2>
          
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <h3 >Senior Frontend Developer</h3>
                <p class="timeline-date">2022 - Present</p>
                <p >Company Name</p>
                <p >Leading the development of web applications using Angular, implementing best practices, and mentoring junior developers.</p>
              </div>
            </div>
            
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <h3 >Frontend Developer</h3>
                <p class="timeline-date">2020 - 2022</p>
                <p >Company Name</p>
                <p >Developed responsive web applications using Angular, collaborated with designers and backend developers to implement features.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {}
