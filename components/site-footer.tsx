import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold gradient-text">SHL Assessment</h3>
            <p className="text-sm text-muted-foreground">
              Intelligent assessment recommendations for better hiring decisions.
            </p>
            <div className="flex space-x-3">
              <Link href="https://www.linkedin.com/in/maneeshmkp/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-brand-600" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://x.com/ManeeshKum14044" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-brand-600" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://github.com/maneeshmkp" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 text-muted-foreground hover:text-brand-600" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="mailto:connect.to.maneeshmkp@gmail.com">
                <Mail className="h-5 w-5 text-muted-foreground hover:text-brand-600" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-brand-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-brand-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-brand-600">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-brand-600">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-brand-600">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-brand-600">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-brand-600">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-brand-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-brand-600">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SHL Assessment Recommendation System. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">Designed and developed with ❤️</p>
        </div>
      </div>
    </footer>
  )
}
