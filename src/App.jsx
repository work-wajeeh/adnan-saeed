import { useState } from 'react'

const ADVOCATE = {
  name: "Adnan Saeed",
  title: "Advocate High Court | Corporate, Litigation & Regulatory Law",
  tagline: "Excellence in Legal Advocacy & Corporate Advisory",
  about: "Managing Partner at A.K.N & Associates, a full-service law practice handling litigation and advisory across corporate, civil, and constitutional matters. Over 14 years of experience representing clients before courts and regulators while advising on compliance, structuring, and commercial contracts.",
  experience: [
    {
      company: "A.K.N & Associates",
      role: "Managing Partner",
      period: "Present",
      details: "Lead a full-service law practice handling litigation and advisory across corporate, civil, and constitutional matters, representing clients before courts and regulators while advising on compliance, structuring, and commercial contracts."
    },
    {
      company: "Millat Industrial Products Pvt. Ltd",
      role: "Legal Advisor & Counsel (On Board)",
      period: "Present",
      details: "Represented the company in multiple labour disputes and provided legal advisory services."
    },
    {
      company: "Zulaikha Textile Mills Limited",
      role: "Legal Advisor & Counsel",
      period: "Present",
      details: "Ongoing advisory and litigation representation."
    },
    {
      company: "Leopard Courier Service",
      role: "Counsel",
      period: "Present",
      details: "Appeared as counsel and assisted in legal proceedings."
    },
    {
      company: "Mukhtar Sons (Pvt.) Limited",
      role: "Legal Advisor",
      period: "Present",
      details: "Provided legal advisory and representation."
    },
    {
      company: "Mukhtar Sons Constructions (Pvt.) Limited",
      role: "Legal Advisor",
      period: "Present",
      details: "Corporate advisory and litigation."
    },
    {
      company: "Mutitex Pvt. Ltd",
      role: "Legal Advisor & Counsel",
      period: "Present",
      details: "Legal advisor and counsel."
    },
    {
      company: "Markazi Anjuman Khuddam-ul-Quran",
      role: "Legal Advisor (On Board)",
      period: "Present",
      details: "Legal advisor and counsel on board."
    },
    {
      company: "Sturcle Pvt. Ltd",
      role: "Legal Advisor",
      period: "Previous",
      details: ""
    },
    {
      company: "Grassroots Pakistan",
      role: "Legal Counsel",
      period: "Previous",
      details: ""
    },
    {
      company: "Rahbar School of Law (RSOL)",
      role: "Visiting Faculty",
      period: "Feb 2023 – Present",
      details: ""
    }
  ],
  education: [
    { degree: "LL.M Commercial Law", school: "School of Law & Policy, UMT", period: "2014 – 2016" },
    { degree: "M.A", school: "University of the Punjab", period: "2010 – 2012" },
    { degree: "LL.B", school: "University of the Punjab", period: "2007 – 2010" }
  ],
  certifications: [
    "International & EU Trade Law – UMT",
    "Introduction to EU Union Law – UMT"
  ],
  memberships: [
    "Advocate (Mem #44741) – Enrolled 2011",
    "Advocate High Court (Mem #24432) – Enrolled 2013",
    "Lahore Tax Bar Association (Mem #A-436) – Since 2016"
  ],
  practiceAreas: [
    { name: "Constitutional Law", desc: "Constitutional petitions before High Courts" },
    { name: "Corporate & Commercial", desc: "Company incorporation (SECP), MoA & AoA, corporate governance, due diligence" },
    { name: "Civil & Criminal Litigation", desc: "Complex disputes before courts and regulators" },
    { name: "Labor & Employment", desc: "Labour disputes, Labour Courts, Service Tribunals" },
    { name: "Consumer Protection", desc: "Consumer rights and protection cases" },
    { name: "Real Estate & Revenue", desc: "Title verification, sale deeds, lease agreements, conveyancing" },
    { name: "Regulatory Compliance", desc: "SECP, environmental and regulatory compliance" },
    { name: "Security & Financial Documentation", desc: "Mortgage agreements, guarantee agreements, and security sharing arrangements" },
    { name: "Intellectual Property", desc: "IP advisory and protection" }
  ],
  contact: {
    email: "adv.adnansaeed@hotmail.com",
    phone: "+92 302 6815007",
    phoneAlt: "+92 333 4191682",
    city: "Lahore, Pakistan"
  }
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#practice', label: 'Practice' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
          <a href="#hero" className="text-base sm:text-lg font-semibold text-gray-900" onClick={() => setMobileMenuOpen(false)}>
            {ADVOCATE.name}
          </a>
          {/* Desktop nav */}
          <div className="hidden sm:flex gap-3 sm:gap-6 text-xs sm:text-sm text-gray-600">
            {navItems.map(item => (
              <a key={item.href} href={item.href} className="hover:text-gray-900 transition-colors whitespace-nowrap">{item.label}</a>
            ))}
          </div>
          {/* Mobile hamburger */}
          <button className="sm:hidden text-gray-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-14 bg-white z-40 sm:hidden">
          <div className="flex flex-col p-6 gap-4 text-lg">
            {navItems.map(item => (
              <a key={item.href} href={item.href} className="text-gray-900 py-2 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>{item.label}</a>
            ))}
          </div>
        </div>
      )}

      {/* Hero */}
      <section id="hero" className="pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-200">
            <img 
              src="/profile.jpg" 
              alt={ADVOCATE.name}
              className="w-full h-full object-cover"
              onError={(e) => {e.target.src='/logo.svg'}}
            />
          </div>
          <p className="text-xs sm:text-sm text-gray-500 mb-4 tracking-wider uppercase">
            {ADVOCATE.title}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-4 sm:mb-6 tracking-tight">
            {ADVOCATE.name}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-10 max-w-xl mx-auto">
            {ADVOCATE.tagline}
          </p>
          <a href="#contact" className="inline-block px-8 py-3 bg-gray-900 text-white text-sm hover:bg-gray-800 transition-colors">
            Get in Touch
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-600 leading-relaxed text-lg">
            {ADVOCATE.about}
          </p>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-light text-gray-900 mb-10">Experience</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {ADVOCATE.experience.map((exp, index) => (
              <div key={index} className={index % 2 === 0 ? "" : ""}>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 h-full flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{exp.company}</h3>
                  <p className="text-gray-700 font-medium">{exp.role}</p>
                  <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                  {exp.details && <p className="text-gray-600 text-sm mt-auto">{exp.details}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-20 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-light text-gray-900 mb-10">Education</h2>
          <div className="space-y-6">
            {ADVOCATE.education.map((edu, index) => (
              <div key={index}>
                <h3 className="text-lg font-medium text-gray-900">{edu.degree}</h3>
                <p className="text-gray-600">{edu.school} · {edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Memberships */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-light text-gray-900 mb-6">Certifications</h2>
            <ul className="space-y-2 text-gray-600">
              {ADVOCATE.certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-light text-gray-900 mb-6">Professional Memberships</h2>
            <ul className="space-y-2 text-gray-600">
              {ADVOCATE.memberships.map((mem, index) => (
                <li key={index}>{mem}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice" className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-light mb-10 text-center">Practice Areas</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {ADVOCATE.practiceAreas.map((area) => (
              <div key={area.name} className="p-4 border border-gray-700">
                <h3 className="text-lg font-medium mb-1">{area.name}</h3>
                <p className="text-gray-400 text-sm">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-light text-gray-900 mb-10">Get in Touch</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              <a href={`mailto:${ADVOCATE.contact.email}`} className="hover:text-gray-900 transition-colors">
                {ADVOCATE.contact.email}
              </a>
            </p>
            <p>{ADVOCATE.contact.phone}</p>
            <p>{ADVOCATE.contact.phoneAlt}</p>
            <p>{ADVOCATE.contact.city}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center text-sm text-gray-500">
          © {new Date().getFullYear()} {ADVOCATE.name}. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App