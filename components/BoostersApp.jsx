"use client";
import React from "react";

// Simple one-file React + Tailwind starter for Girard Music and Drama Boosters
// Drop into a Next.js/React project. Uses Tailwind utility classes only.
// Replace placeholder images/links as noted. All colors come from the temporary
// brand palette defined below. You can swap hexes to match final palette.

const BRAND = {
  red: "#B22222", // Jacket Red
  gold: "#F9C80E", // Jacket Gold
  honey: "#FFD166", // Honeycomb accent
  black: "#111111",
  white: "#FFFFFF",
};

const Section = ({ id, title, children }) => (
  <section id={id} className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    {title && (
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-center" style={{color: BRAND.red}}>
        {title}
      </h2>
    )}
    <div className="mt-8">{children}</div>
  </section>
);

const Nav = () => {
  const [open, setOpen] = React.useState(false);
  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Programs", "#programs"],
    ["Officers", "#officers"],
    ["Events", "#events"],
    ["Media", "#media"],
    ["Sponsors", "#sponsors"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b" style={{borderColor: BRAND.gold}}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex items-center gap-3">
          {/* Replace with final logo */}
          <div className="w-10 h-10 rounded-full border" style={{borderColor: BRAND.red, background: BRAND.gold}} />
          <span className="font-extrabold tracking-wide" style={{color: BRAND.red}}>Girard Music and Drama Boosters</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="hover:opacity-80" style={{color: BRAND.black}}>
              {label}
            </a>
          ))}
          <a aria-label="Donate or Sponsor" href="#donate" className="px-4 py-2 rounded-2xl shadow font-bold" style={{background: BRAND.red, color: BRAND.white}}>Donate</a>
        </nav>
        <button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border" style={{borderColor: BRAND.gold}} onClick={() => setOpen(!open)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" /></svg>
        </button>
      </div>
      <div className={`md:hidden border-t ${open ? "block" : "hidden"}`} style={{borderColor: BRAND.gold}}>
        <div className="px-4 py-4 flex flex-col gap-3 text-sm font-semibold">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="py-2" style={{color: BRAND.black}} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#donate" className="mt-2 px-4 py-2 rounded-2xl shadow font-bold text-center" style={{background: BRAND.red, color: BRAND.white}} onClick={() => setOpen(false)}>
            Donate
          </a>
        </div>
      </div>
    </header>
  );
};

