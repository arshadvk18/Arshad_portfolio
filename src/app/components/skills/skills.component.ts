import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section class="skills-container">
      <h1>My Skills & Technologies</h1>
      
      <div class="skills-categories">
        
        <!-- Programming -->
        <div class="skills-category">
          <h2><i class="fas fa-code"></i> Programming</h2>
          <div class="skills-tags">
            <span class="tag"><i class="fab fa-java"></i> Java</span>
            <span class="tag"><i class="fab fa-python"></i> Python</span>
            <span class="tag"><i class="fab fa-js"></i> JavaScript (ES6+)</span>
            <span class="tag"><i class="fab fa-js"></i> TypeScript</span>
            <span class="tag"><i class="fas fa-database"></i> SQL</span>
            <span class="tag"><i class="fab fa-html5"></i> HTML</span>
            <span class="tag"><i class="fab fa-css3-alt"></i> CSS</span>
            <span class="tag"><i class="fas fa-file-code"></i> AppScript</span>
          </div>
        </div>

        <!-- Frameworks -->
        <div class="skills-category">
          <h2><i class="fas fa-layer-group"></i> Frameworks</h2>
          <div class="skills-tags">
            <span class="tag"><i class="fab fa-angular"></i> Angular</span>
            <span class="tag"><i class="fas fa-leaf"></i> Spring Boot</span>
            <span class="tag"><i class="fas fa-flask"></i> Flask</span>
            <span class="tag"><i class="fas fa-project-diagram"></i> RxJS</span>
            <span class="tag"><i class="fas fa-cubes"></i> PrimeNG</span>
            <span class="tag"><i class="fas fa-paint-brush"></i> Angular Material</span>
            <span class="tag"><i class="fab fa-bootstrap"></i> Bootstrap</span>
          </div>
        </div>

        <!-- Cloud & Tools -->
        <div class="skills-category">
          <h2><i class="fas fa-cloud"></i> Cloud & Tools</h2>
          <div class="skills-tags">
            <span class="tag"><i class="fab fa-aws"></i> AWS (S3, Lambda, CloudFront, Cognito, CodeCommit)</span>
            <span class="tag"><i class="fas fa-chart-bar"></i> Power BI</span>
            <span class="tag"><i class="fas fa-tasks"></i> JIRA</span>
            <span class="tag"><i class="fas fa-code"></i> Google Apps Script</span>
          </div>
        </div>

        <!-- Practices -->
        <div class="skills-category">
          <h2><i class="fas fa-cogs"></i> Practices</h2>
          <div class="skills-tags">
            <span class="tag"><i class="fas fa-users-cog"></i> Agile</span>
            <span class="tag"><i class="fas fa-plug"></i> REST API Design</span>
            <span class="tag"><i class="fas fa-robot"></i> AI Integration</span>
            <span class="tag"><i class="fas fa-sync-alt"></i> CI/CD Pipelines</span>
            <span class="tag"><i class="fas fa-chart-line"></i> Data Visualization</span>
          </div>
        </div>

        <!-- Soft Skills -->
        <div class="skills-category">
          <h2><i class="fas fa-user-friends"></i> Soft Skills</h2>
          <div class="skills-tags">
            <span class="tag"><i class="fas fa-lightbulb"></i> Problem-Solving</span>
            <span class="tag"><i class="fas fa-users"></i> Teamwork</span>
            <span class="tag"><i class="fas fa-comments"></i> Communication</span>
            <span class="tag"><i class="fas fa-user-tie"></i> Leadership</span>
            <span class="tag"><i class="fas fa-rocket"></i> Innovation</span>
          </div>
        </div>

      </div>
    </section>
  `,
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {}
