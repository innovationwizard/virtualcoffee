import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-brand-text">
      <header className="border-b border-gray-100">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
          <div className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-dark">
            Virtual Coffee
          </div>
          <nav className="hidden gap-8 text-sm font-semibold text-brand-dark md:flex">
            <a href="#home" className="hover:text-brand-primary">
              Home
            </a>
            <a href="#about" className="hover:text-brand-primary">
              About
            </a>
            <a href="#community" className="hover:text-brand-primary">
              Community
            </a>
            <a href="#testimonials" className="hover:text-brand-primary">
              Testimonials
            </a>
            <a href="#blog" className="hover:text-brand-primary">
              Blog
            </a>
            <a href="#contact" className="hover:text-brand-primary">
              Contact
            </a>
          </nav>
          <Link
            href="/login"
            className="rounded-full bg-brand-primary px-5 py-2 text-xs font-bold uppercase text-white shadow-sm transition hover:bg-brand-accent"
          >
            Sign up
          </Link>
        </div>
      </header>

      <section
        id="home"
        className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center"
      >
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-primary">
            Why Choose Us
          </p>
          <h1 className="text-4xl font-bold leading-tight text-brand-dark md:text-6xl">
            Home barista skill development in just 5 days
          </h1>
          <p className="max-w-xl text-base text-gray-600 md:text-lg">
            Step-by-step lessons, community support, and practical drills that
            make better espresso a daily habit.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/login"
              className="rounded-full bg-brand-primary px-7 py-3 text-sm font-bold text-white shadow-md transition hover:bg-brand-accent"
            >
              Sign up
            </Link>
            <a
              href="#about"
              className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-dark hover:text-brand-primary"
            >
              Learn more about us
            </a>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-gray-50">
          <Image
            src="/images/Espresso-101-Cover.jpg"
            alt="Home Barista Course cover"
            width={640}
            height={800}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </section>

      <section
        id="about"
        className="mx-auto grid w-full max-w-6xl gap-10 px-6 pb-20 md:grid-cols-[0.9fr_1.1fr] md:items-center"
      >
        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src="/images/pexels-photo-373639-373639-768x512.jpg"
            alt="Barista pouring espresso"
            width={720}
            height={520}
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-4 right-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-brand-dark shadow-sm">
            03:10
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-brand-dark md:text-4xl">
            We&apos;ve trained world class baristas and coffee shop owners. Now
            we want to train you.
          </h2>
          <p className="text-base text-gray-600">
            For over 25 years Bellissimo Coffee Advisors has consulted and
            trained coffee business owners and their teams. For the first time
            ever, we&apos;re bringing our knowledge to your home. We believe
            everyone should be able to enjoy great coffee.
          </p>
          <a
            href="#course"
            className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-brand-dark hover:text-brand-primary"
          >
            Learn more about us
          </a>
        </div>
      </section>

      <section
        id="course"
        className="mx-auto w-full max-w-6xl space-y-10 px-6 pb-20"
      >
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-primary">
              Our Course
            </p>
            <h2 className="text-3xl font-bold text-brand-dark md:text-4xl">
              Home Barista Course
            </h2>
          </div>
          <span className="text-2xl font-bold text-brand-dark">$79</span>
        </div>

        <div className="grid gap-8 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <p className="text-base text-gray-600">
              Discover your own perfect coffee routine and become the master of
              your morning cup.
            </p>
            <Link
              href="/login"
              className="inline-flex rounded-full bg-brand-primary px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-brand-accent"
            >
              Explore the course
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/kayla-phaneuf-gQbHr55OTJI-unsplash-scaled-1-300x300.jpg"
              alt="Coffee lesson preview"
              width={420}
              height={420}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-primary">
              5-Day Course
            </p>
            <h3 className="text-2xl font-bold text-brand-dark">
              What you&apos;ll learn
            </h3>
            <div className="space-y-5 text-base text-gray-600">
              <div>
                <h4 className="text-lg font-semibold text-brand-dark">
                  Coffee Theory
                </h4>
                <p>
                  Our course isn&apos;t just about technique. After day 1,
                  you&apos;ll understand what few others do: what coffee really
                  is and how brewing it works at the most fundamental level.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-brand-dark">
                  Brewing Coffee by Hand
                </h4>
                <p>
                  We start brewing actual coffee with manual techniques to give
                  you more ways to experiment on your own.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-brand-dark">
                  Your Home Bar
                </h4>
                <p>
                  As we prepare to pull espresso, we help you figure out how to
                  set up your home bar and understand espresso on a new level.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-brand-dark">
                  Pulling Cafe Quality Espresso
                </h4>
                <p>
                  For the first time ever, we&apos;ve distilled our industry
                  training techniques for the home brewer. You&apos;ll get our
                  professional guidance to brew cafe quality at home.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-brand-dark">
                  Milk and Latte Art
                </h4>
                <p>
                  The last day of the course is where you prove your mastery.
                  We move step-by-step to teach you how to steam perfect milk
                  and draw latte art just like a professional barista.
                </p>
              </div>
            </div>
            <p className="text-base font-semibold text-brand-dark">
              After just 5 days, a couple hours of free time per day, you&apos;ll
              be the one friends come to for coffee advice.
            </p>
            <Link
              href="/login"
              className="inline-flex rounded-full bg-brand-primary px-7 py-3 text-sm font-bold text-white shadow-md transition hover:bg-brand-accent"
            >
              Enroll now
            </Link>
          </div>
          <div className="space-y-6 rounded-3xl border border-gray-100 bg-gray-50 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-primary">
              About the course
            </p>
            <div className="space-y-4 text-sm font-semibold text-brand-dark">
              <div className="rounded-2xl border border-gray-200 bg-white px-4 py-3">
                Comprehensive
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white px-4 py-3">
                Self-paced
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white px-4 py-3">
                Created by unbiased experts
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/Dillon-1.png"
                alt="Instructor portrait"
                width={380}
                height={380}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="mx-auto w-full max-w-6xl space-y-10 px-6 pb-20"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-primary">
          Testimonials
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
            <p className="text-5xl text-brand-primary">“</p>
            <p className="mt-4 text-base text-gray-600">
              &quot;I never thought I&apos;d be the &lsquo;office barista,&rsquo;
              but thanks to this course, I&apos;m impressing my coworkers with
              perfect espressos and frothy lattes. My mornings are more
              caffeinated and fun than ever!&quot;
            </p>
            <p className="mt-6 text-sm font-semibold text-brand-dark">Aaron L</p>
          </div>
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
            <p className="text-5xl text-brand-primary">“</p>
            <p className="mt-4 text-base text-gray-600">
              &quot;Before this course, I could barely use my espresso machine.
              Now, I&apos;m making cappuccinos and lattes at home that rival my
              favorite café. VirtualCoffee.com gave me the skills I needed to
              master my morning routine!&quot;
            </p>
            <p className="mt-6 text-sm font-semibold text-brand-dark">Abbey S</p>
          </div>
        </div>
      </section>

      <section
        id="community"
        className="mx-auto w-full max-w-6xl space-y-8 px-6 pb-20"
      >
        <div className="grid gap-8 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-brand-dark">
              Don&apos;t miss our future updates! Get subscribed today!
            </h3>
            <p className="text-sm text-gray-600">
              Join the community and be the first to hear about new lessons,
              events, and barista tips.
            </p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Your mail here"
              className="flex-1 rounded-full border border-gray-200 px-4 py-3 text-sm focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
            />
            <button
              type="submit"
              className="rounded-full bg-brand-primary px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-brand-accent"
            >
              Subscribe now
            </button>
          </form>
        </div>
      </section>

      <footer
        id="contact"
        className="border-t border-gray-100 bg-white py-10"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-dark">
              Useful links
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <a href="#home" className="hover:text-brand-primary">
                Home
              </a>
              <a href="#about" className="hover:text-brand-primary">
                About
              </a>
              <a href="#community" className="hover:text-brand-primary">
                Community
              </a>
              <a href="#testimonials" className="hover:text-brand-primary">
                Testimonials
              </a>
              <a href="#blog" className="hover:text-brand-primary">
                Blog
              </a>
              <a href="/login" className="hover:text-brand-primary">
                My Account
              </a>
              <a href="/login" className="hover:text-brand-primary">
                Login
              </a>
              <a href="/login" className="hover:text-brand-primary">
                Sign Up
              </a>
              <a href="#contact" className="hover:text-brand-primary">
                Contact
              </a>
              <a href="#privacy" className="hover:text-brand-primary">
                Privacy Policy
              </a>
            </div>
          </div>
          <p className="text-xs text-gray-500">
            Copyright © 2025 Virtual Coffee
          </p>
        </div>
      </footer>
    </main>
  );
}
