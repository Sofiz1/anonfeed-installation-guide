# AnonFeed Android Installation Guide

A modern, responsive Next.js web application that provides step-by-step instructions for installing AnonFeed as a Progressive Web App (PWA) on Android devices.

![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.9-38bdf8)

## 🌟 Features

- **Step-by-Step Guide**: Clear, visual instructions for installing AnonFeed on Android
- **Features Showcase**: Interactive demo of AnonFeed's anonymity features
- **Support Page**: Direct contact information via phone and Telegram
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Dark Mode**: Beautiful dark theme optimized for readability

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or higher
- npm, pnpm, or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Sofiz1/anonfeed-installation-guide.git
cd anonfeed-installation-guide
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Create a `.env.local` file (optional):
```env
NEXT_PUBLIC_APP_URL=https://anonfeed-2a2a1.web.app/
NEXT_PUBLIC_SUPPORT_PHONE=+251911418196
NEXT_PUBLIC_TELEGRAM_USERNAME=Sofizhag1
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Main installation guide page
│   ├── features/          # Features showcase page
│   ├── support/           # Support/contact page
│   └── layout.tsx         # Root layout with metadata
├── components/            # React components
│   ├── site-header.tsx   # Navigation header
│   └── ui/               # shadcn/ui components
├── public/               # Static assets
├── lib/                  # Utility functions
└── styles/               # Global styles
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **React**: 19.2.0
- **TypeScript**: 5.0
- **Styling**: Tailwind CSS 4.1.9
- **UI Components**: shadcn/ui (Radix UI)
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Netlify (Recommended)

1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository
5. Add environment variables:
   - `NEXT_PUBLIC_APP_URL`
   - `NEXT_PUBLIC_SUPPORT_PHONE`
   - `NEXT_PUBLIC_TELEGRAM_USERNAME`
6. Deploy!

See [NETLIFY_DEPLOY.md](./NETLIFY_DEPLOY.md) for detailed instructions.

### Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Next.js and configure everything

## 🔧 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_APP_URL` | AnonFeed application URL | `https://anonfeed-2a2a1.web.app/` |
| `NEXT_PUBLIC_SUPPORT_PHONE` | Support phone number | `+251911418196` |
| `NEXT_PUBLIC_TELEGRAM_USERNAME` | Telegram username for support | `Sofizhag1` |

## 📱 Pages

- **/** - Main installation guide with step-by-step instructions
- **/features** - Interactive features showcase
- **/support** - Contact information and support options

## 🎨 Customization

The app uses environment variables for easy configuration. All URLs and contact information can be updated via environment variables without changing the code.

## 📄 License

This project is private and proprietary.

## 👤 Author

**Sofonias Hagos**

- GitHub: [@Sofiz1](https://github.com/Sofiz1)
- Telegram: [@Sofizhag1](https://t.me/Sofizhag1)
- Phone: +251 911 418196

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)

---

**Made with ❤️ for AnonFeed**

