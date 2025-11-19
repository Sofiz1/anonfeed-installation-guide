"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { useState } from "react"

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://anonfeed-2a2a1.web.app/'

interface SiteHeaderProps {
  activePath?: "/" | "/features" | "/support"
}

export function SiteHeader({ activePath = "/" }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
          <div className="relative h-8 w-8 overflow-hidden rounded-lg">
            <Image 
              src="/logo.png" 
              alt="AnonFeed Logo" 
              fill
              className="object-cover"
            />
          </div>
          AnonFeed
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link 
            href="/" 
            className={cn(
              "transition-colors hover:text-foreground",
              activePath === "/" ? "text-foreground" : "text-muted-foreground"
            )}
          >
            Guide
          </Link>
          <Link 
            href="/features" 
            className={cn(
              "transition-colors hover:text-foreground",
              activePath === "/features" ? "text-foreground" : "text-muted-foreground"
            )}
          >
            Features
          </Link>
          <Link 
            href="/support" 
            className={cn(
              "transition-colors hover:text-foreground",
              activePath === "/support" ? "text-foreground" : "text-muted-foreground"
            )}
          >
            Support
          </Link>
        </nav>
        <Button asChild variant="secondary" size="sm" className="hidden md:inline-flex">
          <Link href={APP_URL}>Open App</Link>
        </Button>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 py-6">
                <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
                  <div className="relative h-8 w-8 overflow-hidden rounded-lg">
                    <Image 
                      src="/logo.png" 
                      alt="AnonFeed Logo" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  AnonFeed
                </div>
                <nav className="flex flex-col gap-4">
                  <Link 
                    href="/" 
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      activePath === "/" ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    Guide
                  </Link>
                  <Link 
                    href="/features" 
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      activePath === "/features" ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    Features
                  </Link>
                  <Link 
                    href="/support" 
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      activePath === "/support" ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    Support
                  </Link>
                </nav>
                <div className="mt-4">
                  <Button asChild className="w-full" size="lg">
                    <Link href={APP_URL}>Open App</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
