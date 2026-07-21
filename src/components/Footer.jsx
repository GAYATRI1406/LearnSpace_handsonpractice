import {
  FiBookOpen,
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiYoutube,
} from "react-icons/fi";

const footerLinks = ["Home","Explore Courses", "My Learning", "Profile"];

const socialIcons = [
  { icon: FiGithub, label: "GitHub" },
  { icon: FiTwitter, label: "Twitter" },
  { icon: FiLinkedin, label: "LinkedIn" },
  { icon: FiYoutube, label: "YouTube" },
];

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Stacked on mobile, horizontal on desktop */}
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-12 sm:px-6 md:flex-row md:justify-between lg:px-8">
        {/* Brand */}
        <div className="max-w-sm">
          <a href="#" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
              <FiBookOpen className="h-5 w-5" />
            </span>
            <span className="font-heading text-xl font-bold text-white">
              Learn<span className="text-primary-light">Sphere</span>
            </span>
          </a>
          <p className="mt-4 text-sm text-slate-400">
            Your personal learning platform. Explore courses, track your
            progress, and achieve your goals — anywhere, on any device.
          </p>
        </div>

        {/* Navigation links */}
        <div>
          <h4 className="font-heading font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 flex flex-col gap-2">
            {footerLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social media */}
        <div>
          <h4 className="font-heading font-semibold text-white">Follow Us</h4>
          <div className="mt-4 flex gap-3">
            {socialIcons.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-colors hover:bg-primary hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-5 text-center text-sm text-slate-500">
        © 2026 LearnSphere. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
