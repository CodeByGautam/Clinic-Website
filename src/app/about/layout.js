"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  BookOpen, 
  Building2, 
  Target, 
  Users, 
  Images, 
  Cpu, 
  MessageSquare, 
  HelpCircle,
  ChevronRight,
  Sparkles
} from "lucide-react";

const navItems = [
  { href: "/about", label: "Overview", icon: Sparkles },
  { href: "/about/story", label: "Our Story", icon: BookOpen },
  { href: "/about/clinics", label: "Our Clinics", icon: Building2 },
  { href: "/about/approach", label: "Our Approach", icon: Target },
  { href: "/about/doctors", label: "Our Doctors", icon: Users },
  { href: "/about/tour", label: "Clinic Tour", icon: Images },
  { href: "/about/technology", label: "Technology", icon: Cpu },
  { href: "/about/testimonials", label: "Testimonials", icon: MessageSquare },
  { href: "/about/faq", label: "FAQ", icon: HelpCircle },
];

export default function AboutLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-[#00A651] to-[#0077C8] py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">About Us</h1>
          <p className="text-white/80">Discover AyuMed Clinic - Where Ancient Wisdom Meets Modern Science</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:w-64 flex-shrink-0">
            <nav className="sticky top-24 bg-[#F7FAFC] rounded-2xl p-4">
              <ul className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                          isActive
                            ? "bg-[#00A651] text-white shadow-lg"
                            : "text-gray-600 hover:bg-white hover:shadow-md"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                        {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* CTA Card */}
              <div className="mt-6 p-4 bg-gradient-to-br from-[#00A651]/10 to-[#0077C8]/10 rounded-xl">
                <p className="text-sm text-gray-600 mb-3">Explore our services and find the perfect treatment for you.</p>
                <Link
                  href="/appointment"
                  className="block w-full text-center bg-[#00A651] text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  Book Appointment
                </Link>
              </div>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
