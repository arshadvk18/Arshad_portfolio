import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Certificate {
  id: number;
  title: string;
  organization: string;
  issueDate: string;
  credentialId?: string;
  category: string;
  pdfPath: string;
  thumbnailPath?: string;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="certifications-container">
      <h1>My Certifications</h1>
      
      <div class="certifications-filter">
        <button 
          [class.active]="activeFilter === 'all'"
          (click)="filterCertifications('all')"
        >All</button>

        <button 
          [class.active]="activeFilter === 'cloud'"
          (click)="filterCertifications('cloud')"
        >Cloud</button>

        <button 
          [class.active]="activeFilter === 'frontend'"
          (click)="filterCertifications('frontend')"
        >Frontend</button>

        <button 
          [class.active]="activeFilter === 'backend'"
          (click)="filterCertifications('backend')"
        >Backend</button>

        <button 
          [class.active]="activeFilter === 'ai/ml'"
          (click)="filterCertifications('ai/ml')"
        >AI/ML</button>
      </div>
      
      <div class="certifications-grid">
        @for (cert of filteredCertifications; track cert.id) {
          <div class="certificate-card">
            <div class="certificate-thumbnail">
              @if (cert.thumbnailPath) {
                <img [src]="cert.thumbnailPath" [alt]="cert.title" />
              } @else {
                <div class="pdf-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <text x="7" y="17" font-size="6" fill="currentColor">PDF</text>
                  </svg>
                </div>
              }
              <span class="category-badge">{{ cert.category }}</span>
            </div>
            <div class="certificate-info">
              <h3>{{ cert.title }}</h3>
              <p class="organization">{{ cert.organization }}</p>
              <p class="issue-date">Issued: {{ cert.issueDate }}</p>
              <div class="certificate-actions">
                <button 
                  (click)="viewCertificate(cert)" 
                  class="btn small primary"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  View Certificate
                </button>
              </div>
            </div>
          </div>
        }
      </div>

      <!-- PDF Viewer Modal -->
      @if (showModal && selectedCertificate) {
        <div class="modal-overlay" (click)="closeModal()">
          <div class="modal-content" (click)="$event.stopPropagation()">
            <div class="modal-header">
              <h3>{{ selectedCertificate.title }}</h3>
              <button class="close-btn" (click)="closeModal()">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div class="modal-body">
              <iframe 
                [src]="getSafePdfUrl(selectedCertificate.pdfPath)" 
                frameborder="0"
                class="pdf-viewer"
              ></iframe>
            </div>
            <div class="modal-footer">
              <p class="view-only-notice">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                View-only mode. Download is disabled for security.
              </p>
            </div>
          </div>
        </div>
      }
    </section>
  `,
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent {
  constructor(private sanitizer: DomSanitizer) { }

  certificates: Certificate[] = [
    {
      id: 1,
      title: 'Generative AI for Web Developers AIPowered Pair Programming for FullStack Development',
      organization: 'LinkedIn Learning',
      issueDate: 'January 2026',
      category: 'AI/ML',
      pdfPath: 'assets/certificates/generative-ai-web-developers.pdf'
    },
    {
      id: 2,
      title: 'Angular Essential Training',
      organization: 'LinkedIn Learning',
      issueDate: 'February 2025',
      category: 'Frontend',
      pdfPath: 'assets/certificates/angular-essential-training.pdf'
    },
    {
      id: 3,
      title: 'Python Essential Training',
      organization: 'LinkedIn Learning',
      issueDate: 'July 2025',
      category: 'Backend',
      pdfPath: 'assets/certificates/python-essential-training.pdf'
    },
    {
      id: 4,
      title: 'Cert Prep Scrum Master',
      organization: 'Project Management Institute',
      issueDate: 'February 2025',
      category: 'Cloud',
      pdfPath: 'assets/certificates/scrum-master-certification.pdf'
    },
    {
      id: 5,
      title: 'Artificial Intelligence for Cybersecurity',
      organization: 'Project Management Institute',
      issueDate: 'January 2026',
      category: 'AI/ML',
      pdfPath: 'assets/certificates/ai-cybersecurity.pdf'
    },
    {
      id: 6,
      title: 'Generative AI for Business Leaders',
      organization: 'National Association of State Board of Accountancy',
      issueDate: 'January 2026',
      category: 'AI/ML',
      pdfPath: 'assets/certificates/generative-ai-business-leaders.pdf'
    }
  ];

  filteredCertifications: Certificate[] = this.certificates;
  activeFilter: string = 'all';
  showModal: boolean = false;
  selectedCertificate: Certificate | null = null;

  filterCertifications(filter: string) {
    this.activeFilter = filter;

    if (filter === 'all') {
      this.filteredCertifications = this.certificates;
      return;
    }

    this.filteredCertifications = this.certificates.filter(cert =>
      cert.category.toLowerCase() === filter.toLowerCase()
    );
  }

  viewCertificate(cert: Certificate) {
    this.selectedCertificate = cert;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedCertificate = null;
  }

  getSafePdfUrl(pdfPath: string): SafeResourceUrl {
    // Return the PDF path with #toolbar=0 to hide download button in some browsers
    const url = `${pdfPath}#toolbar=0&navpanes=0&scrollbar=0`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
