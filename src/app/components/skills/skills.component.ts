import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section class="skills-container">
      <h1 >My Skills</h1>
      
      <div class="skills-categories">
        <div class="skills-category">
          <h2 >Frontend Development</h2>
          <div class="skills-grid">
            <div class="skill-item">
              <div class="skill-icon">
                <i class="fab fa-angular"></i>
              </div>
              <h3 >Angular</h3>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 90%"></div>
              </div>
              <span class="skill-percentage">90%</span>
            </div>
            
            <div class="skill-item">
              <div class="skill-icon">
                <i class="fab fa-js"></i>
              </div>
              <h3 >JavaScript</h3>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 85%"></div>
              </div>
              <span class="skill-percentage">85%</span>
            </div>
            
            <div class="skill-item">
              <div class="skill-icon">
                <i class="fab fa-html5"></i>
              </div>
              <h3 >HTML5</h3>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 95%"></div>
              </div>
              <span class="skill-percentage">95%</span>
            </div>
            
            <div class="skill-item">
              <div class="skill-icon">
                <i class="fab fa-css3-alt"></i>
              </div>
              <h3 >CSS3</h3>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 90%"></div>
              </div>
              <span class="skill-percentage">90%</span>
            </div>
            
            <div class="skill-item">
              <div class="skill-icon">
                <i class="fab fa-sass"></i>
              </div>
              <h3 >SASS/SCSS</h3>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 85%"></div>
              </div>
              <span class="skill-percentage">85%</span>
            </div>
            
            <div class="skill-item">
              <div class="skill-icon">
                <i class="fab fa-react"></i>
              </div>
              <h3 >React</h3>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 75%"></div>
              </div>
              <span class="skill-percentage">75%</span>
            </div>
          </div>
        </div>
        
        <div class="skills-category">
          <h2 >Tools & Technologies</h2>
          <div class="skills-grid">
            <div class="skill-item">
              <div class="skill-icon">
                <i class="fab fa-git-alt"></i>
              </div>
              <h3 >Git</h3>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 88%"></div>
              </div>
              <span class="skill-percentage">88%</span>
            </div>
            
            <div class="skill-item">
              <div class="skill-icon">
                <i class="fab fa-npm"></i>
              </div>
              <h3 >NPM</h3>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 85%"></div>
              </div>
              <span class="skill-percentage">85%</span>
            </div>
            
            <div class="skill-item">
              <div class="skill-icon">
                <i class="fas fa-terminal"></i>
              </div>
              <h3 >Command Line</h3>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 80%"></div>
              </div>
              <span class="skill-percentage">80%</span>
            </div>
            
            <div class="skill-item">
              <div class="skill-icon">
                <i class="fas fa-code-branch"></i>
              </div>
              <h3 >REST APIs</h3>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 85%"></div>
              </div>
              <span class="skill-percentage">85%</span>
            </div>
            
            <div class="skill-item">
              <div class="skill-icon">
                <i class="fas fa-database"></i>
              </div>
              <h3 >Databases</h3>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 70%"></div>
              </div>
              <span class="skill-percentage">70%</span>
            </div>
            
            <div class="skill-item">
              <div class="skill-icon">
                <i class="fas fa-cloud"></i>
              </div>
              <h3 >Cloud Services</h3>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 65%"></div>
              </div>
              <span class="skill-percentage">65%</span>
            </div>
          </div>
        </div>
        
        <div class="skills-category">
          <h2 >Soft Skills</h2>
          <div class="skills-grid">
            <div class="skill-item">
              <div class="skill-icon">
                <i class="fas fa-users"></i>
              </div>
              <h3 >Teamwork</h3>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 95%"></div>
              </div>
              <span class="skill-percentage">95%</span>
            </div>
            
            <div class="skill-item">
              <div class="skill-icon">
                <i class="fas fa-comments"></i>
              </div>
              <h3 >Communication</h3>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 90%"></div>
              </div>
              <span class="skill-percentage">90%</span>
            </div>
            
            <div class="skill-item">
              <div class="skill-icon">
                <i class="fas fa-tasks"></i>
              </div>
              <h3 >Project Management</h3>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 85%"></div>
              </div>
              <span class="skill-percentage">85%</span>
            </div>
            
            <div class="skill-item">
              <div class="skill-icon">
                <i class="fas fa-lightbulb"></i>
              </div>
              <h3 >Problem Solving</h3>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 92%"></div>
              </div>
              <span class="skill-percentage">92%</span>
            </div>
            
            <div class="skill-item">
              <div class="skill-icon">
                <i class="fas fa-book"></i>
              </div>
              <h3 >Continuous Learning</h3>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 98%"></div>
              </div>
              <span class="skill-percentage">98%</span>
            </div>
            
            <div class="skill-item">
              <div class="skill-icon">
                <i class="fas fa-clock"></i>
              </div>
              <h3 >Time Management</h3>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 88%"></div>
              </div>
              <span class="skill-percentage">88%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {}
