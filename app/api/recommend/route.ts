import { NextResponse } from "next/server"
import { assessmentData } from "@/lib/assessment-data"
import { getEmbeddings } from "@/lib/embeddings"
import { cosineSimilarity } from "@/lib/utils"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { query, job_description, url } = body

    // Determine which input to use
    let inputText = ""
    if (query) {
      inputText = query
    } else if (job_description) {
      inputText = job_description
    } else if (url) {
      // In a real implementation, we would fetch the content from the URL
      // For this demo, we'll just use the URL as the input
      inputText = `Job posting from ${url}`
    } else {
      return NextResponse.json({ error: "Missing required parameter: query, job_description, or url" }, { status: 400 })
    }

    // Get embeddings for the input text
    const inputEmbedding = await getEmbeddings(inputText)

    // Calculate similarity scores for each assessment
    const scoredAssessments = assessmentData.map((assessment) => {
      const similarity = cosineSimilarity(inputEmbedding, assessment.embedding)
      return {
        ...assessment,
        score: similarity,
      }
    })

    // Sort by similarity score and take top 10
    const recommendations = scoredAssessments.sort((a, b) => b.score - a.score).slice(0, 10)

    return NextResponse.json({
      query: inputText,
      recommendations,
    })
  } catch (error) {
    console.error("Error processing recommendation request:", error)
    return NextResponse.json({ error: "Failed to process recommendation request" }, { status: 500 })
  }
}
