import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

// Mock blog data - replace with real API fetch in production
const mockBlogs = [
  {
    id: 1,
    title: "The Future of AI in Pharmaceutical Research",
    excerpt: "Exploring how artificial intelligence is revolutionizing drug discovery and personalized medicine in the pharma industry.",
    content: `Artificial Intelligence (AI) is no longer a futuristic concept—it's the backbone of modern pharmaceutical research. At SPARC, we're at the forefront of integrating AI tools to empower students and young professionals in navigating this transformative landscape.

From predictive modeling for drug interactions to accelerating clinical trial simulations, AI is reducing timelines from years to months. Imagine a world where machine learning algorithms sift through millions of compounds to identify potential cures for rare diseases— that's the reality we're building toward.

But it's not just about technology; it's about people. SPARC's workshops and mentorship programs equip learners with hands-on AI skills, bridging the gap between academia and industry. Whether you're a B.Pharm student or a biotech researcher, our community-driven initiatives ensure you're not left behind in this AI revolution.

Join us in exploring ethical AI applications, data privacy in healthcare, and collaborative projects that could shape the next breakthrough in personalized medicine. The future is coded, and it's time to write your chapter.`,
    author: "Dr. Elena Vasquez",
    date: "2025-10-05",
    readTime: "5 min read",
    tags: ["AI", "Pharma", "Research"]
  },
  {
    id: 2,
    title: "Career Pathways in Biotechnology: From Student to Leader",
    excerpt: "A comprehensive guide for life sciences students navigating the biotech job market and building a sustainable career.",
    content: "The biotechnology sector is booming, with opportunities spanning from R&D labs to executive boardrooms...",
    author: "Prof. Raj Patel",
    date: "2025-09-28",
    readTime: "7 min read",
    tags: ["Biotech", "Careers", "Life Sciences"]
  }
];

const BlogDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    const foundBlog = mockBlogs.find(b => b.id.toString() === id);
    setTimeout(() => {
      setBlog(foundBlog || null);
      setLoading(false);
    }, 300);
  }, [id]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-blue-950 to-blue-900 text-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-24 w-24 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-gray-300">Loading blog post...</p>
      </div>
    </div>
  );

  if (!blog) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-blue-950 to-blue-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
        <Link
          to="/blog"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
        >
          Back to Blog
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>{blog.title} | ZaneProEd Blog</title>
        <meta name="description" content={blog.excerpt} />
        <link rel="canonical" href={`https://yourdomain.com/blogdetails/${blog.id}`} />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "${blog.title}",
            "author": { "@type": "Person", "name": "${blog.author}" },
            "publisher": {
              "@type": "Organization",
              "name": "ZaneProEd",
              "logo": { "@type": "ImageObject", "url": "https://yourdomain.com/logo.png" }
            },
            "datePublished": "${blog.date}",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://yourdomain.com/blogdetails/${blog.id}" },
            "description": "${blog.excerpt}",
            "keywords": "${blog.tags.join(", ")}"
          }
        `}</script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-blue-900 text-white relative">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          opacity: 0.2
        }}></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <article className="prose prose-invert mx-auto">
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold">{blog.title}</h1>
              <p className="text-lg text-gray-300 mt-2">{blog.excerpt}</p>
              <div className="flex flex-wrap gap-2 text-sm text-gray-400 mt-2">
                <span>By {blog.author}</span>
                <span>•</span>
                <time dateTime={blog.date}>{new Date(blog.date).toLocaleDateString()}</time>
                <span>•</span>
                <span>{blog.readTime}</span>
              </div>
            </header>

            <Card className="bg-white bg-opacity-0 backdrop-blur-md shadow-lg border border-blue-800 rounded-lg">
              <CardContent className="pt-0">
                <div
                  className="text-gray-200 text-lg leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, '<br />') }}
                />
              </CardContent>
            </Card>

            <footer className="mt-12 text-center">
              <Link to="/blog">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                  ← Back to Blog
                </Button>
              </Link>
            </footer>
          </article>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsPage;