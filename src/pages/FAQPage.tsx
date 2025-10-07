import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-12 border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4 tracking-tight">FAQs</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 space-y-8">
            {faqList.map((faq, index) => (
              <Card key={index} className="border border-gray-300 bg-white rounded-xl shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-gray-800 text-base leading-relaxed">{faq.answer}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const faqList = [
  {
    question: "What is SPARC in pharmacy and healthcare education?",
    answer:
      "SPARC is an independent, student-led society focusing on pharmacy career advancement, research, and skill development. It connects healthcare and life science students with mentors and industry experts.",
  },
  {
    question: "Is SPARC associated with a particular college or university?",
    answer:
      "No. SPARC is not tied to any single college or university. It’s an open, student-driven platform for learners from pharmacy, life sciences, paramedical, and allied fields.",
  },
  {
    question: "Who can join SPARC?",
    answer:
      "Anyone studying or working in pharmacy, paramedical, life sciences, biotechnology, or related fields, including engineering students exploring healthcare tech.",
  },
  {
    question: "What are the benefits of joining SPARC?",
    answer:
      "SPARC offers access to training, mentorship, research, and career opportunities, helping students develop job-ready skills and build networks in pharma and healthcare.",
  },
  {
    question: "Does SPARC charge any membership fee?",
    answer:
      "Currently, membership is free. Some advanced workshops or certifications may include nominal charges.",
  },
  {
    question: "How does SPARC support career advancement?",
    answer:
      "SPARC bridges academia and industry through real-world exposure, internships, mentorship, and job readiness programs.",
  },
  {
    question: "Can non-pharmacy students join SPARC?",
    answer:
      "Yes. SPARC is interdisciplinary and welcomes students from biotechnology, biomedical, paramedical, and engineering backgrounds.",
  },
  {
    question: "How can I participate in SPARC activities?",
    answer:
      "Join online workshops, contribute blogs or case studies, collaborate on research, and network with global professionals.",
  },
  {
    question: "Why choose SPARC over other student associations?",
    answer:
      "SPARC is independent, global, and career-focused, emphasizing real skill development, research, and professional networking.",
  },
  {
    question: "How can I stay updated with SPARC events and opportunities?",
    answer:
      "Follow SPARC on LinkedIn, WhatsApp, and Telegram, and subscribe to the official SPARC newsletter for updates.",
  },
];

export default FAQPage;