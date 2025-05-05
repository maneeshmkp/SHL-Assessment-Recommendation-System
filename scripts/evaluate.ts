import { calculateMAPAtK, calculateRecallAtK } from "../lib/utils"

// Test dataset structure
interface TestQuery {
  query: string
  relevant_assessments: string[]
}

// Function to run evaluation
async function evaluateRecommendations() {
  console.log("Evaluating recommendation system...")

  // In a real implementation, this would:
  // 1. Load the test dataset
  // 2. For each query, get recommendations from the system
  // 3. Calculate metrics

  // Sample test dataset
  const testQueries: TestQuery[] = [
    {
      query:
        "I am hiring for Java developers who can also collaborate effectively with my business teams. Looking for an assessment(s) that can be completed in 40 minutes.",
      relevant_assessments: [
        "Automata - Fix (New) | SHL",
        "Core Java (Entry Level) (New) | SHL",
        "Java 8 (New) | SHL",
        "Core Java (Advanced Level) (New) | SHL",
        "Agile Software Development | SHL",
        "Technology Professional 8.0 Job Focused Assessment | SHL",
        "Computer Science (New) | SHL",
      ],
    },
    // Additional test queries would be added here
  ]

  // Sample recommendations (in a real system, these would come from the recommendation engine)
  const recommendations = {
    "I am hiring for Java developers who can also collaborate effectively with my business teams. Looking for an assessment(s) that can be completed in 40 minutes.":
      [
        "Core Java (Entry Level) (New) | SHL",
        "Java 8 (New) | SHL",
        "Automata - Fix (New) | SHL",
        "Core Java (Advanced Level) (New) | SHL",
        "Technology Professional 8.0 Job Focused Assessment | SHL",
      ],
  }

  // Calculate metrics
  let totalRecall = 0
  let totalMAP = 0

  for (const testQuery of testQueries) {
    const query = testQuery.query
    const relevantAssessments = testQuery.relevant_assessments
    const recommendedAssessments = recommendations[query] || []

    // Calculate Recall@3
    const recall = calculateRecallAtK(relevantAssessments, recommendedAssessments, 3)
    totalRecall += recall

    // Calculate MAP@3
    const map = calculateMAPAtK(relevantAssessments, recommendedAssessments, 3)
    totalMAP += map

    console.log(`Query: "${query.substring(0, 50)}..."`)
    console.log(`  Recall@3: ${recall.toFixed(4)}`)
    console.log(`  MAP@3: ${map.toFixed(4)}`)
  }

  // Calculate mean metrics
  const meanRecall = totalRecall / testQueries.length
  const meanMAP = totalMAP / testQueries.length

  console.log("\nOverall Results:")
  console.log(`  Mean Recall@3: ${meanRecall.toFixed(4)}`)
  console.log(`  Mean MAP@3: ${meanMAP.toFixed(4)}`)

  return {
    meanRecall,
    meanMAP,
  }
}

async function main() {
  try {
    await evaluateRecommendations()
  } catch (error) {
    console.error("Error during evaluation:", error)
    process.exit(1)
  }
}

main()
