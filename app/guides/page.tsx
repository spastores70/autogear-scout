import type { Metadata } from "next";
import Link from "next/link";
import { featuredGuides } from "../data";
import { ArrowUpRight } from "../ui/icons";
import { Footer, Header } from "../ui/site-shell";
export const metadata: Metadata = { title:"Automotive Accessory Buying Guides", description:"Practical guides for choosing dash cams, emergency gear, organizers, chargers, detailing equipment, and other car accessories." };
export default function Guides(){
  const extras=[["smart-car-accessories","Smart accessories","How to choose useful car upgrades without wasting money"],["car-chargers","Electronics","What to check before buying a fast car charger"],["detailing-starter-kit","Detailing","Build a simple car detailing kit for home"]];
  return <><Header/><main><section className="page-hero"><div className="shell"><p className="eyebrow">Research library</p><h1>Buying guides for better car upgrades.</h1><p>Clear advice on compatibility, useful features, installation, seller checks, and long-term value.</p></div></section><section className="section shell"><div className="article-grid">{[...featuredGuides.map(g=>[g.slug,g.kicker,g.title]),...extras].map(([slug,kicker,title])=><article className="article-card" key={slug}><p>{kicker}</p><h3>{title}</h3><span>Practical guide</span><Link href={`/guides/${slug}`}><ArrowUpRight/></Link></article>)}</div></section></main><Footer/></>;
}
