"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2, Plane, Clock, Calendar, MapPin, Download, Share2, Mail } from "lucide-react"

interface ConfirmationScreenProps {
  onDone: () => void
  preference: string
}

export function ConfirmationScreen({ onDone, preference }: ConfirmationScreenProps) {
  const getFlightDetails = () => {
    switch (preference) {
      case "lowest":
        return { time: "08:00 AM", arrival: "03:30 PM", duration: "7h 30m", airline: "AirAsia" }
      case "fastest":
        return { time: "10:00 AM", arrival: "04:15 PM", duration: "6h 15m", airline: "Emirates" }
      default:
        return { time: "10:00 AM", arrival: "04:45 PM", duration: "6h 45m", airline: "Malaysia Airlines" }
    }
  }

  const flight = getFlightDetails()
  const confirmationCode = "TRV-2025-" + Math.random().toString(36).substring(2, 8).toUpperCase()

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-secondary/30">
      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-lg text-center space-y-6">
          {/* Success Animation */}
          <div className="relative mx-auto mb-2">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-28 w-28 rounded-full bg-accent/20 animate-ping" style={{ animationDuration: '2s' }} />
            </div>
            <div className="relative flex h-28 w-28 mx-auto items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary shadow-lg">
              <CheckCircle2 className="h-14 w-14 text-white" />
            </div>
          </div>

          {/* Title */}
          <div className="pt-2">
            <h1 className="text-3xl font-bold text-foreground">Booking Confirmed</h1>
            <p className="mt-2 text-muted-foreground">
              Your trip has been successfully booked
            </p>
          </div>

          {/* Confirmation Code */}
          <div className="rounded-2xl border-2 border-primary/30 bg-gradient-to-r from-primary/5 to-accent/5 px-6 py-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Confirmation Code</p>
            <p className="text-2xl font-bold tracking-widest text-primary">{confirmationCode}</p>
          </div>

          {/* Flight Details Card */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm text-left">
            {/* Route Header */}
            <div className="flex items-center justify-between mb-5 pb-5 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Plane className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Kuala Lumpur to Dubai</p>
                  <p className="text-sm text-muted-foreground">{flight.airline} · One-way</p>
                </div>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Date</p>
                  <p className="text-sm font-medium text-foreground">May 20, 2025</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Departure</p>
                  <p className="text-sm font-medium text-foreground">{flight.time}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Terminal</p>
                  <p className="text-sm font-medium text-foreground">Terminal 1</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <Plane className="h-4 w-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Gate</p>
                  <p className="text-sm font-medium text-foreground">B12</p>
                </div>
              </div>
            </div>
          </div>

          {/* Email Confirmation */}
          <div className="flex items-center justify-center gap-2 rounded-xl bg-accent/10 px-4 py-3">
            <Mail className="h-4 w-4 text-accent" />
            <p className="text-sm text-muted-foreground">
              Confirmation sent to <span className="font-medium text-foreground">ahmad@email.com</span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button variant="outline" className="flex-1 h-12 rounded-xl border-border font-medium">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
            <Button variant="outline" className="flex-1 h-12 rounded-xl border-border font-medium">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>

          {/* Done Button */}
          <Button onClick={onDone} className="w-full h-13 text-base font-semibold rounded-xl shadow-sm hover:shadow-md transition-all">
            Book Another Trip
          </Button>
        </div>
      </main>
    </div>
  )
}
