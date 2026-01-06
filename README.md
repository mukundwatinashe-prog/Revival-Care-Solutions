# Revival Care Solutions Website

A professional, corporate website for Revival Care Solutions - a home care services company providing compassionate care for seniors.

## 🌟 Features

- **Modern Design**: Clean, professional aesthetic with warm colors conveying trust and compassion
- **Fully Responsive**: Optimized for all devices - desktop, tablet, and mobile
- **Accessibility**: WCAG 2.1 AA compliant with proper semantic HTML, ARIA labels, and keyboard navigation
- **SEO Optimized**: Complete meta tags, Open Graph, structured data ready
- **Fast Performance**: Built with Next.js 14 for optimal loading speeds

## 📄 Pages

- **Home** - Hero section, services overview, testimonials, trust indicators
- **Services** - Overview and individual service pages for all care types
- **About Us** - Company history, mission, leadership team, values
- **Caregivers** - Caregiver profiles, training, vetting process
- **Resources** - Blog, FAQ, care guides
- **Contact** - Contact form, office info, map placeholder
- **Testimonials** - Client reviews and success stories
- **Service Areas** - Coverage map and area listings
- **Careers** - Job listings and application information
- **Privacy Policy** - HIPAA-conscious privacy information
- **Terms of Service** - Legal terms and conditions

## 🛠 Tech Stack

- **Framework**: Next.js 14 (React)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Outfit (sans-serif) + Lora (serif)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development

The development server runs at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/              # About Us page
│   ├── caregivers/         # Caregivers page
│   ├── careers/            # Careers page
│   ├── contact/            # Contact page
│   ├── privacy/            # Privacy Policy
│   ├── resources/          # Resources section
│   │   └── faq/            # FAQ page
│   ├── service-areas/      # Service Areas page
│   ├── services/           # Services pages
│   │   └── [slug]/         # Individual service pages
│   ├── terms/              # Terms of Service
│   ├── testimonials/       # Testimonials page
│   ├── globals.css         # Global styles & design tokens
│   ├── layout.tsx          # Root layout with header/footer
│   └── page.tsx            # Homepage
│
├── components/
│   ├── layout/             # Layout components
│   │   ├── Header.tsx      # Site header with navigation
│   │   └── Footer.tsx      # Site footer
│   └── ui/                 # Reusable UI components
│       ├── Badge.tsx       # Badge component
│       ├── Button.tsx      # Button component
│       ├── Card.tsx        # Card components
│       └── Input.tsx       # Form input components
```

## 🎨 Design System

### Colors

- **Primary**: Teal/Blue-green (#3a9d8d) - Trust and healthcare
- **Secondary**: Coral (#f96a4c) - Warmth and energy
- **Accent**: Gold (#db9922) - Premium and caring
- **Neutrals**: Warm grays for text and backgrounds

### Typography

- **Headings**: Lora (serif) - Classic, trustworthy
- **Body**: Outfit (sans-serif) - Modern, readable

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
# Example environment variables (customize as needed)
NEXT_PUBLIC_SITE_URL=https://revivalcare.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ✅ Accessibility Features

- Skip to main content link
- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Color contrast compliance
- Focus indicators
- Screen reader friendly

## 🔒 Security Considerations

- Form validation and sanitization
- HTTPS ready
- Privacy-conscious design
- HIPAA considerations documented

## 📈 SEO Features

- Meta title and descriptions
- Open Graph tags
- Twitter Card support
- Semantic HTML
- Fast load times
- Mobile-friendly design

## 🚀 Deployment

The site is optimized for deployment on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

## 📝 Content Management

For production use, consider integrating with a headless CMS like:

- Sanity
- Strapi
- Contentful

## 📄 License

© 2026 Revival Care Solutions. All rights reserved.

---

Built with ❤️ for families who need compassionate care.
