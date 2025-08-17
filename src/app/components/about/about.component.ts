import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="about-container">
      <h1>About Me</h1>
      
      <div class="about-content">
        <div class="about-image">
          <img src="assets/about-me.jpg" alt="About Me" />
        </div>
        
        <div class="about-text">
          <p>
            Hello! I'm <strong>Arshad Mahmood</strong>, a <strong>Full-Stack Software Engineer</strong> with expertise in 
            <strong>Angular, Java Spring Boot, Python, and AWS</strong>. I specialize in building <em>AI-driven, scalable, 
            and enterprise-grade applications</em> that merge engineering insight with cutting-edge technology.
          </p>
          
          <p>
            My professional journey started with a degree in <strong>Chemical Engineering</strong>, but my passion for problem-solving 
            and innovation led me to software engineering. At <strong>Veolia Water Technologies & Solutions</strong>, I’ve delivered 
            impactful solutions — from <strong>AI assistant platforms</strong> and <strong>cost estimation tools</strong> to 
            <strong>interactive treatment calculators</strong> — used by hundreds of employees worldwide.
          </p>
          
          <p>
            Recognized as <strong>Best Performer of the Year 2024</strong> and winner of the <strong>Veolia Techathon 2024</strong>, 
            I thrive at the intersection of <em>technology, engineering, and innovation</em>. 
            Beyond coding, I enjoy exploring new technologies, mentoring peers, and staying inspired by real-world challenges.
          </p>
          
          <div class="about-buttons">
            <a href="assets/resume.pdf" download class="btn primary">Download Resume</a>
            <a routerLink="/contact" class="btn secondary">Contact Me</a>
          </div>
        </div>
      </div>
      
      <div class="education-experience">
        <div class="education">
          <h2>Education</h2>
          
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <h3>Bachelor of Technology in Chemical Engineering</h3>
                <p class="timeline-date">2019 - 2023</p>
                <p>Institute of Engineering and Technology, Lucknow</p>
                <p>Graduated with a CGPA of 8.11/10</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="experience">
          <h2>Experience</h2>
          
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <h3>Software Engineer</h3>
                <p class="timeline-date">Jul 2024 – Present</p>
                <p>Veolia Water Technologies & Solutions, Bangalore</p>
                <p>
                  Developing enterprise-scale tools like a Cooling Tower Water Treatment Calculator, 
                  Tank Sizing & Cost Estimation platform, and AI-powered reporting modules. 
                  Delivered solutions impacting 500+ users across regions.
                </p>
              </div>
            </div>
            
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <h3>Graduate Engineer Trainee (GET)</h3>
                <p class="timeline-date">Jul 2023 – Jul 2024</p>
                <p>Veolia Water Technologies & Solutions, Bangalore</p>
                <p>
                  Built a Chemical Compatibility Tool integrating engineering and programming. 
                  Earned appreciation for creating efficient in-house solutions.
                </p>
              </div>
            </div>
            
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <h3>Intern</h3>
                <p class="timeline-date">Jul 2022 – Sep 2022</p>
                <p>Suez Water Technologies & Solutions, Bangalore</p>
                <p>
                  Automated reference lists and improved reporting workflows. 
                  Gained hands-on experience with Power BI and cross-team collaboration.
                </p>
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
