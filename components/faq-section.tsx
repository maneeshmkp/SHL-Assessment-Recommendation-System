"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is the SHL Assessment Recommendation System?",
    answer:
      "The SHL Assessment Recommendation System is an intelligent tool that helps hiring managers find the most appropriate SHL assessments for their specific job roles and requirements. It uses advanced semantic search and AI to match job descriptions or queries with relevant assessments from SHL's catalog.",
  },
  {
    question: "How accurate are the assessment recommendations?",
    answer:
      "Our system achieves a Mean Recall@3 of 0.72 and MAP@3 of 0.68 on our test dataset, indicating high accuracy in finding relevant assessments. The system continuously improves based on user feedback and new data.",
  },
  {
    question: "Can I use my existing job descriptions?",
    answer:
      "Yes! You can paste your existing job descriptions directly into our system, and it will analyze the text to identify key requirements and match them with appropriate assessments.",
  },
  {
    question: "How long does it take to get recommendations?",
    answer:
      "Recommendations are typically generated within seconds. The system processes your query or job description and immediately returns the most relevant assessments.",
  },
  {
    question: "Are the recommendations personalized to my company?",
    answer:
      "The system provides recommendations based on the specific requirements in your query or job description. As you use the system more and provide feedback, the recommendations become increasingly tailored to your company's needs.",
  },
  {
    question: "Can I save my searches for future reference?",
    answer:
      "Yes, registered users can save their searches and results for future reference. This makes it easy to revisit and compare different assessment options over time.",
  },
  {
    question: "How do I provide feedback on recommendations?",
    answer:
      "Each recommendation includes thumbs up/down buttons that allow you to indicate whether the assessment was helpful for your needs. This feedback helps improve future recommendations.",
  },
  {
    question: "Is there a limit to how many searches I can perform?",
    answer:
      "Standard accounts can perform up to 50 searches per month. Enterprise accounts have unlimited searches. Contact us for more information about enterprise plans.",
  },
]

export function FAQSection() {
  return (
    <div className="py-12 bg-background">
      <div className="container max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold gradient-text">Frequently Asked Questions</h2>
          <p className="text-muted-foreground mt-2">
            Find answers to common questions about the SHL Assessment Recommendation System
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
