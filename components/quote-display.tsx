"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RefreshCw, Quote } from "lucide-react"

const quotes = [
  {
    text: "Hire character. Train skill.",
    author: "Peter Schutz",
  },
  {
    text: "The secret of my success is that we have gone to exceptional lengths to hire the best people in the world.",
    author: "Steve Jobs",
  },
  {
    text: "Great vision without great people is irrelevant.",
    author: "Jim Collins",
  },
  {
    text: "Hiring people is an art, not a science, and resumes can't tell you whether someone will fit into a company's culture.",
    author: "Howard Schultz",
  },
  {
    text: "I hire people brighter than me and then I get out of their way.",
    author: "Lee Iacocca",
  },
  {
    text: "You need to have a collaborative hiring process.",
    author: "Steve Jobs",
  },
  {
    text: "If you hire only those people you understand, the company will never get people better than you are.",
    author: "Ray Dalio",
  },
  {
    text: "The best talent is not going to work for you if they don't believe you're committed to diversity and inclusion.",
    author: "Ginni Rometty",
  },
  {
    text: "Always hire people who are better than you in some way.",
    author: "Simon Sinek",
  },
  {
    text: "The secret to successful hiring is this: look for the people who want to change the world.",
    author: "Marc Benioff",
  },
]

export function QuoteDisplay() {
  const [quote, setQuote] = useState(quotes[0])

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setQuote(quotes[randomIndex])
  }

  useEffect(() => {
    generateRandomQuote()
  }, [])

  return (
    <Card className="border-brand-200 bg-gradient-to-r from-brand-50 to-white dark:from-brand-950/20 dark:to-background">
      <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-900">
            <Quote className="h-5 w-5 text-brand-600 dark:text-brand-400" />
          </div>
          <div>
            <blockquote className="text-lg font-medium italic text-foreground">"{quote.text}"</blockquote>
            <cite className="mt-2 block text-sm text-muted-foreground">— {quote.author}</cite>
          </div>
        </div>
        <Button variant="outline" size="sm" onClick={generateRandomQuote} className="shrink-0">
          <RefreshCw className="h-4 w-4 mr-2" />
          New Quote
        </Button>
      </CardContent>
    </Card>
  )
}
