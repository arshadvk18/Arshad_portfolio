import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <section class="contact-container">
      <h1 >Get In Touch</h1>
      
      <div class="contact-content">
        <div class="contact-info">
          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="contact-details">
              <h3 >Email</h3>
              <p ><a href="mailto:your.email@example.com">arshadmahmood1102&#64;gmail.com</a></p>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-phone"></i>
            </div>
            <div class="contact-details">
              <h3 >Phone</h3>
              <p ><a href="tel:+91 7392878997">+91 7392878997</a></p>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="contact-details">
              <h3 >Location</h3>
              <p >Bengaluru, India</p>
            </div>
          </div>
          
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
        </div>
        
        <div class="contact-form">
          <h2 >Send Me a Message</h2>
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" formControlName="name" placeholder="Your Name">
              @if (submitted && contactForm.get('name')?.hasError('required')) {
                <div class="error-message">Name is required</div>
              }
            </div>
            
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" formControlName="email" placeholder="Your Email">
              @if (submitted && contactForm.get('email')?.hasError('required')) {
                <div class="error-message">Email is required</div>
              }
              @if (submitted && contactForm.get('email')?.hasError('email')) {
                <div class="error-message">Please enter a valid email</div>
              }
            </div>
            
            <div class="form-group">
              <label for="subject">Subject</label>
              <input type="text" id="subject" formControlName="subject" placeholder="Subject">
              @if (submitted && contactForm.get('subject')?.hasError('required')) {
                <div class="error-message">Subject is required</div>
              }
            </div>
            
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" formControlName="message" rows="5" placeholder="Your Message"></textarea>
              @if (submitted && contactForm.get('message')?.hasError('required')) {
                <div class="error-message">Message is required</div>
              }
            </div>
            
            <button type="submit" class="btn primary">Send Message</button>
            
            @if (submitSuccess) {
              <div class="success-message">Your message has been sent successfully!</div>
            }
          </form>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  submitSuccess = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    
    if (this.contactForm.valid) {
      // Here you would typically send the form data to a backend service
      console.log('Form submitted:', this.contactForm.value);
      
      // Simulate successful submission
      this.submitSuccess = true;
      this.contactForm.reset();
      this.submitted = false;
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        this.submitSuccess = false;
      }, 5000);
    }
  }
}
