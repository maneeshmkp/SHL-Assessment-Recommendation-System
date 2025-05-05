"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ThumbsUp, ThumbsDown } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

interface FeedbackButtonsProps {
  assessmentId: string
  assessmentName: string
}

export function FeedbackButtons({ assessmentId, assessmentName }: FeedbackButtonsProps) {
  const [feedback, setFeedback] = useState<"upvote" | "downvote" | null>(null)

  const handleFeedback = async (type: "upvote" | "downvote") => {
    // If already selected the same feedback, deselect it
    if (feedback === type) {
      setFeedback(null)
      toast({
        title: "Feedback removed",
        description: `Your feedback for "${assessmentName}" has been removed.`,
      })
      return
    }

    setFeedback(type)

    // In a real implementation, this would send the feedback to the server
    // await fetch("/api/feedback", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ assessmentId, type }),
    // })

    toast({
      title: "Thank you for your feedback!",
      description: `You ${type === "upvote" ? "liked" : "disliked"} "${assessmentName}".`,
    })
  }

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant={feedback === "upvote" ? "default" : "outline"}
        size="sm"
        className="h-8 px-2"
        onClick={() => handleFeedback("upvote")}
      >
        <ThumbsUp className="h-4 w-4 mr-1" />
        <span className="sr-only md:not-sr-only md:inline-block">Helpful</span>
      </Button>
      <Button
        variant={feedback === "downvote" ? "default" : "outline"}
        size="sm"
        className="h-8 px-2"
        onClick={() => handleFeedback("downvote")}
      >
        <ThumbsDown className="h-4 w-4 mr-1" />
        <span className="sr-only md:not-sr-only md:inline-block">Not helpful</span>
      </Button>
    </div>
  )
}
