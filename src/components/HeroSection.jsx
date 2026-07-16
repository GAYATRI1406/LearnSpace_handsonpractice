import { FiArrowRight, FiAward, FiTrendingUp } from "react-icons/fi";

function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary">
      {/* flex-col on mobile (stacked), flex-row from md: (side by side) */}
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-12 sm:px-6 md:flex-row md:py-16 lg:px-8">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Welcome Back, Student!
          </h1>
          <p className="mt-4 max-w-xl text-base text-blue-100 sm:text-lg">
            Continue learning and achieve your goals. Pick up right where you
            left off and keep building your skills, one lesson at a time.
          </p>
          <a
            href="#courses"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-heading font-semibold text-primary shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Explore Courses
            <FiArrowRight className="h-5 w-5" />
          </a>
        </div>

        {/* Illustration card */}
        <div className="flex-1">
          <div className="mx-auto max-w-sm rounded-2xl bg-white/10 p-6 shadow-xl backdrop-blur-sm">
            <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-light text-primary">
                <FiTrendingUp className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm text-slate-500">Weekly streak</p>
                <p className="font-heading font-semibold text-slate-900">
                  5 days in a row 🔥
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3 rounded-xl bg-white p-4 shadow">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary-light text-secondary">
                <FiAward className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm text-slate-500">Next milestone</p>
                <p className="font-heading font-semibold text-slate-900">
                  Finish React course
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
