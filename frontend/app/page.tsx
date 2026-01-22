import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-brand-base text-brand-text">
      <section className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-6 py-16 text-center md:py-24">
        <div className="text-sm font-semibold uppercase tracking-widest text-brand-primary">
          Virtual Coffee Academy
        </div>
        <h1 className="text-4xl font-bold leading-tight text-brand-dark md:text-6xl">
          Home barista education that works in 5 days.
        </h1>
        <p className="max-w-2xl text-base text-gray-600 md:text-lg">
          Step-by-step lessons, community support, and practical drills that
          make better espresso a daily habit.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/login"
            className="rounded-full bg-brand-primary px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-brand-accent"
          >
            Start learning
          </Link>
          <a
            href="mailto:hello@virtualcoffee.com"
            className="rounded-full border border-brand-primary px-6 py-3 text-sm font-bold text-brand-primary transition hover:bg-brand-primary hover:text-white"
          >
            Contact the team
          </a>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 pb-16 md:pb-24">
        <div className="grid gap-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm md:grid-cols-3">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-brand-dark">
              Daily micro-lessons
            </h3>
            <p className="text-sm text-gray-600">
              Five-minute drills that fit your morning routine.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-brand-dark">
              Expert feedback
            </h3>
            <p className="text-sm text-gray-600">
              Get guidance from coaches who build cafe-level taste.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-brand-dark">
              Community tasting notes
            </h3>
            <p className="text-sm text-gray-600">
              Learn from real shots posted by home brewers worldwide.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
