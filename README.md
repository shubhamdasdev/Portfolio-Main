# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring a beautiful dark theme and interactive elements.

![Portfolio Preview](public/portfolio-preview.png)

## 🌟 Features

- **Modern Design**: Clean, professional interface with a dark theme
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: 3D orb background animation and smooth transitions
- **Project Showcase**: Grid layout for featuring projects with detailed views
- **Blog Integration**: Support for Medium and Substack article displays
- **Contact Form**: Interactive contact form with toast notifications
- **Performance Optimized**: Built with Next.js for optimal loading speeds
- **Type-Safe**: Written in TypeScript for better development experience

## 🛠️ Technologies Used

- **Framework**: Next.js 13+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **3D Graphics**: Three.js
- **Form Handling**: React Hook Form
- **Animations**: Tailwind CSS animations

## 🚀 Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn

### Installation

1. Clone the repository: 
```
git clone https://github.com/shubhamdasdev/Portfolio-Project.git
```

2. Navigate to the project directory:
```
cd portfolio-project
```

3. Install dependencies:
```bash
npm install
# or
yarn install
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
# or
yarn build
```

## 📁 Project Structure

```
portfolio-project/
├── app/                    # Next.js app directory
│   ├── about/             # About page with professional experience at BNY Mellon
│   ├── blog/              # Blog page featuring AI and PM articles
│   ├── contact/           # Contact form with email integration
│   ├── projects/          # AI and FinTech project showcase
│   └── page.tsx           # Home page with featured content
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── ThreeDOrb.tsx     # 3D background animation
│   ├── navigation.tsx    # Site navigation
│   └── footer.tsx        # Site footer with social links
├── public/               # Static assets
│   ├── Resume/          # Shubham Das's Resume
│   └── images/          # Project and blog images
└── styles/              # Global styles and Tailwind config
```

## 🎨 Key Features Breakdown

### Home Page
- Hero section with 3D animated background
- Featured AI and FinTech projects
- Quick access to resume and social links
- Professional introduction as a Product Manager

### Projects Section
- Showcase of projects including:
  - Lumos - AI Financial Advisory
  - ChatGPT Voice Mode Analysis
  - Product Management in AI Era
- Detailed project cards with tech stack tags

### Blog Integration
- Featured articles from Medium
- Substack newsletter "Unveiled"
- AI and Product Management focused content
- Reading time estimates

### Contact Form
- Interactive form with validation
- Toast notifications for submission status
- Direct email integration
- Professional social media links

## 💅 Styling and Theming

The project uses a sophisticated dark theme with:
- High contrast text for readability
- Subtle animations and transitions
- Consistent spacing and typography
- Responsive design breakpoints

### Customizing Colors

Edit the theme in `app/globals.css`:
```css
:root {
  --background: 0 0% 0%;
  --foreground: 0 0% 98%;
  /* Add your custom colors here */
}
```

## 🔧 Configuration Options

### Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_EMAIL=sdas31@hawk.iit.edu
NEXT_PUBLIC_SITE_URL=your-site-url
```

### Social Links
Update social media links in `components/footer.tsx`:
```typescript
const socialLinks = {
  github: 'https://github.com/shubhamdasdev',
  linkedin: 'https://linkedin.com/in/shubhamdas',
  twitter: 'https://twitter.com/shubhamdasdev'
}
```

## 📱 Responsive Design Features

- **Mobile**: Optimized navigation and card layouts
- **Tablet**: Adjusted grid systems and spacing
- **Desktop**: Full featured experience with hover effects
- **4K**: Scaled typography and components

## 🚀 Performance Optimizations

- Static page generation for faster loading
- Optimized image loading with Next.js Image
- Lazy loading of heavy components
- Minimized bundle size

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 👤 Contact

Shubham Das
- Email: sdas31@hawk.iit.edu
- Location: Chicago, IL
- LinkedIn: [Shubham Das](https://linkedin.com/in/shubhamdas)
- GitHub: [@shubhamdasdev](https://github.com/shubhamdasdev)

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Lucide Icons](https://lucide.dev/) for the icon system
- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
