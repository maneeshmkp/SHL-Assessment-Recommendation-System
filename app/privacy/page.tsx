import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Privacy() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Privacy Policy</CardTitle>
          <CardDescription>Last updated: May 5, 2023</CardDescription>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <h2>1. Introduction</h2>
          <p>
            This Privacy Policy explains how the SHL Assessment Recommendation System ("we", "our", or "us") collects,
            uses, and discloses your information when you use our service. We are committed to protecting your privacy
            and ensuring the security of your personal information.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We collect the following types of information:</p>
          <ul>
            <li>
              <strong>Account Information:</strong> When you create an account, we collect your name, email address, and
              password.
            </li>
            <li>
              <strong>Usage Information:</strong> We collect information about how you use our service, including your
              search queries, job descriptions submitted, and assessment recommendations viewed.
            </li>
            <li>
              <strong>Feedback Information:</strong> We collect feedback you provide on assessment recommendations.
            </li>
            <li>
              <strong>Device Information:</strong> We collect information about the device you use to access our
              service, including IP address, browser type, and operating system.
            </li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use your information for the following purposes:</p>
          <ul>
            <li>To provide and improve our service</li>
            <li>To personalize your experience</li>
            <li>To communicate with you about your account or our service</li>
            <li>To analyze usage patterns and improve our recommendation algorithms</li>
            <li>To ensure the security of our service</li>
          </ul>

          <h2>4. Information Sharing and Disclosure</h2>
          <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
          <ul>
            <li>With service providers who help us operate our service</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights, privacy, safety, or property</li>
            <li>In connection with a business transfer, such as a merger or acquisition</li>
          </ul>

          <h2>5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against
            unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>6. Your Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul>
            <li>The right to access your personal information</li>
            <li>The right to correct inaccurate information</li>
            <li>The right to delete your personal information</li>
            <li>The right to restrict or object to processing</li>
            <li>The right to data portability</li>
          </ul>

          <h2>7. Cookies and Similar Technologies</h2>
          <p>
            We use cookies and similar technologies to collect information about your browsing activities and to
            remember your preferences. You can manage your cookie preferences through your browser settings.
          </p>

          <h2>8. Children's Privacy</h2>
          <p>
            Our service is not intended for children under the age of 16. We do not knowingly collect personal
            information from children under 16.
          </p>

          <h2>9. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last updated" date.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{" "}
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
