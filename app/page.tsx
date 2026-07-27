import Link from "next/link";
import { ArrowUpRight, BadgeCheck, BookOpen, CarFront, Gauge, Search, ShieldCheck, Sparkles, Star, Tag } from "./ui/icons";
import { affiliateUrl, categories, featuredGuides, topPicks } from "./data";
import { Footer, Header } from "./ui/site-shell";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow">Smarter upgrades for every drive</p>
            <h1>Find the right gear for your car.</h1>
            <p className="lede">
              Practical buying guides, useful comparisons, and curated automotive
              accessories available from AliExpress.
            </p>
            <div className="button-row">
              <Link className="button button-primary" href="#top-picks">Explore top picks</Link>
              <Link className="text-link" href="/guides">Read buying guides <ArrowUpRight /></Link>
            </div>
          </div>
          <div className="hero-image" role="img" aria-label="Modern car interior equipped with practical accessories" />
        </section>

        <section className="trust-strip" aria-label="Why use AutoGear Scout">
          <div><BadgeCheck /><span><strong>Curated picks</strong>Research focused on value and usefulness.</span></div>
          <div><Gauge /><span><strong>Clear comparisons</strong>Key features made easier to compare.</span></div>
          <div><BookOpen /><span><strong>Buyer-first guides</strong>Practical advice without the sales pressure.</span></div>
        </section>

        <section className="section shell">
          <div className="section-heading">
            <div><p className="eyebrow">Start with what you need</p><h2>Shop by category</h2></div>
            <Link className="text-link" href="/categories">View all categories <ArrowUpRight /></Link>
          </div>
          <div className="category-grid">
            {categories.slice(0, 6).map((item, index) => (
              <Link className="category-card" href={`/categories#${item.slug}`} key={item.slug}>
                <div className={`category-photo category-photo-${index + 1}`} />
                <div><span>{item.icon}</span><strong>{item.name}</strong><small>{item.description}</small></div>
              </Link>
            ))}
          </div>
        </section>

        <section className="section section-tint" id="top-picks">
          <div className="shell">
            <div className="section-heading">
              <div><p className="eyebrow">Editor&apos;s shortlist</p><h2>Popular upgrades worth a look</h2></div>
              <span className="updated"><Sparkles /> Selection guide</span>
            </div>
            <div className="product-grid">
              {topPicks.map((pick) => (
                <article className="product-card" key={pick.name}>
                  <div className="product-top">
                    <span className="pill">{pick.label}</span>
                    <span className="rating"><Star /> {pick.rating}</span>
                  </div>
                  <img className="product-photo" src={pick.image} alt={`${pick.name} in a typical automotive installation`} />
                  <p className="product-category">{pick.category}</p>
                  <h3>{pick.name}</h3>
                  <p>{pick.summary}</p>
                  <ul>{pick.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                  <a className="button button-dark" href={affiliateUrl(pick.query)} target="_blank" rel="sponsored nofollow noopener">
                    View on AliExpress <ArrowUpRight />
                  </a>
                </article>
              ))}
            </div>
            <p className="affiliate-note"><Tag /> We may earn a commission when you purchase through links on this page, at no additional cost to you.</p>
          </div>
        </section>

        <section className="section shell">
          <div className="guide-feature">
            <div className="guide-image" role="img" aria-label="Automotive accessories prepared for an independent buying guide" />
            <div className="guide-copy">
              <p className="eyebrow">Featured buying guide</p>
              <h2>How to choose car accessories you&apos;ll actually use</h2>
              <p>Prioritize vehicle fit, power requirements, installation, seller history, recent reviews, and return terms before you buy.</p>
              <div className="check-list">
                <span><ShieldCheck /> Compatibility first</span>
                <span><Search /> Check recent buyer feedback</span>
                <span><CarFront /> Avoid dashboard clutter</span>
              </div>
              <Link className="button button-primary" href="/guides/smart-car-accessories">Read the full guide</Link>
            </div>
          </div>
        </section>

        <section className="section shell">
          <div className="section-heading">
            <div><p className="eyebrow">Learn before you buy</p><h2>Fresh from the garage</h2></div>
            <Link className="text-link" href="/guides">Browse all guides <ArrowUpRight /></Link>
          </div>
          <div className="article-grid">
            {featuredGuides.map((guide) => (
              <article className="article-card" key={guide.slug}>
                <p>{guide.kicker}</p>
                <h3>{guide.title}</h3>
                <span>{guide.readTime} read</span>
                <Link href={`/guides/${guide.slug}`} aria-label={`Read ${guide.title}`}><ArrowUpRight /></Link>
              </article>
            ))}
          </div>
        </section>

        <section className="newsletter">
          <div className="shell newsletter-inner">
            <div><p className="eyebrow">The weekend garage note</p><h2>Better gear. Fewer bad buys.</h2><p>Get practical accessory ideas and new buying guides in one concise email.</p></div>
            <form><label className="sr-only" htmlFor="email">Email address</label><input id="email" type="email" placeholder="you@example.com" required /><button className="button button-primary" type="submit">Join free</button></form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
