import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"

export default function Contact() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Contact Us</CardTitle>
          <CardDescription>Get in touch with us through any of the following channels</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="https://www.linkedin.com/in/maneeshmkp/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 border rounded-lg hover:bg-accent transition-colors"
            >
              <Linkedin className="h-6 w-6 mr-4" />
              <div>
                <h3 className="font-medium">LinkedIn</h3>
                <p className="text-sm text-muted-foreground">Connect with us professionally</p>
              </div>
            </Link>

            <Link
              href="https://x.com/ManeeshKum14044"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 border rounded-lg hover:bg-accent transition-colors"
            >
              <Twitter className="h-6 w-6 mr-4" />
              <div>
                <h3 className="font-medium">Twitter</h3>
                <p className="text-sm text-muted-foreground">Follow us for updates</p>
              </div>
            </Link>

            <Link
              href="https://github.com/maneeshmkp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 border rounded-lg hover:bg-accent transition-colors"
            >
              <Github className="h-6 w-6 mr-4" />
              <div>
                <h3 className="font-medium">GitHub</h3>
                <p className="text-sm text-muted-foreground">Check out our open source projects</p>
              </div>
            </Link>

            <Link
              href="mailto:connect.to.maneeshmkp@gmail.com"
              className="flex items-center p-4 border rounded-lg hover:bg-accent transition-colors"
            >
              <Mail className="h-6 w-6 mr-4" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-sm text-muted-foreground">Send us a direct message</p>
              </div>
            </Link>
          </div>

          <div className="mt-8 text-center">
            <h3 className="text-lg font-medium mb-2">We'd love to hear from you!</h3>
            <p className="text-muted-foreground">
              Whether you have questions about our assessment recommendation system, need technical support, or want to
              provide feedback, we're here to help.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
