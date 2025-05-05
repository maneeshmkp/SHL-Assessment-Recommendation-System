import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Terms() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Terms of Service</CardTitle>
          <CardDescription>Last updated: May 5, 2023</CardDescription>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the SHL Assessment Recommendation System ("the Service"), you agree to be bound by
            these Terms of Service. If you do not agree to these terms, please do not use the Service.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            The SHL Assessment Recommendation System provides recommendations for SHL assessments based on job
            descriptions, natural language queries, or job posting URLs. The Service is designed to assist hiring
            managers and HR professionals in selecting appropriate assessments for their hiring needs.
          </p>

          <h2>3. User Accounts</h2>
          <p>
            To access certain features of the Service, you may be required to create an account. You are responsible for
            maintaining the confidentiality of your account information and for all activities that occur under your
            account. You agree to notify us immediately of any unauthorized use of your account.
          </p>

          <h2>4. User Content</h2>
          <p>
            By submitting job descriptions, queries, or other content to the Service, you grant us a non-exclusive,
            worldwide, royalty-free license to use, reproduce, and display such content solely for the purpose of
            providing the Service to you.
          </p>

          <h2>5. Privacy</h2>
          <p>
            Your use of the Service is also governed by our Privacy Policy, which can be found at{" "}
            <a href="/privacy" className="text-brand-600 hover:underline">
              Privacy Policy
            </a>
            .
          </p>

          <h2>6. Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are owned by SHL and are protected by
            international copyright, trademark, patent, trade secret, and other intellectual property laws.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            In no event shall SHL, its officers, directors, employees, or agents be liable for any indirect, incidental,
            special, consequential, or punitive damages arising out of or relating to your use of the Service.
          </p>

          <h2>8. Disclaimer of Warranties</h2>
          <p>
            The Service is provided on an "as is" and "as available" basis without any warranties of any kind, either
            express or implied, including but not limited to the implied warranties of merchantability, fitness for a
            particular purpose, or non-infringement.
          </p>

          <h2>9. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will provide notice of any material changes by
            posting the new Terms on the Service. Your continued use of the Service after such modifications will
            constitute your acknowledgment of the modified Terms.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which SHL
            operates, without regard to its conflict of law provisions.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <a href="mailto:connect.to.maneeshmkp@gmail.com" className="text-brand-600 hover:underline">
              connect.to.maneeshmkp@gmail.com
            </a>
            .
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
