"use client"

import { useState } from "react"
import { WelcomeScreen } from "@/components/screens/welcome-screen"
import { SearchScreen } from "@/components/screens/search-screen"
import { RecommendationsScreen } from "@/components/screens/recommendations-screen"
import { PriceInsightScreen } from "@/components/screens/price-insight-screen"
import { BookingScreen } from "@/components/screens/booking-screen"
import { ConfirmationScreen } from "@/components/screens/confirmation-screen"

type Screen = "welcome" | "search" | "recommendations" | "price-insight" | "booking" | "confirmation"

export default function TravelAssistant() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("welcome")
  const [preference, setPreference] = useState<string>("balanced")

  // Navigation handlers
  const handleWelcomeContinue = (selectedPreference: string) => {
    setPreference(selectedPreference)
    setCurrentScreen("search")
  }

  const handleSearch = () => {
    setCurrentScreen("recommendations")
  }

  const handleViewDetails = () => {
    setCurrentScreen("price-insight")
  }

  const handleBookNow = () => {
    setCurrentScreen("booking")
  }

  const handleConfirm = () => {
    setCurrentScreen("confirmation")
  }

  const handleDone = () => {
    // Reset to welcome screen for a new booking
    setCurrentScreen("welcome")
    setPreference("balanced")
  }

  // Render the appropriate screen based on state
  switch (currentScreen) {
    case "welcome":
      return <WelcomeScreen onContinue={handleWelcomeContinue} />
    
    case "search":
      return (
        <SearchScreen 
          onSearch={handleSearch}
          onBack={() => setCurrentScreen("welcome")}
          preference={preference}
        />
      )
    
    case "recommendations":
      return (
        <RecommendationsScreen 
          onViewDetails={handleViewDetails}
          onBack={() => setCurrentScreen("search")}
          preference={preference}
        />
      )
    
    case "price-insight":
      return (
        <PriceInsightScreen 
          onBookNow={handleBookNow}
          onBack={() => setCurrentScreen("recommendations")}
          preference={preference}
        />
      )
    
    case "booking":
      return (
        <BookingScreen 
          onConfirm={handleConfirm}
          onBack={() => setCurrentScreen("price-insight")}
          preference={preference}
        />
      )
    
    case "confirmation":
      return (
        <ConfirmationScreen 
          onDone={handleDone}
          preference={preference}
        />
      )
    
    default:
      return <WelcomeScreen onContinue={handleWelcomeContinue} />
  }
}
