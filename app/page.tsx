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
        className="mx-auto w-full max-w-6xl space-y-6 px-6 py-16"
      >
        <h2 className="text-3xl font-bold text-brand-text md:text-4xl">
          We&apos;ve trained world class baristas and coffee shop owners. Now we
          want to train you.
        </h2>
        <p className="max-w-4xl text-base text-brand-text-light">
          For over 25 years Bellissimo Coffee Advisors has consulted and trained
          coffee business owners and their teams. For the first time ever,
          we&apos;re bringing our knowledge to your home. We believe everyone
          should be able to enjoy great coffee.
        </p>
        <a
          href="#course"
          className="inline-flex w-fit rounded-full border-2 border-brand-red px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-red transition hover:bg-brand-red hover:text-white"
        >
          Learn More About Us
        </a>
      </section>

      <section
        id="course"
        className="mx-auto w-full max-w-6xl space-y-10 px-6 pb-16"
      >
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-red">
            Our Course
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-3xl font-bold text-brand-text">
              Home Barista Course
            </h3>
            <span className="text-2xl font-bold text-brand-text">$79</span>
          </div>
          <p className="max-w-3xl text-base text-brand-text-light">
            Discover your own perfect coffee routine and become the master of
            your morning cup.
          </p>
          <a
            href="/login"
            className="inline-flex rounded-full bg-brand-red px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-md transition hover:bg-red-600"
          >
            Explore the Course
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-red">
              5-Day Course
            </p>
            <h4 className="text-2xl font-bold text-brand-text">
              What you&apos;ll learn
            </h4>
            <div className="space-y-5 text-base text-brand-text-light">
              <div>
                <h5 className="text-lg font-semibold text-brand-text">
                  Coffee Theory
                </h5>
                <p>
                  Our course isn&apos;t just about technique. After day 1,
                  you&apos;ll understand what few others do: what coffee really
                  is and how brewing it works at the most fundamental level.
                </p>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-brand-text">
                  Brewing Coffee by Hand
                </h5>
                <p>
                  We start brewing actual coffee with manual techniques to give
                  you more ways to experiment on your own.
                </p>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-brand-text">
                  Your Home Bar
                </h5>
                <p>
                  As we prepare to pull espresso, we help you figure out how to
                  set up your home bar and understand espresso on a new level.
                </p>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-brand-text">
                  Pulling Cafe Quality Espresso
                </h5>
                <p>
                  For the first time ever, we&apos;ve distilled our industry
                  training techniques for the home brewer. You&apos;ll get our
                  professional guidance to brew cafe quality at home.
                </p>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-brand-text">
                  Milk and Latte Art
                </h5>
                <p>
                  The last day of the course is where you prove your mastery.
                  We move step-by-step to teach you how to steam perfect milk and
                  draw latte art just like a professional barista.
                </p>
              </div>
            </div>
            <p className="text-base font-semibold text-brand-text">
              After just 5 days, a couple hours of free time per day, you&apos;ll
              be the one friends come to for coffee advice.
            </p>
            <a
              href="/login"
              className="inline-flex rounded-full bg-brand-red px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-md transition hover:bg-red-600"
            >
              Enroll Now
            </a>
          </div>
          <div className="space-y-6 rounded-3xl border border-gray-100 bg-brand-beige p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-red">
              About the Course
            </p>
            <div className="space-y-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-text">
              <div className="rounded-full border border-brand-red px-5 py-2">
                Comprehensive
              </div>
              <div className="rounded-full border border-brand-red px-5 py-2">
                Self-paced
              </div>
              <div className="rounded-full border border-brand-red px-5 py-2">
                Created by Unbiased Experts
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="mx-auto w-full max-w-6xl space-y-8 px-6 pb-16"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-red">
          Testimonials
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {[
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
          ].map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm"
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
      </section>

      <section
        id="community"
        className="mx-auto w-full max-w-6xl space-y-6 px-6 pb-16"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-red">
          Subscribe Now
        </p>
        <div className="grid gap-6 rounded-3xl border border-gray-100 bg-brand-beige p-8 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h3 className="text-2xl font-bold text-brand-text">
              Don&apos;t miss our future updates! Get Subscribed Today!
            </h3>
            <p className="mt-2 text-sm text-brand-text-light">
              Join the community and be the first to hear about new lessons,
              events, and barista tips.
            </p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Your mail here"
              className="flex-1 rounded-full border border-gray-200 px-4 py-3 text-sm focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20"
            />
            <button
              type="submit"
              className="rounded-full bg-brand-red px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-md transition hover:bg-red-600"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </section>

      <footer
        id="contact"
        className="border-t border-gray-100 bg-white py-10"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-text">
              Useful Links
            </p>
            <div className="mt-3 flex flex-wrap gap-4 text-xs uppercase tracking-[0.2em] text-brand-text-light">
              <a href="#home" className="hover:text-brand-red">
                Home
              </a>
              <a href="#about" className="hover:text-brand-red">
                About
              </a>
              <a href="#community" className="hover:text-brand-red">
                Community
              </a>
              <a href="#testimonials" className="hover:text-brand-red">
                Testimonials
              </a>
              <a href="#blog" className="hover:text-brand-red">
                Blog
              </a>
              <a href="/login" className="hover:text-brand-red">
                My Account
              </a>
              <a href="/login" className="hover:text-brand-red">
                Login
              </a>
              <a href="/login" className="hover:text-brand-red">
                Sign Up
              </a>
              <a href="#contact" className="hover:text-brand-red">
                Contact
              </a>
              <a href="#privacy" className="hover:text-brand-red">
                Privacy Policy
              </a>
            </div>
          </div>
          <p className="text-xs text-brand-text-light">
            Copyright © 2025 Virtual Coffee
          </p>
        </div>
      </footer>
    </main>
  );
}
