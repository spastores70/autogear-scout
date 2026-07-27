import Link from "next/link";
import { Search } from "./icons";

export function Header() {
  return (
    <>
      <div className="utility"><span>Independent research</span><span>Practical comparisons</span><span>Affiliate-supported, reader-first</span></div>
      <header className="site-header">
        <div className="shell header-inner">
          <Link className="logo" href="/" aria-label="AutoGear Scout home"><span>AUTOGEAR</span> SCOUT</Link>
          <nav aria-label="Main navigation">
            <Link href="/#top-picks">Best finds</Link><Link href="/guides">Buying guides</Link><Link href="/comparisons">Comparisons</Link><Link href="/categories">Categories</Link>
          </nav>
          <Link className="search-button" href="/guides" aria-label="Search our guides"><Search /></Link>
        </div>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="shell footer-grid">
        <div><Link className="logo logo-light" href="/"><span>AUTOGEAR</span> SCOUT</Link><p>Practical automotive accessory research for smarter, simpler upgrades.</p></div>
        <div><strong>Explore</strong><Link href="/guides">Buying guides</Link><Link href="/comparisons">Comparisons</Link><Link href="/categories">Categories</Link></div>
        <div><strong>About</strong><Link href="/about">How we research</Link><Link href="/disclosure">Affiliate disclosure</Link><Link href="/privacy">Privacy</Link></div>
      </div>
      <div className="shell footer-bottom"><span>© 2026 AutoGear Scout</span><span>AutoGear Scout is an independent publication and is not operated by AliExpress.</span></div>
    </footer>
  );
}
