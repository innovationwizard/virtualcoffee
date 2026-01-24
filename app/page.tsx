import { Coffee, CheckCircle, User, Settings } from "lucide-react";

const testimonials = [
  {
    name: "Jan and Ron W",
    quote:
      "Professional Quality, at Home! This course taught us everything we needed to know, from dialing in our espresso to creating silky microfoam for latte art. It was fun to do the course together and now we are enjoying café-quality coffee drinks every day!",
  },
  {
    name: "Chuck A",
    quote:
      "Best Investment in My Coffee Journey! This course demystified latte art for me. I feel so confident with my coffee setup at home now, and my friends are always asking for my ‘signature’ macchiatos!",
  },
  {
    name: "Aaron L",
    quote:
      "Coffee Game-Changer! I never thought I’d be the ‘office barista,’ but thanks to this course, I’m impressing my coworkers with perfect espressos and frothy lattes. My mornings are more caffeinated and fun than ever!",
  },
  {
    name: "Abbey S",
    quote:
      "Transformative Experience! Before this course, I could barely use my espresso machine. Now, I’m making cappuccinos and lattes at home that rival my favorite café. VirtualCoffee.com gave me the skills I needed to master my morning routine!",
  },
  {
    name: "Cheryl A",
    quote:
      "From Amateur to Coffee Pro! I used to dread my old, mediocre morning coffee. Now, I can make incredible coffee right in my kitchen, and it’s all thanks to VirtualCoffee.com. The course was easy to follow and super engaging!",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-brand-text">
      <div className="bg-brand-beige text-xs text-brand-text-light">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-2">
          <a href="#content" className="hover:text-brand-red">
            Skip to content
          </a>
          <button
            type="button"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-text"
          >
            Menu
          </button>
        </div>
      </div>

      <header className="border-b border-gray-100">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <div className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-text">
            Virtual Coffee
          </div>
          <nav className="hidden flex-wrap items-center gap-6 text-xs font-semibold uppercase tracking-[0.2em] text-brand-text md:flex">
            <a href="#home" className="hover:text-brand-red">
              Home
            </a>
            <a href="#course" className="hover:text-brand-red">
              Home Barista Course
            </a>
            <a href="#community" className="hover:text-brand-red">
              Community
            </a>
            <a href="#about" className="hover:text-brand-red">
              About
            </a>
            <a href="#testimonials" className="hover:text-brand-red">
              Testimonials
            </a>
            <a href="#blog" className="hover:text-brand-red">
              Blog
            </a>
            <a href="#contact" className="hover:text-brand-red">
              Contact
            </a>
          </nav>
          <a
            href="/login"
            className="rounded-full border-2 border-brand-red px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red transition hover:bg-brand-red hover:text-white"
          >
            My Account
          </a>
        </div>
      </header>

      <section
        id="home"
        className="relative bg-brand-navy text-white"
        style={{
          backgroundImage: "url('/images/Espresso-101-Cover.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-brand-navy/70" aria-hidden />
        <div
          id="content"
          className="relative mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-20 md:py-28"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-red">
            Why Choose Us
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            Home barista skill development in just 5 days
          </h1>
          <a
            href="/login"
            className="inline-flex w-fit rounded-full bg-brand-red px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-md transition hover:bg-red-600"
          >
            Sign Up
          </a>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto w-full max-w-6xl px-6 py-20 text-center"
      >
        <h2 className="mx-auto max-w-4xl text-3xl font-semibold leading-tight text-brand-text md:text-5xl">
          We&apos;ve trained world class baristas and coffee shop owners.
        </h2>
        <h3 className="mt-6 text-3xl font-semibold text-brand-text md:text-4xl">
          Now we want to train you.
        </h3>
        <p className="mx-auto mt-6 max-w-4xl text-base text-brand-text-light md:text-lg">
          For over 25 years Bellissimo Coffee Advisors has consulted and trained
          coffee business owners and their teams. For the first time ever,
          we&apos;re bringing our knowledge to your home.
        </p>
        <p className="mx-auto mt-6 max-w-3xl text-base italic text-brand-text-light md:text-lg">
          We believe everyone should be able to enjoy great coffee.
        </p>
        <a
          href="#course"
          className="mt-10 inline-flex items-center gap-3 rounded-full border-2 border-brand-red px-10 py-4 text-xs font-semibold uppercase tracking-[0.35em] text-brand-red transition hover:bg-brand-red hover:text-white"
        >
          Learn more about us <span aria-hidden>→</span>
        </a>
        <div className="mt-12 w-full overflow-hidden rounded-3xl border border-gray-200 shadow-sm">
          <img
            src="/images/video-placeholder.png"
            alt="Virtual Coffee video preview"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section
        id="course"
        className="relative w-full bg-brand-navy/60"
        style={{
          backgroundImage: "url('/images/our-course-bg.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-brand-navy/70" aria-hidden />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 py-20 text-center text-white md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-red">
            Our Course
          </p>
          <div className="w-full max-w-xl rounded-[36px] border-2 border-brand-red bg-white/10 px-8 py-10 text-white shadow-xl backdrop-blur-sm">
            <img
              src="/images/kayla-phaneuf-gQbHr55OTJI-unsplash-scaled-1-300x300.jpg"
              alt="Home Barista Course preview"
              className="mx-auto h-24 w-24 rounded-lg object-cover shadow-md"
            />
            <h3 className="mt-6 text-2xl font-semibold">Home Barista Course</h3>
            <p className="mt-3 text-sm text-white/80">
              Discover your own perfect coffee routine and become the master of
              your morning cup.
            </p>
            <p className="mt-4 text-lg font-semibold text-brand-red">$79</p>
            <a
              href="/login"
              className="mt-6 inline-flex rounded-full bg-brand-red px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white shadow-md transition hover:bg-red-600"
            >
              Explore the Course
            </a>
          </div>
        </div>
      </section>

      <section
        id="five-day-course"
        className="mx-auto w-full max-w-6xl space-y-12 px-6 py-20 text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-text-light">
          5-Day Course
        </p>
        <h3 className="text-2xl font-semibold text-brand-red">
          What you&apos;ll learn
        </h3>

        <div className="relative mx-auto grid max-w-5xl gap-10 md:grid-cols-[1fr_40px_1fr]">
          <div className="space-y-10">
            <div className="rounded-2xl bg-brand-red px-6 py-6 text-left text-white shadow-lg">
              <h4 className="text-lg font-semibold">Coffee Theory</h4>
              <p className="mt-2 text-sm text-white/90">
                Our course isn&apos;t just about technique. After day 1, you&apos;ll
                understand what few others do: what coffee really is and how
                brewing it works at the most fundamental level.
              </p>
            </div>
            <div className="rounded-2xl bg-brand-red px-6 py-6 text-left text-white shadow-lg">
              <h4 className="text-lg font-semibold">Your Home Bar</h4>
              <p className="mt-2 text-sm text-white/90">
                As we prepare to pull espresso, we help you figure out how to set
                up your home bar and understand espresso on a new level.
              </p>
            </div>
            <div className="rounded-2xl bg-brand-red px-6 py-6 text-left text-white shadow-lg">
              <h4 className="text-lg font-semibold">Milk and Latte Art</h4>
              <p className="mt-2 text-sm text-white/90">
                The last day of the course is where you prove your mastery. We
                move step-by-step to teach you how to steam perfect milk and draw
                latte art just like a professional barista.
              </p>
            </div>
          </div>

          <div className="relative hidden items-center justify-center md:flex">
            <div className="absolute inset-y-0 w-0.5 bg-brand-red/60" />
            <div className="flex h-full flex-col items-center justify-between py-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={`dot-${index}`}
                  className="h-4 w-4 rounded-full bg-brand-red"
                />
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <div className="rounded-2xl bg-brand-red px-6 py-6 text-left text-white shadow-lg">
              <h4 className="text-lg font-semibold">Brewing Coffee by Hand</h4>
              <p className="mt-2 text-sm text-white/90">
                We start brewing actual coffee with manual techniques to give you
                more ways to experiment on your own.
              </p>
            </div>
            <div className="rounded-2xl bg-brand-red px-6 py-6 text-left text-white shadow-lg">
              <h4 className="text-lg font-semibold">
                Pulling Cafe Quality Espresso
              </h4>
              <p className="mt-2 text-sm text-white/90">
                For the first time ever, we&apos;ve distilled our industry training
                techniques for the home brewer. You&apos;ll get our professional
                guidance to brew cafe quality at home.
              </p>
            </div>
          </div>
        </div>

        <h4 className="pt-6 text-2xl font-semibold text-brand-red">
          Why Choose Us
        </h4>
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { label: "About the Course", icon: Coffee },
            { label: "Comprehensive", icon: Settings },
            { label: "Self-paced", icon: CheckCircle },
            { label: "Created by Unbiased Experts", icon: User },
          ].map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-4 rounded-2xl border border-brand-red px-4 py-6 text-sm font-semibold uppercase tracking-[0.2em] text-brand-red"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-red">
                <Icon className="h-6 w-6" />
              </span>
              <span className="text-center">{label}</span>
            </div>
          ))}
        </div>

        <p className="mx-auto max-w-4xl text-xl font-semibold text-brand-red">
          After just 5 days, a couple hours of free time per day, you&apos;ll be
          the one friends come to for coffee advice.
        </p>
        <a
          href="/login"
          className="inline-flex rounded-full bg-brand-red px-10 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white shadow-md transition hover:bg-red-600"
        >
          Enroll Now
        </a>
      </section>

      <section
        id="testimonials"
        className="mx-auto w-full max-w-6xl space-y-8 px-6 pb-16"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-red text-center">
          Testimonials
        </p>
        <div className="relative overflow-hidden">
          <div className="carousel-track py-2">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="w-[280px] flex-none rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:w-[320px] md:w-[360px]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
                  {testimonial.name}
                </p>
                <p className="mt-3 text-sm text-brand-text-light">
                  “{testimonial.quote}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="community" className="bg-brand-navy py-14 text-white">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 md:grid-cols-[1fr_1fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              Useful Links
            </p>
            <div className="mt-4 space-y-3 text-xs tracking-[0.2em] text-white/70">
              <a href="#home" className="block hover:text-white">
                Home
              </a>
              <a href="#about" className="block hover:text-white">
                About
              </a>
              <a href="#community" className="block hover:text-white">
                Community
              </a>
              <a href="#testimonials" className="block hover:text-white">
                Testimonials
              </a>
              <a href="#blog" className="block hover:text-white">
                Blog
              </a>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              My Account
            </p>
            <div className="mt-4 space-y-3 text-xs uppercase tracking-[0.2em] text-white/70">
              <a href="/login" className="block hover:text-white">
                Login
              </a>
              <a href="/login" className="block hover:text-white">
                Sign Up
              </a>
              <a href="#contact" className="block hover:text-white">
                Contact
              </a>
              <a href="#privacy" className="block hover:text-white">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              Subscribe Now
            </p>
            <div>
              <h3 className="text-lg font-semibold">
                Don&apos;t miss our future updates! Get Subscribed Today!
              </h3>
              <p className="mt-2 text-sm text-white/70">
                Join the community and be the first to hear about new lessons,
                events, and barista tips.
              </p>
            </div>
            <form className="flex flex-wrap items-center gap-3">
              <input
                type="email"
                placeholder="Your mail here"
                className="min-w-[220px] flex-1 rounded-full border border-white/10 bg-white px-4 py-3 text-sm text-brand-text placeholder:text-brand-text-light focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20"
              />
              <button
                type="submit"
                className="rounded-full bg-brand-red px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-md transition hover:bg-red-600"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-brand-red py-4">
        <p className="text-center text-xs text-white">
          Copyright © 2025 Virtual Coffee
        </p>
      </footer>
    </main>
  );
}
