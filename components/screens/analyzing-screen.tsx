"use client"

import { useEffect } from "react"
import { Plane } from "lucide-react"

interface AnalyzingScreenProps {
  onComplete: () => void
}

export function AnalyzingScreen({ onComplete }: AnalyzingScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete()
    }, 2000)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-background to-secondary/30 px-6">
      <div className="flex flex-col items-center text-center space-y-6">
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <Plane className="h-10 w-10 text-primary animate-pulse" />
          {/* Outer ripples */}
          <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping" />
        </div>
        
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">Analyzing 1200 flights...</h2>
          <p className="text-sm text-muted-foreground animate-pulse">
            AI reasoning in progress
          </p>
        </div>
      </div>
    </div>
  )
}
