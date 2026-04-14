"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Plane, Clock, ShieldCheck, CreditCard, User, Mail, CheckCircle2, Lock } from "lucide-react"

interface BookingScreenProps {
  onConfirm: () => void
  onBack: () => void
  preference: string
}

export function BookingScreen({ onConfirm, onBack, preference }: BookingScreenProps) {
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

  const getFlightDetails = () => {
    switch (preference) {
      case "lowest":
        return { time: "02:00 PM", arrival: "10:15 PM", duration: "8h 15m", airline: "Qatar Airways" }
      case "fastest":
        return { time: "10:00 AM", arrival: "04:15 PM", duration: "6h 15m", airline: "Emirates" }
      default:
        return { time: "10:00 AM", arrival: "04:45 PM", duration: "6h 45m", airline: "Malaysia Airlines" }
    }
  }

  const price = getPrice()
  const flight = getFlightDetails()

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
          <h1 className="font-semibold text-foreground">Complete Booking</h1>
          <p className="text-xs text-muted-foreground">Final step - review and confirm</p>
        </div>
        <div className="flex items-center gap-1.5 text-accent">
          <Lock className="h-4 w-4" />
          <span className="text-xs font-medium">Secure</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 flex-col px-6 py-6">
        <div className="mx-auto w-full max-w-lg space-y-5">
          {/* Flight Summary Card */}
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-card shadow-sm">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Flight Summary</p>
              
              {/* Route */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-center">
                  <p className="text-xl font-bold text-foreground">{flight.time.split(" ")[0]}</p>
                  <p className="text-xs text-muted-foreground">KUL</p>
                </div>
                
                <div className="flex-1 px-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <div className="flex-1 border-t-2 border-dashed border-primary/40 relative">
                      <Plane className="absolute left-1/2 -translate-x-1/2 -top-2.5 h-4 w-4 text-primary rotate-90" />
                    </div>
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-center text-xs text-muted-foreground mt-2">{flight.duration} · Direct</p>
                </div>

                <div className="text-center">
                  <p className="text-xl font-bold text-foreground">{flight.arrival.split(" ")[0]}</p>
                  <p className="text-xs text-muted-foreground">DXB</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary">
                    <Plane className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{flight.airline}</p>
                    <p className="text-xs text-muted-foreground">May 20, 2025</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">${price}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Passenger Details */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm space-y-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Passenger Details</p>
              <div className="flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-1">
                <CheckCircle2 className="h-3 w-3 text-accent" />
                <span className="text-[10px] font-medium text-accent">Auto-filled</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm text-muted-foreground flex items-center gap-1.5">
                <User className="h-3.5 w-3.5" />
                Full Name (as per passport)
              </Label>
              <Input 
                id="name" 
                defaultValue="Ahmad bin Abdullah" 
                className="h-12 rounded-xl border-border bg-secondary/50 text-foreground font-medium focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm text-muted-foreground flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5" />
                Email Address
              </Label>
              <Input 
                id="email" 
                type="email"
                defaultValue="ahmad@email.com" 
                className="h-12 rounded-xl border-border bg-secondary/50 text-foreground font-medium focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary"
              />
            </div>

            <div className="flex items-center justify-center gap-2 pt-2">
              <div className="h-px flex-1 bg-border" />
              <p className="text-xs text-muted-foreground px-2">
                Auto-fill reduces memory effort
              </p>
              <div className="h-px flex-1 bg-border" />
            </div>
          </div>

          {/* Payment Summary */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
              <CreditCard className="h-3.5 w-3.5" />
              Payment Summary
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Base fare</span>
                <span className="text-foreground font-medium">${price - 50}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Taxes & fees</span>
                <span className="text-foreground font-medium">$50</span>
              </div>
              <div className="border-t border-border pt-3 flex items-center justify-between">
                <span className="font-semibold text-foreground">Total Amount</span>
                <span className="text-2xl font-bold text-primary">${price}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-accent/10 p-3">
              <ShieldCheck className="h-5 w-5 text-accent shrink-0" />
              <p className="text-sm text-muted-foreground">
                Price guaranteed - no hidden fees or surcharges
              </p>
            </div>
          </div>

          {/* Confirm Button */}
          <Button onClick={onConfirm} className="w-full h-13 text-base font-semibold rounded-xl shadow-sm hover:shadow-md transition-all">
            <Lock className="h-4 w-4 mr-2" />
            Confirm & Pay ${price}
          </Button>
          
          <p className="text-center text-xs text-muted-foreground">
            By confirming, you agree to our terms and conditions
          </p>
        </div>
      </main>
    </div>
  )
}
