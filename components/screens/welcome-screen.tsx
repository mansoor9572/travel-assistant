"use client"

import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Plane, DollarSign, Scale, Zap, Check } from "lucide-react"

interface WelcomeScreenProps {
  onContinue: (preference: string) => void
}

const priorities = [
  {
    id: "lowest",
    icon: DollarSign,
    title: "Lowest Price",
    description: "We&apos;ll prioritize the most affordable flight options",
    tag: "Save up to 40%",
  },
  {
    id: "balanced",
    icon: Scale,
    title: "Best Value",
    description: "Optimal balance between price, duration and comfort",
    tag: "Most popular",
  },
  {
    id: "fastest",
    icon: Zap,
    title: "Fastest Route",
    description: "Minimize total travel time with direct flights",
    tag: "Save up to 4hrs",
  },
]

export function WelcomeScreen({ onContinue }: WelcomeScreenProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const preference = formData.get("priority") as string
    onContinue(preference || "balanced")
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-secondary/30">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary shadow-sm">
            <Plane className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground">Travel Assistant</span>
        </div>

      </header>

      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-8">
        <div className="w-full max-w-lg">
          {/* Hero Section */}
          <div className="mb-10 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <Plane className="h-7 w-7 text-primary" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Smart Flight Booking
            </h1>
            <p className="mt-3 text-base text-muted-foreground text-balance max-w-sm mx-auto">
              Tell us your travel priority and our AI will personalize your entire booking experience
            </p>
          </div>

          {/* Priority Selection Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <RadioGroup defaultValue="balanced" name="priority" className="space-y-3">
                {priorities.map((priority) => {
                  const Icon = priority.icon
                  return (
                    <label
                      key={priority.id}
                      htmlFor={priority.id}
                      className="group relative flex cursor-pointer items-start gap-4 rounded-2xl border-2 border-transparent bg-card p-5 shadow-sm ring-1 ring-border/50 transition-all duration-200 hover:shadow-md hover:ring-primary/30 has-[:checked]:border-primary has-[:checked]:bg-primary/5 has-[:checked]:ring-primary/50 has-[:checked]:shadow-md"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary transition-colors group-has-[:checked]:bg-primary/15">
                        <Icon className="h-5 w-5 text-muted-foreground transition-colors group-has-[:checked]:text-primary" />
                      </div>
                      <div className="flex-1 pt-0.5">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-foreground">{priority.title}</span>
                          <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-accent">
                            {priority.tag}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                          {priority.description.replace("&apos;", "'")}
                        </p>
                      </div>
                      <RadioGroupItem value={priority.id} id={priority.id} className="sr-only" />
                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-border transition-all duration-200 group-has-[:checked]:border-primary group-has-[:checked]:bg-primary">
                        <Check className="h-3 w-3 text-primary-foreground opacity-0 transition-opacity group-has-[:checked]:opacity-100" />
                      </div>
                    </label>
                  )
                })}
              </RadioGroup>
            </div>

            <Button 
              type="submit" 
              className="w-full h-13 text-base font-semibold rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              Continue to Search
            </Button>

            {/* Cognitive Design Note */}
            <div className="flex items-center justify-center gap-2 pt-2">
              <div className="h-px flex-1 bg-border" />
              <p className="text-xs text-muted-foreground px-3">
                Your choice personalizes all recommendations
              </p>
              <div className="h-px flex-1 bg-border" />
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-4 text-center">
        <p className="text-xs text-muted-foreground">
          Powered by AI to reduce decision fatigue
        </p>
      </footer>
    </div>
  )
}
