import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Chrome, Menu, PlusSquare, Share, Smartphone } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://anonfeed-2a2a1.web.app/'

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-white/20">
      <SiteHeader activePath="/" />

      <main className="flex-1">
        <section className="py-20 md:py-32 border-b border-border/40 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-white/5 opacity-20 blur-[100px]"></div>
          
          <div className="container px-4 md:px-8 relative max-w-screen-xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-3 py-1 text-sm text-muted-foreground mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
              Android Installation Guide
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
              Install the App on Android
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Follow these quick steps to add AnonFeed to your home screen so it works exactly like a native Android app.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="h-12 px-8 text-base">
                <Link href={APP_URL}>
                  Launch App Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base bg-background/50 backdrop-blur-sm">
                <Link href="#instructions">
                  Read Instructions
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="instructions" className="py-20 md:py-32 container px-4 md:px-8 max-w-screen-xl mx-auto">
          <div className="grid gap-12 md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_400px]">
            <div className="space-y-12">
              <div className="relative pl-8 border-l border-border/50 space-y-16">
                {/* Step 1 */}
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-sm font-bold">
                    1
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold tracking-tight">Open the app link</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Tap the link below to launch the application in Chrome. This is the first step to installing the web app.
                    </p>
                    <div className="p-4 rounded-lg border border-border bg-card/50 backdrop-blur-sm flex items-center justify-between gap-4 group">
                      <code className="text-sm font-mono text-primary truncate">{APP_URL}</code>
                      <Button size="sm" variant="secondary" asChild>
                        <Link href={APP_URL} target="_blank">Open</Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-sm font-bold">
                    2
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold tracking-tight">Open the Chrome menu</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Once the page loads, look for the three dots <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-secondary text-xs align-middle mx-1">⋮</span> in the top-right corner of the Chrome browser.
                    </p>
                    <div className="flex items-center gap-4 p-6 rounded-xl border border-border bg-card/30">
                      <Chrome className="h-8 w-8 text-muted-foreground" />
                      <ArrowRight className="h-4 w-4 text-muted-foreground/50" />
                      <Menu className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-sm font-bold">
                    3
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold tracking-tight">Tap "Add to Home screen"</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Scroll down the menu until you see an option called <strong className="text-foreground">Add to Home screen</strong>. Tap it to proceed.
                    </p>
                    <div className="rounded-lg border border-border overflow-hidden max-w-sm">
                      <div className="bg-card p-3 border-b border-border flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-red-500/20"></div>
                        <div className="h-2 w-2 rounded-full bg-yellow-500/20"></div>
                        <div className="h-2 w-2 rounded-full bg-green-500/20"></div>
                      </div>
                      <div className="p-4 bg-background/50 space-y-2">
                        <div className="h-8 w-full rounded bg-secondary/30"></div>
                        <div className="h-8 w-full rounded bg-secondary/30"></div>
                        <div className="h-8 w-full rounded bg-primary/10 border border-primary/20 flex items-center px-3 text-sm font-medium text-primary">
                          <PlusSquare className="mr-2 h-4 w-4" /> Add to Home screen
                        </div>
                        <div className="h-8 w-full rounded bg-secondary/30"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-sm font-bold">
                    4
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold tracking-tight">Confirm Installation</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      A small window will pop up asking for confirmation. Tap <strong className="text-foreground">Add</strong> to complete the process.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-sm font-bold">
                    5
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold tracking-tight">Find the icon</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      The app icon will now appear on your home screen. You can open it anytime just like a normal app.
                    </p>
                    <div className="grid grid-cols-4 gap-4 max-w-[280px] p-6 rounded-[2rem] border border-border bg-card/30">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="aspect-square rounded-2xl bg-secondary/30"></div>
                      ))}
                      <div className="aspect-square rounded-2xl bg-background relative overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        <Image 
                          src="/logo.png" 
                          alt="App Icon" 
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="sticky top-24 space-y-6">
                <Card className="bg-card/50 backdrop-blur-sm border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Links</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Link href="/features" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                      App Features
                    </Link>
                    <Link href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                      Troubleshooting
                    </Link>
                    <Link href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                      System Requirements
                    </Link>
                    <Link href="/support" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                      Contact Support
                    </Link>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-card to-secondary/20 border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">Why install?</CardTitle>
                    <CardDescription>Benefits of adding to home screen</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Smartphone className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">Full screen experience without browser bars</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Share className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">Quick access directly from your home screen</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
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
