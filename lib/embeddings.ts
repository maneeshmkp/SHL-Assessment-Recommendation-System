// This file contains functions for generating and working with embeddings
// In a real implementation, this would use a proper embedding model

// Function to generate embeddings for text
// In a real implementation, this would call an embedding API like OpenAI's
export async function getEmbeddings(text: string): Promise<number[]> {
  // For demonstration purposes, we'll generate random embeddings
  // In a real implementation, this would call an embedding API

  // Create a deterministic but unique embedding based on the text
  // This is just for demonstration - real embeddings would come from a model
  const seed = hashString(text)
  const rng = seedRandom(seed)

  // Generate a 384-dimensional embedding (common size for many models)
  return Array(384)
    .fill(0)
    .map(() => rng() * 2 - 1)
}

// Simple string hashing function for deterministic random numbers
function hashString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash // Convert to 32bit integer
  }
  return hash
}

// Simple seeded random number generator
function seedRandom(seed: number) {
  return () => {
    const x = Math.sin(seed++) * 10000
    return x - Math.floor(x)
  }
}

// Function to precompute embeddings for all assessments
// This would be run during build or data processing
export async function precomputeAssessmentEmbeddings(assessments: any[]): Promise<any[]> {
  const result = []

  for (const assessment of assessments) {
    // Create a text representation of the assessment
    const text = `
      ${assessment.name}
      ${assessment.description || ""}
      ${assessment.test_type || ""}
      ${assessment.duration || ""}
    `

    // Generate embedding
    const embedding = await getEmbeddings(text)

    // Add embedding to assessment
    result.push({
      ...assessment,
      embedding,
    })
  }

  return result
}
