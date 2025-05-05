"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

// Sample data for demonstration
const recentSearches = [
  { id: 1, query: "Java developers with business collaboration skills", date: "2023-05-01", results: 7 },
  { id: 2, query: "Entry level sales position", date: "2023-05-02", results: 9 },
  { id: 3, query: "QA Engineer with Selenium experience", date: "2023-05-03", results: 10 },
  { id: 4, query: "Content writer with SEO knowledge", date: "2023-05-04", results: 5 },
  { id: 5, query: "Bank administrative assistant", date: "2023-05-05", results: 6 },
]

const popularAssessments = [
  { name: "Core Java (Entry Level)", count: 42 },
  { name: "Verify - Numerical Ability", count: 38 },
  { name: "Entry Level Sales Solution", count: 35 },
  { name: "Automata - Fix", count: 30 },
  { name: "Administrative Professional - Short Form", count: 28 },
]

const feedbackData = [
  { name: "Positive", value: 68 },
  { name: "Negative", value: 32 },
]

const COLORS = ["#4ade80", "#f87171"]

export default function Dashboard() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <Tabs defaultValue="overview">
        <TabsList className="mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="searches">Recent Searches</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Popular Assessments</CardTitle>
                <CardDescription>Most recommended assessments in the past month</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                {isClient && (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={popularAssessments} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" angle={-45} textAnchor="end" height={70} />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="count" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Feedback Distribution</CardTitle>
                <CardDescription>User feedback on recommendations</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                {isClient && (
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={feedbackData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {feedbackData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="searches">
          <Card>
            <CardHeader>
              <CardTitle>Recent Searches</CardTitle>
              <CardDescription>Your recent assessment queries</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentSearches.map((search) => (
                  <div key={search.id} className="border p-4 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{search.query}</h3>
                        <p className="text-sm text-muted-foreground">
                          {new Date(search.date).toLocaleDateString()} • {search.results} results
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Run Again
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="feedback">
          <Card>
            <CardHeader>
              <CardTitle>Your Feedback</CardTitle>
              <CardDescription>Assessments you've provided feedback on</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border p-4 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Core Java (Entry Level) (New) | SHL</h3>
                      <p className="text-sm text-muted-foreground">You marked this as helpful • May 5, 2023</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Change
                    </Button>
                  </div>
                </div>
                <div className="border p-4 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Automata - Fix (New) | SHL</h3>
                      <p className="text-sm text-muted-foreground">You marked this as helpful • May 3, 2023</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Change
                    </Button>
                  </div>
                </div>
                <div className="border p-4 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Technology Professional 8.0 Job Focused Assessment | SHL</h3>
                      <p className="text-sm text-muted-foreground">You marked this as not helpful • May 1, 2023</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Change
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
