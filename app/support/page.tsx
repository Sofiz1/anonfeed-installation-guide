import Link from "next/link"
import Image from "next/image"
import { Phone, MessageCircle, ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"

const SUPPORT_PHONE = process.env.NEXT_PUBLIC_SUPPORT_PHONE || '+251911418196'
const TELEGRAM_USERNAME = process.env.NEXT_PUBLIC_TELEGRAM_USERNAME || 'Sofizhag1'

export default function SupportPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-white/20">
      <SiteHeader activePath="/support" />

      <main className="flex-1">
        <section className="py-20 md:py-32 border-b border-border/40 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-white/5 opacity-20 blur-[100px]"></div>
          
          <div className="container px-4 md:px-8 relative max-w-screen-xl mx-auto text-center">
            <Button asChild variant="ghost" size="sm" className="mb-6">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Guide
              </Link>
            </Button>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
              Get Support
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Need help? Reach out to us directly through phone or Telegram.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32 container px-4 md:px-8 max-w-screen-lg mx-auto">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Phone</CardTitle>
                </div>
                <CardDescription>Call us directly for immediate assistance</CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href={`tel:${SUPPORT_PHONE.replace(/\s/g, '')}`}
                  className="text-lg font-mono text-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  {SUPPORT_PHONE}
                </a>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Telegram</CardTitle>
                </div>
                <CardDescription>Message us on Telegram for quick support</CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href={`https://t.me/${TELEGRAM_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-mono text-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  @{TELEGRAM_USERNAME}
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-br from-card to-secondary/20 border-border inline-block">
              <CardHeader>
                <CardTitle className="text-lg">Support Hours</CardTitle>
                <CardDescription>We're here to help you</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Available 24/7 for urgent issues
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/40 py-12 bg-background">
        <div className="container px-4 md:px-8 max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
            <div className="relative h-6 w-6 overflow-hidden rounded-md">
              <Image 
                src="/logo.png" 
                alt="AnonFeed Logo" 
                fill
                className="object-cover"
              />
            </div>
            AnonFeed
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AnonFeed. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
