# Certificates Directory

This folder contains all certificate PDF files for the portfolio.

## Adding Your Certificates

1. **Add PDF files** to this directory
2. **Update the component** at `src/app/components/certifications/certifications.component.ts`
3. **Add certificate data** to the `certificates` array

## Certificate Data Structure

```typescript
{
  id: number;              // Unique identifier
  title: string;           // Certificate name
  organization: string;    // Issuing organization
  issueDate: string;       // Issue date (e.g., "January 2024")
  credentialId?: string;   // Optional credential ID
  category: string;        // Category: 'Cloud', 'Frontend', 'Backend', 'AI/ML'
  pdfPath: string;         // Path to PDF file (e.g., 'assets/certificates/cert.pdf')
  thumbnailPath?: string;  // Optional thumbnail image path
}
```

## Example

```typescript
{
  id: 1,
  title: 'AWS Certified Solutions Architect',
  organization: 'Amazon Web Services',
  issueDate: 'January 2024',
  credentialId: 'AWS-12345-ABCDE',
  category: 'Cloud',
  pdfPath: 'assets/certificates/aws-cert.pdf'
}
```

## Categories

- **Cloud**: AWS, Azure, GCP certifications
- **Frontend**: Angular, React, Vue, etc.
- **Backend**: Python, Java, Node.js, etc.
- **AI/ML**: Machine Learning, Data Science, AI certifications

## Notes

- PDFs are **view-only** (download is disabled for security)
- Supported file format: PDF only
- Recommended file naming: `organization-cert-name.pdf` (lowercase, hyphenated)
