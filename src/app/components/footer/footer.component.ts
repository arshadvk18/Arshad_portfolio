import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer >
      <div class="footer-content">
        <div class="social-links">
          <a href="https://github.com/arshadvk18" target="_blank" aria-label="GitHub">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/arshad-mahmood-775235225" target="_blank" aria-label="LinkedIn">
            <i class="fab fa-linkedin"></i>
          </a>
          <!-- <a href="https://twitter.com/yourusername" target="_blank" aria-label="Twitter">
            <i class="fab fa-twitter"></i>
          </a> -->
        </div>
        <p >&copy; {{ currentYear }} Arshad Mahmood. All rights reserved.</p>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
