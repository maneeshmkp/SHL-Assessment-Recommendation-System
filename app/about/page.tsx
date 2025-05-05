import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Target, Zap, BarChart } from "lucide-react"

export default function About() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold gradient-text mb-4">About SHL Assessment Recommendation System</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Intelligent matching of job requirements to the perfect assessments
        </p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-lg">
          <p>
            The SHL Assessment Recommendation System is a mechanism or tool designed by SHL (formerly Saville and
            Holdsworth Ltd.), a global talent assessment company, to match individuals or job roles with the most
            appropriate SHL assessments. This system helps employers select the best assessments for hiring,
            development, or talent management by analyzing role requirements and candidate profiles.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center">
              <Target className="h-5 w-5 text-brand-600" />
            </div>
            <CardTitle>Purpose</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              To recommend suitable SHL assessments (like cognitive ability tests, personality tests, situational
              judgment tests, etc.) based on:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-brand-600 mt-0.5 shrink-0" />
                <span>Job role/competency requirements</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-brand-600 mt-0.5 shrink-0" />
                <span>Organizational needs (e.g., high-potential identification, succession planning)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-brand-600 mt-0.5 shrink-0" />
                <span>Candidate level (entry, mid, senior)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-brand-600 mt-0.5 shrink-0" />
                <span>Industry norms</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center">
              <Zap className="h-5 w-5 text-brand-600" />
            </div>
            <CardTitle>How It Works</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Our system uses a sophisticated matching process:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-brand-600 mt-0.5 shrink-0" />
                <span>
                  <strong>Input:</strong> HR professionals or hiring managers provide job descriptions, competency
                  frameworks, or role-specific data.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-brand-600 mt-0.5 shrink-0" />
                <span>
                  <strong>Matching Engine:</strong> The system uses algorithms and SHL's Universal Competency Framework
                  (UCF) to map competencies to appropriate assessments.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-brand-600 mt-0.5 shrink-0" />
                <span>
                  <strong>Output:</strong> It recommends a tailored assessment battery based on your specific needs.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center">
              <BarChart className="h-5 w-5 text-brand-600" />
            </div>
            <CardTitle>Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-brand-600 mt-0.5 shrink-0" />
                <span>Increases objectivity and fairness in hiring</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-brand-600 mt-0.5 shrink-0" />
                <span>Ensures alignment with job-critical competencies</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-brand-600 mt-0.5 shrink-0" />
                <span>Reduces time spent manually selecting assessments</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-brand-600 mt-0.5 shrink-0" />
                <span>Enhances predictive validity for job performance</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center">
              <Target className="h-5 w-5 text-brand-600" />
            </div>
            <CardTitle>Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-brand-600 mt-0.5 shrink-0" />
                <span>Recruitment and selection</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-brand-600 mt-0.5 shrink-0" />
                <span>Leadership development</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-brand-600 mt-0.5 shrink-0" />
                <span>Succession planning</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-brand-600 mt-0.5 shrink-0" />
                <span>Talent benchmarking</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Example Use Case</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg">If you're hiring for a sales manager, the system might recommend:</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-brand-600 mt-0.5 shrink-0" />
              <span>SHL OPQ for assessing interpersonal skills and motivation</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-brand-600 mt-0.5 shrink-0" />
              <span>SHL Verify Numerical Reasoning for data interpretation</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-brand-600 mt-0.5 shrink-0" />
              <span>SJT tailored to leadership/sales scenarios</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