const Hero = () => (
  <section id="home" className="relative overflow-hidden">
    <div className="absolute inset-0 opacity-10" style={{background: `radial-gradient(circle at 20% 10%, ${BRAND.gold}, transparent 40%), radial-gradient(circle at 80% 30%, ${BRAND.red}, transparent 40%)`}} />
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center py-20 px-4 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight" style={{color: BRAND.black}}>
          Fuel the <span style={{color: BRAND.red}}>Arts</span>.
          <br className="hidden sm:block"/> Power the <span style={{color: BRAND.gold}}>Jackets</span>.
        </h1>
        <p className="mt-5 text-lg text-gray-700 max-w-xl">
          The Boosters support Girard School Districtâ€™s music and drama programs (Kâ€"12) through fundraising,
          volunteers, and yearâ€'round community events.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#events" className="px-5 py-3 rounded-xl font-bold shadow" style={{background: BRAND.red, color: BRAND.white}}>See Events</a>
          <a href="#join" className="px-5 py-3 rounded-xl font-bold border" style={{borderColor: BRAND.red, color: BRAND.red}}>Join / Volunteer</a>
        </div>
      </div>
      <div className="relative">
        {/* Placeholder gallery tile. Replace with real photos */}
        <div className="grid grid-cols-3 gap-3">
          {["https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4","https://images.unsplash.com/photo-1483412033650-1015ddeb83d0","https://images.unsplash.com/photo-1464375117522-1311dd7d2e03","https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91","https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f","https://images.unsplash.com/photo-1483412033650-1015ddeb83d0"].map((src,i)=> (
            <img key={i} src={`${src}?auto=format&fit=crop&w=400&q=80`} alt="Girard music & drama" className={`rounded-2xl object-cover w-full h-28 sm:h-32 lg:h-36 ${i%2===0? 'mt-6':''}`} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <Section id="about" title="About the Boosters">
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 text-gray-800 leading-relaxed">
        <p className="mb-4">
          Weâ€™re a volunteer 501(c)(3) backing Kâ€"12 music and drama across Girard School Districtâ€"funding instruments and repairs, sets and costumes, travel, scholarships, and the little essentials that make performances feel big. Want in? Join the crew.
        </p>
        <ul className="space-y-2 list-disc pl-6">
          <li>Scholarships, lessons, and uniform/fee assistance</li>
          <li>Sets, costumes, sound/lighting, pit and tech needs</li>
          <li>Travel for festivals, camps, and adjudications</li>
          <li>Signature events: craft fairs, raffles, and concessions</li>
        </ul>
      </div>
      <div className="rounded-2xl p-6 shadow" style={{background: BRAND.gold}}>
        <h3 className="font-extrabold text-xl" style={{color: BRAND.black}}>Quick Links</h3>
        <ul className="mt-3 space-y-2 font-semibold">
          <li><a className="underline" href="https://www.girardsd.org/" target="_blank" rel="noreferrer">Girard School District</a></li>
          <li><a className="underline" href="https://www.girardsd.org/apps/pages/index.jsp?type=d&uREC_ID=372747" target="_blank" rel="noreferrer">District Music Hub (GHS)</a></li>
          <li><a className="underline" href="https://www.girardsd.org/apps/pages/index.jsp?type=d&uREC_ID=372159" target="_blank" rel="noreferrer">Girard High School</a></li>
          <li><a className="underline" href="https://www.girardsd.org/apps/pages/index.jsp?type=d&uREC_ID=372161" target="_blank" rel="noreferrer">Rice Avenue Middle School</a></li>
          <li><a className="underline" href="https://www.girardsd.org/apps/pages/index.jsp?type=d&uREC_ID=372160" target="_blank" rel="noreferrer">Elk Valley Elementary School</a></li>
          <li><a className="underline" href="#events">Upcoming Events</a></li>
        </ul>
      </div>
    </div>
  </Section>
);

const Programs = () => (
  <Section id="programs" title="Programs Across the District">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <a href="https://www.girardsd.org/apps/pages/index.jsp?type=d&uREC_ID=372160" target="_blank" rel="noreferrer" className="rounded-2xl p-5 border shadow-sm bg-white hover:shadow-md transition" style={{borderColor: BRAND.gold}}>
        <div className="font-extrabold text-lg" style={{color: BRAND.red}}>Elk Valley Elementary</div>
        <div className="text-gray-700">Kâ€"4 general music, performances, and arts integration.</div>
      </a>
      <a href="https://www.girardsd.org/apps/pages/index.jsp?type=d&uREC_ID=372161" target="_blank" rel="noreferrer" className="rounded-2xl p-5 border shadow-sm bg-white hover:shadow-md transition" style={{borderColor: BRAND.gold}}>
        <div className="font-extrabold text-lg" style={{color: BRAND.red}}>Rice Avenue Middle School</div>
        <div className="text-gray-700">5â€"8 band/chorus and RAMS drama opportunities.</div>
      </a>
      <a href="https://www.girardsd.org/apps/pages/index.jsp?type=d&uREC_ID=372159" target="_blank" rel="noreferrer" className="rounded-2xl p-5 border shadow-sm bg-white hover:shadow-md transition" style={{borderColor: BRAND.gold}}>
        <div className="font-extrabold text-lg" style={{color: BRAND.red}}>Girard High School</div>
        <div className="text-gray-700">9â€"12 music, marching band, theatre productions, and more.</div>
      </a>
    </div>
  </Section>
);

const Officers = () => (
  <Section id="officers" title="2025â€"26 Officers">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {[
        ["Mike Abbey", "President"],
        ["Matthew LaFata", "Vice President"],
        ["Nancy Bottom", "Treasurer"],
        ["Cheyelle Couse", "Secretary"],
        ["Joe Meka", "Social Media"],
      ].map(([name, role]) => (
        <div key={name} className="rounded-2xl p-5 border shadow-sm bg-white" style={{borderColor: BRAND.gold}}>
          <div className="font-extrabold text-lg" style={{color: BRAND.red}}>{name}</div>
          <div className="text-gray-700">{role}</div>
        </div>
      ))}
    </div>
  </Section>
);

const Events = () => (
  <Section id="events" title="Events">
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="rounded-2xl border p-4 shadow-sm">
        <h3 className="font-extrabold text-xl mb-2" style={{color: BRAND.red}}>Upcoming</h3>
        <p className="text-gray-700 mb-3">Connect a Google Calendar or Givebutter events here, or list craft fairs, raffles, and performances.</p>
        {/* Example embed: replace src with your public Google Calendar embed URL */}
        <div className="aspect-[4/3] w-full rounded-lg overflow-hidden border">
          <iframe title="Calendar" className="w-full h-full" src={process.env.NEXT_PUBLIC_CALENDAR_EMBED_URL || "about:blank"} />
        </div>
      </div>
      <div className="rounded-2xl border p-4 shadow-sm">
        <h3 className="font-extrabold text-xl mb-2" style={{color: BRAND.red}}>Facebook Feed</h3>
        <p className="text-gray-700 mb-3">Live posts from our page.</p>
        <div className="w-full rounded-lg overflow-hidden border">
          <iframe
            title="Facebook Page"
            className="w-full" style={{height: 600}}
            src={
              "https://www.facebook.com/plugins/page.php?href=" +
              encodeURIComponent(process.env.NEXT_PUBLIC_FB_PAGE_URL || "https://www.facebook.com/GirardMusicandDramaBoosters") +
              "&tabs=timeline&width=500&height=600&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true"
            }
            scrolling="no" frameBorder="0" allow="encrypted-media; picture-in-picture; web-share"
          />
        </div>
      </div>
    </div>
  </Section>
);

const Media = () => (
  <Section id="media" title="Media">
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="rounded-2xl overflow-hidden border">
        {/* Example YouTube embed (replace with your channel or specific videos) */}
        <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/CeiZmZPBNTI" title="Girard Yellowjacket Marching Band" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {/* Replace with real photos from shows/events */}
        {[1,2,3,4,5,6].map((i) => (
          <div key={i} className="rounded-xl overflow-hidden border bg-gray-100 aspect-square">
            <img
              alt="Gallery placeholder"
              className="w-full h-full object-cover"
              src={`https://images.unsplash.com/photo-1558478551-1a378f63328e?auto=format&fit=crop&w=600&q=80`}
            />
          </div>
        ))}
      </div>
    </div>
  </Section>
);

const Donate = () => (
  <Section id="donate" title="Support the Arts">
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="rounded-2xl p-6 border bg-white shadow-sm" style={{borderColor: BRAND.gold}}>
        <h3 className="font-extrabold text-xl" style={{color: BRAND.red}}>Oneâ€'Time Gift</h3>
        <p className="text-gray-700 mt-2">Fuel scholarships, sets, instruments, travel, and more.</p>
        <a href={process.env.NEXT_PUBLIC_DONATE_URL || "#"} className="mt-4 inline-block px-5 py-3 rounded-xl font-bold shadow" style={{background: BRAND.red, color: BRAND.white}}>Donate Now</a>
      </div>
      <div className="rounded-2xl p-6 border bg-white shadow-sm" style={{borderColor: BRAND.gold}}>
        <h3 className="font-extrabold text-xl" style={{color: BRAND.red}}>Become a Member</h3>
        <p className="text-gray-700 mt-2">Join the Boosters. Pick a level; get updates and perks.</p>
        <a href={process.env.NEXT_PUBLIC_MEMBERSHIP_URL || "#"} className="mt-4 inline-block px-5 py-3 rounded-xl font-bold border" style={{borderColor: BRAND.red, color: BRAND.red}}>Join the Boosters</a>
      </div>
      <div className="rounded-2xl p-6 border bg-white shadow-sm" style={{borderColor: BRAND.gold}}>
        <h3 className="font-extrabold text-xl" style={{color: BRAND.red}}>Corporate Sponsorship</h3>
        <p className="text-gray-700 mt-2">Partner as Presenting, Gold, or Red tier.</p>
        <a href="#sponsors" className="mt-4 inline-block px-5 py-3 rounded-xl font-bold" style={{background: BRAND.gold, color: BRAND.black}}>View Sponsor Tiers</a>
      </div>
    </div>
  </Section>
);

const Sponsors = () => (
  <Section id="sponsors" title="Sponsors & Partners">
    <div className="grid lg:grid-cols-3 gap-6">
      {[{"tier":"Presenting","amt":"$2,500+","perks":["Logo on homepage & programs","Band/Drama shoutâ€'outs","Vendor table at fairs"]},{"tier":"Gold","amt":"$1,000","perks":["Logo on website","Social media thanks","2 season tickets"]},{"tier":"Red","amt":"$500","perks":["Website mention","Sponsor decal","1 season ticket"]}].map((t)=> (
        <div key={t.tier} className="rounded-2xl p-6 border shadow-sm bg-white" style={{borderColor: BRAND.gold}}>
          <div className="text-2xl font-extrabold" style={{color: BRAND.red}}>{t.tier}</div>
          <div className="text-gray-900 font-bold mt-1">{t.amt}</div>
          <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
            {t.perks.map(p=> <li key={p}>{p}</li>)}
          </ul>
          <a href="#donate" className="mt-4 inline-block px-4 py-2 rounded-xl font-bold" style={{background: BRAND.gold, color: BRAND.black}}>Become a Sponsor</a>
        </div>
      ))}
    </div>
  </Section>
);

const Contact = () => (
  <Section id="contact" title="Contact">
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="rounded-2xl p-6 border bg-white" style={{borderColor: BRAND.gold}}>
        <h3 className="font-extrabold text-xl" style={{color: BRAND.red}}>Get in touch</h3>
        <p className="mt-2 text-gray-700">Email: <a className="underline" href="mailto:girardmusicboosters@gmail.com">girardmusicboosters@gmail.com</a></p>
        <p className="text-gray-700">Mailing Address: P.O. Box 425, Girard, PA 16417</p>
        <form className="mt-4 grid gap-3" action="https://formspree.io/f/xbjvnnkd" method="POST">
          <input className="border rounded-lg p-3" name="name" placeholder="Your name" />
          <input className="border rounded-lg p-3" name="email" placeholder="Your email" />
          <textarea className="border rounded-lg p-3" name="message" placeholder="How can we help?" rows={4} />
          <button className="px-5 py-3 rounded-xl font-bold shadow" style={{background: BRAND.red, color: BRAND.white}}>Send</button>
        </form>
      </div>
      <div id="join" className="rounded-2xl p-6" style={{background: BRAND.gold}}>
        <h3 className="font-extrabold text-xl" style={{color: BRAND.black}}>Join / Volunteer</h3>
        <p className="mt-2 text-gray-900">Add a simple Google Form or Givebutter volunteer form here to route signâ€'ups to the right chairperson.</p>
        <a href={process.env.NEXT_PUBLIC_VOLUNTEER_URL || "#"} className="mt-4 inline-block px-4 py-2 rounded-xl font-bold" style={{background: BRAND.black, color: BRAND.white}}>Open Volunteer Form</a>
      </div>
    </div>
  </Section>
);

export default function App() {
  return (
    <main className="font-sans bg-white text-gray-900">
      <Nav />
      <Hero />
      <About />
      <Programs />
      <Officers />
      <Events />
      <Media />
      <Donate />
      <Sponsors />
      <Contact />
      <footer className="mt-10 border-t py-8 text-center text-sm" style={{borderColor: BRAND.gold}}>
        <p>
          Â© {new Date().getFullYear()} Girard Music and Drama Boosters Â· Built with â¤ by the community
        </p>
      </footer>
    </main>
  );
}






