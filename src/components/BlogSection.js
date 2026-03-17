"use client";

import Image from "next/image";

export default function BlogSection() {
  const blogPosts = [
    {
      title: "5 Essential Skincare Tips for Glowing Skin",
      excerpt: "Discover the daily habits that can transform your skin health and give you a radiant, youthful appearance.",
      category: "Skincare",
      readTime: "5 min read",
      date: "Mar 8, 2024",
    },
    {
      title: "Understanding Hair Loss: Causes and Solutions",
      excerpt: "Learn about the common causes of hair loss and the most effective treatments available today.",
      category: "Hair Care",
      readTime: "7 min read",
      date: "Mar 5, 2024",
    },
    {
      title: "The Ultimate Guide to Acne Treatment",
      excerpt: "Everything you need to know about treating acne effectively and preventing future breakouts.",
      category: "Acne",
      readTime: "6 min read",
      date: "Mar 1, 2024",
    },
  ];

  return (
    <section id="blog" className="py-24 bg-[#F7FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="inline-block px-4 py-2 bg-[#00A651]/10 text-[#00A651] rounded-full text-sm font-semibold mb-4">
              Health Blog
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B0F19] mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-xl">
              Expert insights and tips from our dermatologists to help you maintain healthy skin and hair
            </p>
          </div>
          <button className="mt-6 md:mt-0 px-6 py-3 border-2 border-[#0B0F19] text-[#0B0F19] rounded-full font-semibold hover:bg-[#0B0F19] hover:text-white transition-all duration-300">
            View All Articles
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-[#00A651]/10 to-[#0077C8]/10 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#00A651]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-[#00A651]">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0B0F19] mb-3 group-hover:text-[#0077C8] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <button className="inline-flex items-center gap-2 text-[#00A651] font-semibold hover:gap-3 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
