"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Loader2, ExternalLink, Search } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FeedbackButtons } from "@/components/feedback-buttons"
import { Toaster } from "@/components/ui/toaster"
import { QuoteDisplay } from "@/components/quote-display"
import { FAQSection } from "@/components/faq-section"

interface Assessment {
  name: string
  url: string
  remote_testing_support: boolean
  adaptive_support: boolean
  duration: string
  test_type: string
  score: number
}

export default function Home() {
  const [query, setQuery] = useState("")
  const [jobDescription, setJobDescription] = useState("")
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [assessments, setAssessments] = useState<Assessment[]>([])
  const [activeTab, setActiveTab] = useState("query")

  const handleSubmit = async () => {
    setLoading(true)
    setAssessments([])

    try {
      let payload = {}

      if (activeTab === "query") {
        payload = { query }
      } else if (activeTab === "description") {
        payload = { job_description: jobDescription }
      } else {
        payload = { url }
      }

      const response = await fetch("/api/recommend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (data.recommendations) {
        setAssessments(data.recommendations)
      }
    } catch (error) {
      console.error("Error fetching recommendations:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-background">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-brand-50 to-background dark:from-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Find the <span className="gradient-text">Perfect Assessments</span> for Your Hiring Needs
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Our intelligent system matches your job requirements with the most relevant SHL assessments, saving you
                time and improving hiring outcomes.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg" className="gradient-bg">
                <a href="#search-section">Get Started</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/about">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="w-full py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <QuoteDisplay />
        </div>
      </section>

      {/* Search Section */}
      <section id="search-section" className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 max-w-4xl space-y-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold gradient-text">Assessment Finder</h2>
            <p className="text-muted-foreground mt-2">Describe your needs and we'll find the perfect assessments</p>
          </div>

          <Card className="border-brand-200">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Search for Assessments</CardTitle>
              <CardDescription>Choose how you want to find assessments</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="query">Natural Language Query</TabsTrigger>
                  <TabsTrigger value="description">Job Description</TabsTrigger>
                  <TabsTrigger value="url">Job Description URL</TabsTrigger>
                </TabsList>
                <TabsContent value="query" className="mt-4">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="query" className="block text-sm font-medium mb-1">
                        Enter your query
                      </label>
                      <Input
                        id="query"
                        placeholder="e.g., Java developers who can collaborate with business teams"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                      />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="description" className="mt-4">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="jobDescription" className="block text-sm font-medium mb-1">
                        Enter job description
                      </label>
                      <Textarea
                        id="jobDescription"
                        placeholder="Paste the full job description here..."
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        rows={8}
                      />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="url" className="mt-4">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="url" className="block text-sm font-medium mb-1">
                        Enter job posting URL
                      </label>
                      <Input
                        id="url"
                        placeholder="https://example.com/job-posting"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                      />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button
                onClick={handleSubmit}
                disabled={
                  loading ||
                  (activeTab === "query" && !query) ||
                  (activeTab === "description" && !jobDescription) ||
                  (activeTab === "url" && !url)
                }
                className="w-full md:w-auto gradient-bg"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Finding assessments...
                  </>
                ) : (
                  <>
                    <Search className="mr-2 h-4 w-4" />
                    Get Recommendations
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>

          {assessments.length > 0 && (
            <Card className="border-brand-200">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Recommended Assessments</CardTitle>
                <CardDescription>Found {assessments.length} relevant assessments for your needs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Assessment</TableHead>
                        <TableHead>Test Type</TableHead>
                        <TableHead>Duration</TableHead>
                        <TableHead>Remote Testing</TableHead>
                        <TableHead>Adaptive/IRT</TableHead>
                        <TableHead>Feedback</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {assessments.map((assessment, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">
                            <a
                              href={assessment.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center hover:text-brand-600"
                            >
                              {assessment.name}
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </TableCell>
                          <TableCell>{assessment.test_type}</TableCell>
                          <TableCell>{assessment.duration}</TableCell>
                          <TableCell>
                            <Badge
                              variant={assessment.remote_testing_support ? "default" : "outline"}
                              className={assessment.remote_testing_support ? "bg-brand-600" : ""}
                            >
                              {assessment.remote_testing_support ? "Yes" : "No"}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={assessment.adaptive_support ? "default" : "outline"}
                              className={assessment.adaptive_support ? "bg-brand-600" : ""}
                            >
                              {assessment.adaptive_support ? "Yes" : "No"}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <FeedbackButtons assessmentId={index.toString()} assessmentName={assessment.name} />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      <Toaster />
    </main>
  )
}
