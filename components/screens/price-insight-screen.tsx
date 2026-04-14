"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, TrendingUp, DollarSign, ShieldCheck, Clock, Sparkles, CheckCircle2, AlertCircle } from "lucide-react"

interface PriceInsightScreenProps {
  onBookNow: () => void
  onBack: () => void
  preference: string
}

export function PriceInsightScreen({ onBookNow, onBack, preference }: PriceInsightScreenProps) {
  const getPrice = () => {
    switch (preference) {
      case "lowest":
        return 395
      case "fastest":
        return 520
      default:
        return 450
    }
  }

  const price = getPrice()

  const priceHistory = [
    { day: "Mon", price: price - 30, label: "$" + (price - 30) },
    { day: "Tue", price: price - 15, label: "$" + (price - 15) },
    { day: "Wed", price: price - 20, label: "$" + (price - 20) },
    { day: "Thu", price: price - 5, label: "$" + (price - 5) },
    { day: "Fri", price: price, label: "$" + price },
    { day: "Sat", price: price + 25, label: "$" + (price + 25) },
    { day: "Sun", price: price + 40, label: "$" + (price + 40) },
  ]

  const maxPrice = Math.max(...priceHistory.map(p => p.price))
  const minPrice = Math.min(...priceHistory.map(p => p.price))

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
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
            <Sparkles className="h-4 w-4 text-primary" />
          </div>
          <div>
            <h1 className="font-semibold text-foreground">Price Insight</h1>
            <p className="text-xs text-muted-foreground">AI-powered analysis</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 flex-col px-6 py-6">
        <div className="mx-auto w-full max-w-lg space-y-5">
          {/* Current Price Card */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm text-center">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-accent" />
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Current Best Price</p>
            <p className="text-5xl font-bold text-foreground">${price}</p>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Good time to book</span>
            </div>
          </div>

          {/* Price Chart */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-semibold text-foreground">7-Day Price Trend</h2>
              <div className="flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1">
                <TrendingUp className="h-3.5 w-3.5 text-amber-600" />
                <span className="text-xs font-semibold text-amber-600">+12% expected</span>
              </div>
            </div>
            
            <div className="flex items-end justify-between gap-3 h-32">
              {priceHistory.map((item, index) => (
                <div key={index} className="flex flex-1 flex-col items-center gap-2">
                  <span className={`text-[10px] font-medium ${index === 4 ? 'text-primary' : 'text-muted-foreground'}`}>
                    {item.label}
                  </span>
                  <div 
                    className={`w-full rounded-t-lg transition-all ${
                      index === 4 ? 'bg-primary shadow-sm' : 'bg-secondary hover:bg-secondary/80'
                    }`}
                    style={{
                      height: `${((item.price - minPrice) / (maxPrice - minPrice)) * 70 + 20}px`
                    }}
                  />
                  <span className={`text-xs font-medium ${index === 4 ? 'text-primary' : 'text-muted-foreground'}`}>
                    {item.day}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-border flex items-center justify-center gap-6 text-xs">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded bg-primary" />
                <span className="text-muted-foreground">Current price</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded bg-secondary" />
                <span className="text-muted-foreground">Historical</span>
              </div>
            </div>
          </div>

          {/* Insights Grid */}
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm text-center">
              <div className="flex h-11 w-11 mx-auto items-center justify-center rounded-xl bg-amber-500/10 mb-3">
                <TrendingUp className="h-5 w-5 text-amber-600" />
              </div>
              <p className="text-xs text-muted-foreground mb-0.5">Trend</p>
              <p className="text-sm font-semibold text-foreground">Increasing</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm text-center">
              <div className="flex h-11 w-11 mx-auto items-center justify-center rounded-xl bg-accent/10 mb-3">
                <ShieldCheck className="h-5 w-5 text-accent" />
              </div>
              <p className="text-xs text-muted-foreground mb-0.5">Confidence</p>
              <p className="text-sm font-semibold text-foreground">92% High</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm text-center">
              <div className="flex h-11 w-11 mx-auto items-center justify-center rounded-xl bg-destructive/10 mb-3">
                <Clock className="h-5 w-5 text-destructive" />
              </div>
              <p className="text-xs text-muted-foreground mb-0.5">Book within</p>
              <p className="text-sm font-semibold text-foreground">24 hours</p>
            </div>
          </div>

          {/* AI Recommendation Box */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-primary bg-gradient-to-br from-primary/10 to-accent/5 p-5">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/20">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">AI Recommendation</p>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Book within the next 24 hours to lock in the current price. Our model predicts a 12% price increase based on demand patterns.
                </p>
              </div>
            </div>
          </div>

          {/* Cognitive Label */}
          <div className="flex items-center justify-center gap-2">
            <div className="h-px flex-1 bg-border" />
            <p className="text-xs text-muted-foreground px-3">
              Prediction supports decision-making
            </p>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Actions */}
          <div className="space-y-3 pt-2">
            <Button onClick={onBookNow} className="w-full h-13 text-base font-semibold rounded-xl shadow-sm hover:shadow-md transition-all">
              Book Now at ${price}
            </Button>
            <Button onClick={onBack} variant="outline" className="w-full h-12 rounded-xl border-border font-medium">
              Compare Other Options
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
