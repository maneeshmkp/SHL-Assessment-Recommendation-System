"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const quotes = [
  "Hire character. Train skill.",
  "The secret of my success is that we have gone to exceptional lengths to hire the best people in the world.",
  "Great vision without great people is irrelevant.",
  "Hiring people is an art, not a science, and resumes can't tell you whether someone will fit into a company's culture.",
  "I hire people brighter than me and then I get out of their way.",
  "You need to have a collaborative hiring process.",
  "If you hire only those people you understand, the company will never get people better than you are.",
  "The best talent is not going to work for you if they don't believe you're committed to diversity and inclusion.",
  "Always hire people who are better than you in some way.",
  "The secret to successful hiring is this: look for the people who want to change the world.",
]

export function QuoteGenerator() {
  const [quote, setQuote] = useState("")

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setQuote(quotes[randomIndex])
  }

  useEffect(() => {
    generateRandomQuote()
  }, [])

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" onClick={generateRandomQuote}>
            <RefreshCw className="h-4 w-4" />
            <span className="sr-only">Generate new quote</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="max-w-xs">
          <p className="text-sm">{quote}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
