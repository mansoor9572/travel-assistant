"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Plane, Users, Calendar, MapPin, ArrowLeftRight, Sparkles, CheckCircle2 } from "lucide-react"

interface SearchScreenProps {
  onSearch: () => void
  onBack: () => void
  preference: string
}

export function SearchScreen({ onSearch, onBack, preference }: SearchScreenProps) {
  const preferenceLabels: Record<string, { label: string; description: string }> = {
    lowest: { label: "Lowest Price", description: "Finding most affordable options" },
    balanced: { label: "Best Value", description: "Balancing price and comfort" },
    fastest: { label: "Fastest Route", description: "Prioritizing direct flights" }
  }

  const current = preferenceLabels[preference] || preferenceLabels.balanced

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-secondary/30">
      {/* Header */}
      <header className="flex items-center gap-4 px-6 py-5 border-b border-border/50 bg-card/50 backdrop-blur-sm">
        <button 
          onClick={onBack}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground shadow-sm transition-all hover:bg-secondary hover:text-foreground hover:shadow-md"
          aria-label="Go back"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary shadow-sm">
            <Plane className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground">Travel Assistant</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 flex-col px-6 py-8">
        <div className="mx-auto w-full max-w-lg">
          {/* Title Section */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Search Flights
            </h1>
            <p className="mt-2 text-muted-foreground">
              Find your perfect flight with AI-powered search
            </p>
          </div>

          {/* Search Form */}
          <div className="space-y-5">
            {/* Route Card */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-5">
                <div className="flex-1 space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="from" className="text-xs font-medium uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      From
                    </Label>
                    <Input 
                      id="from" 
                      defaultValue="Kuala Lumpur (KUL)" 
                      className="h-12 rounded-xl border-border bg-secondary/50 text-foreground font-medium placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="to" className="text-xs font-medium uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      To
                    </Label>
                    <Input 
                      id="to" 
                      defaultValue="Dubai (DXB)" 
                      className="h-12 rounded-xl border-border bg-secondary/50 text-foreground font-medium placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary"
                    />
                  </div>
                </div>
                <button className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all hover:bg-primary/20">
                  <ArrowLeftRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Date & Travellers */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm space-y-2">
                <Label htmlFor="dates" className="text-xs font-medium uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  Travel Dates
                </Label>
                <Input 
                  id="dates" 
                  defaultValue="20 - 25 May" 
                  className="h-12 rounded-xl border-border bg-secondary/50 text-foreground font-medium placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary"
                />
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm space-y-2">
                <Label htmlFor="travellers" className="text-xs font-medium uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5" />
                  Passengers
                </Label>
                <Input 
                  id="travellers" 
                  defaultValue="1 Adult" 
                  className="h-12 rounded-xl border-border bg-secondary/50 text-foreground font-medium placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary"
                />
              </div>
            </div>

            {/* Active Preference Card */}
            <div className="rounded-2xl border-2 border-primary/30 bg-gradient-to-r from-primary/5 to-accent/5 p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">{current.label}</span>
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                  </div>
                  <p className="mt-0.5 text-sm text-muted-foreground">{current.description}</p>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <Button onClick={onSearch} className="w-full h-13 text-base font-semibold rounded-xl shadow-sm hover:shadow-md transition-all">
              Find Smart Options
            </Button>

            {/* Info Text */}
            <div className="flex items-center justify-center gap-2">
              <div className="h-px flex-1 bg-border" />
              <p className="text-xs text-muted-foreground px-3">
                AI analyzes 1000+ options in seconds
              </p>
              <div className="h-px flex-1 bg-border" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
