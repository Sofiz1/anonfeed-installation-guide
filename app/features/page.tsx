"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Shield, Ghost, Users, Lock, Send, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://anonfeed-2a2a1.web.app/'

export default function FeaturesPage() {
  const [isAnimating, setIsAnimating] = useState(false)
  const [showResult, setShowResult] = useState(false)

  const startAnimation = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setShowResult(false)
    
    // Reset after animation
    setTimeout(() => {
      setShowResult(true)
      setIsAnimating(false)
    }, 2000)
  }

  // Auto-play animation every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      startAnimation()
    }, 5000)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-white/20">
      <SiteHeader activePath="/features" />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 border-b border-border/40 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
          
          <div className="container px-4 md:px-8 relative max-w-screen-xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary mb-6 backdrop-blur-sm">
                  <Ghost className="mr-2 h-4 w-4" />
                  Total Anonymity
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                  Share your thoughts without the mask.
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                  AnonFeed is a safe space where you can express yourself freely. No names, no profiles, just pure thoughts and community connection.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Button asChild size="lg" className="h-12 px-8 text-base">
                    <Link href={APP_URL}>
                      Start Posting <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Animation Demo */}
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-orange-600 rounded-2xl blur opacity-20"></div>
                <div className="relative bg-card border border-border rounded-xl p-6 shadow-2xl overflow-hidden min-h-[300px] flex flex-col">
                  <div className="flex items-center justify-between mb-6 border-b border-border/50 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500/20"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500/20"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500/20"></div>
                    </div>
                    <div className="text-xs text-muted-foreground font-mono">anon-feed.app</div>
                  </div>

                  {/* Animation Stage */}
                  <div className="flex-1 flex flex-col justify-center relative">
                    {/* Input State */}
                    <div className={`transition-all duration-500 absolute inset-0 flex flex-col justify-center ${isAnimating || showResult ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                          <User className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-blue-400">You</div>
                          <div className="text-xs text-muted-foreground">Posting publicly...</div>
                        </div>
                      </div>
                      <div className="bg-secondary/50 rounded-lg p-4 mb-4 border border-border/50">
                        <p className="text-sm text-muted-foreground">I've always wanted to learn how to fly a plane...</p>
                      </div>
                      <Button onClick={startAnimation} className="w-full bg-primary hover:bg-primary/90">
                        Post Thought <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </div>

                    {/* Processing State */}
                    <div className={`transition-all duration-500 absolute inset-0 flex flex-col items-center justify-center ${isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'}`}>
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary blur-xl opacity-50 animate-pulse"></div>
                        <Shield className="h-16 w-16 text-primary relative z-10 animate-bounce" />
                      </div>
                      <p className="mt-4 text-sm font-medium text-primary animate-pulse">Anonymizing...</p>
                    </div>

                    {/* Result State */}
                    <div className={`transition-all duration-500 absolute inset-0 flex flex-col justify-center ${showResult && !isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                      <div className="bg-card border border-border rounded-lg p-4 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                            <Ghost className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-primary">Anonymous</div>
                            <div className="text-xs text-muted-foreground">Just now</div>
                          </div>
                        </div>
                        <p className="text-sm">I've always wanted to learn how to fly a plane...</p>
                      </div>
                      <div className="mt-6 text-center">
                        <p className="text-xs text-muted-foreground mb-2">Your identity is completely hidden</p>
                        <Button variant="outline" size="sm" onClick={() => setShowResult(false)}>
                          Post Another
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 md:py-32 container px-4 md:px-8 max-w-screen-xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Why go anonymous?</h2>
            <p className="text-muted-foreground text-lg">
              Experience social media without the pressure of likes, followers, or maintaining a perfect image.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all group">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Zero Tracking</CardTitle>
                <CardDescription>
                  We don't track your location, device info, or browsing habits. Your data stays yours.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all group">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Ghost className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>True Freedom</CardTitle>
                <CardDescription>
                  Speak your mind without fear of judgment. Your reputation isn't tied to your posts.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all group">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Open Community</CardTitle>
                <CardDescription>
                  Connect with people based on ideas and thoughts, not profile pictures or status.
                </CardDescription>
              </CardHeader>
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
