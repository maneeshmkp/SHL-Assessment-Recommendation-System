import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Calculate cosine similarity between two vectors
export function cosineSimilarity(vecA: number[], vecB: number[]): number {
  if (vecA.length !== vecB.length) {
    throw new Error("Vectors must have the same length")
  }

  let dotProduct = 0
  let normA = 0
  let normB = 0

  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i]
    normA += vecA[i] * vecA[i]
    normB += vecB[i] * vecB[i]
  }

  normA = Math.sqrt(normA)
  normB = Math.sqrt(normB)

  if (normA === 0 || normB === 0) {
    return 0
  }

  return dotProduct / (normA * normB)
}

// Calculate Mean Average Precision at K
export function calculateMAPAtK(relevantItems: string[], recommendedItems: string[], k: number): number {
  // Limit to top K recommendations
  const topK = recommendedItems.slice(0, k)

  let relevantCount = 0
  let sum = 0

  for (let i = 0; i < topK.length; i++) {
    const item = topK[i]
    if (relevantItems.includes(item)) {
      relevantCount++
      sum += relevantCount / (i + 1)
    }
  }

  const relevantTotal = Math.min(relevantItems.length, k)
  return relevantTotal > 0 ? sum / relevantTotal : 0
}

// Calculate Mean Recall at K
export function calculateRecallAtK(relevantItems: string[], recommendedItems: string[], k: number): number {
  // Limit to top K recommendations
  const topK = recommendedItems.slice(0, k)

  // Count relevant items in top K
  const relevantInTopK = topK.filter((item) => relevantItems.includes(item)).length

  // Calculate recall
  return relevantItems.length > 0 ? relevantInTopK / relevantItems.length : 0
}
