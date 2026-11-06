"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import ExternalLink from "../components/ExternalLink";

export default function Home() {
  const [tab, setTab] = useState("background");

  return (
    <>
      <Navbar activeTab={tab} onTabChange={setTab} />

      {/* ───────── BACKGROUND (ME) ───────── */}
      {tab === "background" && (
        <>
          <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-8 text-center">
            <div className="glass-card p-8 sm:p-10">
              <div className="mx-auto w-60 h-60 sm:w-60 sm:h-60 rounded-full border-4 border-[var(--primary)] overflow-hidden shadow-lg mb-5 bg-slate-200 dark:bg-slate-700">
                <img
                  src="/profile.jpg"
                  alt="Josh Marcus L. Amahan"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="font-script text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight mb-2">
                Josh Marcus L. Amahan
              </h1>
              <p className="text-[var(--muted)] text-base sm:text-lg mb-1">
                Bachelor of Science in Information Systems · 3rd Year
              </p>
              <p className="text-sm text-[var(--muted)] max-w-xl mx-auto">
                Mapúa Malayan Colleges Mindanao · Web Development · System Design · HCI · Project Management · Innovation New Technologies
              </p>
            </div>
          </header>

          <Section id="education" title="Educational Background">
            <ul className="space-y-3 text-left max-w-2xl mx-auto">
              <li className="flex gap-3">
                <span className="text-[var(--primary)] font-bold mt-0.5">•</span>
                <span>
                  <strong>Junior High School (Grades 7-9)</strong>
                  <br />
                  <span className="text-[var(--muted)]">
                    Soli Deo Gloria Christian Academy (2011–2021)
                  </span>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--primary)] font-bold mt-0.5">•</span>
                <span>
                  <strong>Junior High School (Grade 10)</strong>
                  <br />
                  <span className="text-[var(--muted)]">
                    Green Meadow Christian Academy (2021–2022)
                  </span>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--primary)] font-bold mt-0.5">•</span>
                <span>
                  <strong>Senior High School (Grade 11–12)</strong>
                  <br />
                  <span className="text-[var(--muted)]">
                    Mapúa Malayan Colleges Mindanao (2022–2024)
                  </span>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--primary)] font-bold mt-0.5">•</span>
                <span>
                  <strong>College (1st Year – 3rd Year)</strong>
                  <br />
                  <span className="text-[var(--muted)]">
                    Mapúa Malayan Colleges Mindanao (2024–Present)
                  </span>
                </span>
              </li>
            </ul>
          </Section>

          <Section id="achievements" title="Achievements / Certifications">
            <ul className="space-y-2 text-left max-w-xl mx-auto">
              <li className="flex gap-3">
                <span className="text-[var(--primary)] font-bold">•</span>
                MMCM High School – 11-Cohl 2nd Honors
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--primary)] font-bold">•</span>
                MMCM High School – 12-Knuth 2nd Honors
              </li>
            </ul>
          </Section>

          <Section id="previous-projects" title="Earlier Projects">
            <ul className="space-y-2 text-left max-w-xl mx-auto">
              <li className="flex gap-3">
                <span className="text-[var(--primary)] font-bold">•</span>
                Trash Rush (Documentation) – Computer Programming Concepts 1
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--primary)] font-bold">•</span>
                2Fast2FuriousGarage POS System – Computer Programming Concepts 2 & Object Oriented Programming
              </li>
            </ul>
          </Section>

          <Section id="hobbies" title="Hobbies">
            <ul className="space-y-2 text-left max-w-xl mx-auto">
              <li className="flex gap-3">
                <span className="text-[var(--primary)] font-bold">•</span>
                Passion for Classic Cars
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--primary)] font-bold">•</span>
                Travelling / Road Tripping
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--primary)] font-bold">•</span>
                Listening to Nostalgic Songs
              </li>
            </ul>
          </Section>
        </>
      )}

      {/* ───────── 2ND YEAR ───────── */}
      {tab === "second" && (
        <>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-4 text-center">
            <h2 className="font-script text-2xl sm:text-3xl font-normal tracking-tight">
              2nd Year
            </h2>
            <p className="text-[var(--muted)] text-sm mt-1">
              Web Programming · Fundamentals of IS · System Analysis &amp; Design · HCI · CCIS Innovision
            </p>
          </div>

          {/* Web Programming */}
          <Section id="web-programming" title="Web Programming Projects">
            <div className="grid gap-3 max-w-2xl mx-auto">
              {[
                {
                  href: "https://marcusamahan97.github.io/AmahanEnterprises_M1-FA2/",
                  label: "M1|FA2 – Landing Page Using CSS",
                },
                {
                  href: "https://marcusamahan97.github.io/AMAHAN-JavaScript_M1-FA3/",
                  label: "M1|FA3 – JavaScript MPs",
                },
                {
                  href: "https://amahanwebappdemo1.vercel.app/",
                  label: "M1|FA4 – Github to Vercel",
                },
                {
                  href: "https://rideinstyleusousoamahan.vercel.app/",
                  label: "M1|FA5 – SEO Fundamentals",
                },
                {
                  href: "https://it-103-m1-exam-part3-amahan.vercel.app/",
                  label: "M1 Summative Exam – Part 3",
                },
              ].map((item) => (
                <div
                  key={item.href}
                  className="flex items-center gap-3 p-3.5 rounded-lg bg-white/40 dark:bg-slate-800/40 border border-[var(--card-border)] hover:border-[var(--primary)]/40 transition-colors"
                >
                  <span className="text-[var(--primary)] text-lg shrink-0">▸</span>
                  <ExternalLink href={item.href}>{item.label}</ExternalLink>
                </div>
              ))}
            </div>
          </Section>

          {/* IT103 Summative */}
          <Section id="it103-summative" title="IT103 Summative Assessment Project">
            <div className="max-w-xl mx-auto">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white/40 dark:bg-slate-800/40 border border-[var(--card-border)] hover:border-[var(--primary)]/40 transition-colors">
                <span className="text-[var(--primary)] text-lg shrink-0">▸</span>
                <ExternalLink href="https://alquino-amahan.vercel.app/login.html">
                  M2 Summative Exam – DERMEDGE POS
                </ExternalLink>
              </div>
            </div>
          </Section>

          {/* IS100 */}
          <Section id="is100" title="IS100 M3 Final Project">
            <div className="space-y-8">
              <ProjectCard title="Digital Poster">
                <div className="rounded-xl overflow-hidden border border-[var(--card-border)] bg-slate-100 dark:bg-slate-800 min-h-[200px] flex items-center justify-center">
                  <img
                    src="/AMAHAN & FLORES - Digital Poster (IS 100).png"
                    alt="Digital Poster – IS 100"
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                </div>
              </ProjectCard>

              <ProjectCard title="Digital Report">
                <div className="pdf-embed">
                  <embed
                    src="/AMAHAN & FLORES - Digital Report (IS 100).pdf"
                    type="application/pdf"
                  />
                </div>
              </ProjectCard>

              <ProjectCard title="Video Demonstration">
                <div className="video-wrapper shadow-lg">
                  <iframe
                    src="https://www.youtube.com/embed/VFLKGN9e5p8"
                    title="IS100 Video Demonstration"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </ProjectCard>
            </div>
          </Section>

          {/* System Analysis & Design */}
          <Section id="sad" title="System Analysis & Design">
            <div className="space-y-8">
              <ProjectCard title="Kuya Weng's Digital Kitchen Order Monitoring and Coordination System">
                <div className="space-y-4 text-left text-[15px] leading-relaxed">
                  <p>
                    <strong className="text-[var(--primary)]">Brief Description:</strong>{" "}
                    A web-based solution developed for Kuya Weng&apos;s Restaurant to
                    enhance communication and coordination between cashiers and kitchen
                    staff.
                  </p>
                  <p>
                    <strong className="text-[var(--primary)]">Project Description:</strong>{" "}
                    The Digital Kitchen Order Monitoring and Coordination System
                    streamlines restaurant operations by enabling real-time order
                    tracking, digital dispatching, ticket number assignment, and
                    centralized status updates. By replacing manual order slips and
                    verbal communication, the system reduces delays and missed orders
                    while improving workflow efficiency. Through its dashboards, staff
                    can monitor orders seamlessly, ensuring faster service and better
                    customer satisfaction. Ultimately, the platform strengthens
                    coordination between front-of-house and kitchen teams, delivering a
                    more reliable and efficient dining experience.
                  </p>
                  <div className="pt-1">
                    <ExternalLink href="https://team-dand-msad.vercel.app/">
                      Order Status Page (Home Page)
                    </ExternalLink>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-center mb-3 text-[15px]">
                    Learn more about the system with the video below
                  </h4>
                  <div className="video-wrapper shadow-lg">
                    <iframe
                      src="https://www.youtube.com/embed/YR-sL2s_Rbw"
                      title="Kuya Weng's System Demo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>
              </ProjectCard>

              <ProjectCard title="TEAM D&M Group Portfolio">
                <div className="text-center">
                  <ExternalLink href="https://drive.google.com/file/d/1oVi5xM5gvZbRT9PyqwsBslvcrx-0DcyM/view?usp=sharing">
                    Access Group Portfolio
                  </ExternalLink>
                </div>
              </ProjectCard>

              <ProjectCard title="CCIS Innovision 2026 Award">
                <div className="rounded-xl overflow-hidden border border-[var(--card-border)] bg-slate-100 dark:bg-slate-800 min-h-[180px] flex items-center justify-center">
                  <img
                    src="/Kuya Wengs.jpg"
                    alt="CCIS Innovision Certificate – Kuya Weng's"
                    className="w-full h-auto max-h-[60vh] object-contain"
                  />
                </div>
                <p className="text-center font-semibold mt-3">
                  Kuya Weng&apos;s – Best System Design
                </p>
              </ProjectCard>
            </div>
          </Section>

          {/* HCI */}
          <Section id="hci" title="Human Computer Interaction">
            <div className="space-y-8">
              <ProjectCard title="Fellowship Hub">
                <div className="space-y-4 text-left text-[15px] leading-relaxed">
                  <p>
                    <strong className="text-[var(--primary)]">Brief Description:</strong>{" "}
                    A web and mobile-based platform engineered to automate
                    administrative meeting tasks using modern artificial intelligence
                    and fast verification tracking.
                  </p>
                  <p>
                    <strong className="text-[var(--primary)]">Project Description:</strong>{" "}
                    Fellowship Hub streamlines attendance monitoring and meeting
                    documentation through secure QR code scanning, real-time
                    speech-to-text transcription, automated AI-generated meeting
                    summaries, and a centralized record management dashboard.
                  </p>
                  <div className="pt-1">
                    <ExternalLink href="https://fellowshiphub.vercel.app/login">
                      Access Fellowship Hub
                    </ExternalLink>
                  </div>
                </div>
              </ProjectCard>

              <ProjectCard title="Input and Interaction">
                <div className="pdf-embed">
                  <embed
                    src="/01 Coursera - Input and Interaction.pdf"
                    type="application/pdf"
                  />
                </div>
              </ProjectCard>

              <ProjectCard title="Introduction to User Experience Design">
                <div className="pdf-embed">
                  <embed
                    src="/02 Coursera - Introduction to User Experience Design.pdf"
                    type="application/pdf"
                  />
                </div>
              </ProjectCard>
            </div>
          </Section>

          {/* CCIS Innovision */}
          <Section id="ccis" title="CCIS Innovision 2026">
            <div className="space-y-8">
              <ProjectCard title="CCIS Innovision 2026 Award">
                <div className="rounded-xl overflow-hidden border border-[var(--card-border)] bg-slate-100 dark:bg-slate-800 min-h-[180px] flex items-center justify-center">
                  <img
                    src="/Kuya Wengs.jpg"
                    alt="CCIS Innovision Award"
                    className="w-full h-auto max-h-[60vh] object-contain"
                  />
                </div>
              </ProjectCard>

              <ProjectCard title="CCIS Innovision 2026 EventFlow Certificate">
                <div className="pdf-embed">
                  <embed
                    src="/CCIS Innovision 2026 EventFlow Certificate - Amahan.pdf"
                    type="application/pdf"
                  />
                </div>
              </ProjectCard>

              <ProjectCard title="CCIS Innovision 2026 Participation">
                <div className="rounded-xl overflow-hidden border border-[var(--card-border)] bg-slate-100 dark:bg-slate-800 min-h-[180px] flex items-center justify-center">
                  <img
                    src="/CCIS Innovision 2026 - Amahan.jpg"
                    alt="CCIS Innovision Participation"
                    className="w-full h-auto max-h-[60vh] object-contain"
                  />
                </div>
              </ProjectCard>
            </div>
          </Section>
        </>
      )}

      {/* ── 3RD YEAR ── */}
    {tab === "third" && (
      <>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-4 text-center">
          <h2 className="font-script text-2xl sm:text-3xl font-normal tracking-tight">
            3rd Year (Digital Portfolio)
          </h2>
          <p className="text-[var(--muted)] text-sm mt-1">
            IS Innovation and New Technologies · IS Project Management
          </p>
        </div>

        {/* ========== IS INNOVATION ========== */}
        <Section id="is-innovation" title="IS Innovation and New Technologies (IS113)">
          <div className="space-y-8">

            {/* Course & Student Information */}
            <ProjectCard title="Course and Student Information">
              <div className="text-left max-w-lg mx-auto space-y-2 text-[15px]">
                <p><strong>Student Name:</strong> Josh Marcus L. Amahan</p>
                <p><strong>Student Number:</strong> 2022110920</p>
                <p><strong>Course Code / Section:</strong> IS113 / A323</p>
                <p><strong>Term:</strong> 1st Term – A.Y. 2026–2027</p>
              </div>
            </ProjectCard>

            {/* Week 4 */}
            <ProjectCard title="Organizational Problem Analysis (Week 4)">
              <div className="pdf-embed">
                <embed
                  src="/Amahan_Week4_Organizational_Problem_Analysis.pdf"
                  type="application/pdf"
                />
              </div>
            </ProjectCard>

            {/* Week 7 */}
            <ProjectCard title="Technology Evaluation Matrix (Week 7)">
              <div className="pdf-embed">
                <embed
                  src="/Amahan_Week7_Technology_Evaluation_Matrix.pdf"
                  type="application/pdf"
                />
              </div>
            </ProjectCard>

            {/* Week 8 – Literature Review */}
            <ProjectCard title="Literature Review Matrix (Week 8)">
              <div className="pdf-embed">
                <embed
                  src="/Amahan_Week8_Responsible_Technology_Adoption.pdf"
                  type="application/pdf"
                />
              </div>
            </ProjectCard>

            {/* Week 8 – Conceptual Framework */}
            <ProjectCard title="Conceptual Framework (Week 8)">
              <div className="pdf-embed">
                <embed
                  src="/FlowBikes_Module_2_Summative_Assessment.pdf"
                  type="application/pdf"
                />
              </div>
            </ProjectCard>

            {/* Week 10 */}
            <ProjectCard title="Digital Innovation Strategy Analysis (Week 10)">
              <div className="pdf-embed">
                <embed
                  src="/MAAFF_IS113_Week10_Digital_Innovation_Strategy_FlowBikes.pdf"
                  type="application/pdf"
                />
              </div>
            </ProjectCard>

            {/* Final Research Paper */}
            <ProjectCard title="Final Digital Innovation Research Paper">
              <div className="pdf-embed">
                <embed
                  src="/IS113_MAAFF_FinalResearchPaper.pdf"
                  type="application/pdf"
                />
              </div>
            </ProjectCard>

            {/* Executive Presentation */}
            <ProjectCard title="Executive Innovation Presentation">
              <div className="text-center space-y-3">
                <p className="text-sm text-[var(--muted)]">
                  PowerPoint presentation – open or download to view.
                </p>
                <a
                  href="/IS113_MAAFF_FinalPresentation.ppt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-semibold text-sm transition-all"
                >
                  Open / Download Presentation
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            </ProjectCard>

            {/* Coursera Certificate */}
            <ProjectCard title="Coursera Completion Evidence">
              <div className="space-y-6">
                {/* Image */}
                <div className="rounded-xl overflow-hidden border border-[var(--card-border)] bg-slate-100 dark:bg-slate-800 min-h-[180px] flex items-center justify-center">
                  <img
                    src="/IS113_Amahan_Coursera_Certificate.jpg"
                    alt="Coursera Certificate – IS113"
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                </div>

                {/* PDF */}
                <div className="pdf-embed">
                  <embed
                    src="/IS113_Amahan_Coursera_Evidence.pdf"
                    type="application/pdf"
                  />
                </div>
              </div>
            </ProjectCard>

            {/* Coursera Application Brief */}
            <ProjectCard title="Coursera Application Brief">
              <div className="pdf-embed">
                <embed
                  src="/IS113_Amahan_Coursera_Application_Brief.pdf"
                  type="application/pdf"
                />
              </div>
            </ProjectCard>

            {/* Reflection */}
            <ProjectCard title="Course Reflection">
              <div className="pdf-embed">
                <embed
                  src="/IS113_Amahan_Course_Reflection.pdf"
                  type="application/pdf"
                />
              </div>
            </ProjectCard>

          </div>
        </Section>

        {/* ========== PROJECT MANAGEMENT (placeholder for now) ========== */}
        <Section id="is-pm" title="IS Project Management (Lab and Lecture)">
          <div className="space-y-8">
            <ProjectCard title="Individual Digital Course Portfolio">
              <div className="pdf-embed">
                <embed
                  src="/IS132-1L_FlowBikes_DigitalCoursePortfolio_Amahan.pdf"
                  type="application/pdf"
                />
              </div>
            </ProjectCard>
          </div>
        </Section>
      </>
    )}

      <footer className="max-w-5xl mx-auto px-4 sm:px-6 pb-12 pt-4 text-center">
        <div className="glass-card py-5">
          <p className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} Josh Marcus L. Amahan · Built with Next.js
            & Tailwind CSS
          </p>
        </div>
      </footer>
    </>
  );
}
