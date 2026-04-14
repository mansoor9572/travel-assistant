"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Check, Clock, Sparkles, TrendingUp, Plane, ArrowRight, Star } from "lucide-react"

interface RecommendationsScreenProps {
  onViewDetails: () => void
  onBack: () => void
  preference: string
}

export function RecommendationsScreen({ onViewDetails, onBack, preference }: RecommendationsScreenProps) {
  const getRecommendedFlight = () => {
    switch (preference) {
      case "lowest":
        return { time: "02:00 PM", arrival: "10:15 PM", duration: "8h 15m", price: 395, label: "Lowest price available", airline: "Qatar Airways" }
      case "fastest":
        return { time: "10:00 AM", arrival: "04:15 PM", duration: "6h 15m", price: 520, label: "Fastest direct route", airline: "Emirates" }
      default:
        return { time: "10:00 AM", arrival: "04:45 PM", duration: "6h 45m", price: 450, label: "Best value option", airline: "Malaysia Airlines" }
    }
  }

  const recommended = getRecommendedFlight()

  const otherOptions = [
    { time: "08:00 AM", arrival: "03:30 PM", duration: "7h 30m", price: 420, stops: "1 stop", airline: "AirAsia" },
    { time: "02:00 PM", arrival: "10:15 PM", duration: "8h 15m", price: 395, stops: "1 stop", airline: "Qatar Airways" },
    { time: "06:00 PM", arrival: "12:45 AM", duration: "6h 45m", price: 510, stops: "Direct", airline: "Emirates" },
  ].filter(opt => opt.price !== recommended.price)

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
        <div className="flex-1">
          <h1 className="font-semibold text-foreground">KUL to DXB</h1>
          <p className="text-xs text-muted-foreground">May 20 - 25, 2025 · 1 Passenger</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 flex-col px-6 py-6">
        <div className="mx-auto w-full max-w-lg space-y-5">
          {/* Recommended Card */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-primary bg-card shadow-lg">
            {/* Gradient Accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
            
            <div className="p-6">
              {/* Badge Row */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 shadow-sm">
                    <Sparkles className="h-3.5 w-3.5 text-primary-foreground" />
                    <span className="text-xs font-semibold text-primary-foreground">AI Recommended</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-medium text-foreground">4.8</span>
                </div>
              </div>

              {/* Flight Route */}
              <div className="flex items-center justify-between mb-5">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">{recommended.time.split(" ")[0]}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">KUL</p>
                </div>
                
                <div className="flex-1 px-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <div className="flex-1 border-t-2 border-dashed border-primary/40 relative">
                      <Plane className="absolute left-1/2 -translate-x-1/2 -top-2.5 h-4 w-4 text-primary rotate-90" />
                    </div>
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-center text-xs text-muted-foreground mt-2">{recommended.duration} · Direct</p>
                </div>

                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">{recommended.arrival.split(" ")[0]}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">DXB</p>
                </div>
              </div>

              {/* Airline & Price */}
              <div className="flex items-center justify-between mb-5 pb-5 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary">
                    <Plane className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{recommended.airline}</span>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-primary">${recommended.price}</p>
                  <p className="text-xs text-muted-foreground">per person</p>
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-2.5 mb-5">
                <div className="flex items-center gap-3 text-sm">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20">
                    <Check className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <span className="text-foreground">{recommended.label}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20">
                    <Check className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <span className="text-muted-foreground">Matched to your preferences</span>
                </div>
              </div>

              <Button onClick={onViewDetails} className="w-full h-12 rounded-xl font-semibold shadow-sm">
                View Price Insight
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Cognitive Design Note */}
          <div className="flex items-center justify-center gap-2">
            <div className="h-px flex-1 bg-border" />
            <p className="text-xs text-muted-foreground px-3">
              Highlighted to reduce decision fatigue
            </p>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Other Options */}
          <div className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Other Available Flights
            </h2>
            {otherOptions.map((option, index) => (
              <button 
                key={index}
                onClick={onViewDetails}
                className="group flex w-full items-center justify-between rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary transition-colors group-hover:bg-primary/10">
                    <Plane className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-foreground">{option.time}</p>
                    <p className="text-sm text-muted-foreground">{option.duration} · {option.stops}</p>
                    <p className="text-xs text-muted-foreground">{option.airline}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xl font-bold text-foreground">${option.price}</span>
                  <p className="text-xs text-muted-foreground">per person</p>
                </div>
              </button>
            ))}
          </div>

          {/* AI Price Alert */}
          <div className="flex items-start gap-4 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/20">
              <TrendingUp className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Price Alert</p>
              <p className="text-sm text-muted-foreground mt-0.5">
                Prices expected to increase 12% within 24 hours. Book soon for best rates.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
