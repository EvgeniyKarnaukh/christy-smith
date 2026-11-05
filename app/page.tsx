import Photo from "./photo";
import StructuredData from "./structured-data";
import story from "./data/story.json";

const chapters = [
  { id: "eileen", number: "01", name: "Eileen’s story" },
  { id: "mary", number: "02", name: "Mary’s story" },
  { id: "christy", number: "03", name: "Remembering Christy" },
  { id: "never-forgotten", number: "04", name: "Never forgotten" },
];

function Paragraphs({ page, start = 1, end }: { page: number; start?: number; end?: number }) {
  return story[page - 1].slice(start, end).map((text, index) => <p key={index}>{text}</p>);
}

function ChapterLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="eyebrow"><span className="chapter-number">{number}</span>{children}</div>;
}

export default function Home() {
  return (
    <>
      <StructuredData />
      <a className="skip-link" href="#story">Skip to the story</a>
      <header className="site-header wrap">
        <a className="wordmark" href="#top" aria-label="Three Stories, One Family — home"><svg className="family-mark" viewBox="0 0 56 56" fill="none" aria-hidden="true"><path d="M28 46C9 37 5 17 14 13C24 9 30 28 28 46Z" /><path d="M28 46C47 37 51 17 42 13C32 9 26 28 28 46Z" /><path d="M28 46C12 27 19 6 28 6C37 6 44 27 28 46Z" /><path d="M28 46V51" /></svg><span className="wordmark-name">Three Stories,<span className="wordmark-sub">One Family</span></span></a>
        <nav className="header-nav" aria-label="Main navigation"><a href="#story">The story</a><a href="#christy">Remembering Christy</a><a className="text-link" href="/three-stories-one-family.pdf" download>Download the brochure <span aria-hidden="true">↓</span></a></nav>
        <details className="mobile-menu"><summary>Menu <span aria-hidden="true">+</span></summary><nav aria-label="Mobile navigation">{chapters.map(c => <a key={c.id} href={`#${c.id}`}>{c.name}</a>)}<a href="/three-stories-one-family.pdf" download>Download the brochure ↓</a></nav></details>
      </header>
      <main id="top">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-copy"><div className="eyebrow"><span className="small-line" /> A FAMILY REMEMBERED</div><h1 id="hero-title">Three Stories,<br /><em>One Family</em></h1><p className="presented">Presented by Mary Smith</p><p className="hero-description">{story[0][2]}</p><a className="button" href="#story">Discover their story <span aria-hidden="true">↓</span></a><div className="hero-footnote"><span>EILEEN. MARY. CHRISTY.</span><span>ONE FAMILY. THREE LIVES.</span></div></div>
          <div className="hero-image-wrap"><div className="image-corner" /><Photo index={0} hero /><div className="image-note"><span className="small-line" /> A sister’s love. A family’s story.</div></div>
        </section>
        <section className="introduction" id="story"><div className="intro-inner wrap"><span className="intro-mark" aria-hidden="true">“</span><div><p>{story[0][3]}</p><p>{story[0][4]}</p></div><a href="#eileen" className="circle-link" aria-label="Continue to Eileen’s story">↓</a></div></section>
        <div className="story-layout wrap">
          <aside className="story-sidebar"><nav aria-label="Story chapters"><span className="eyebrow">THEIR STORIES</span>{chapters.map(chapter => <a key={chapter.id} href={`#${chapter.id}`}><span>{chapter.number}</span>{chapter.name}<span className="nav-arrow" aria-hidden="true">↗</span></a>)}<a className="pdf-link" href="/three-stories-one-family.pdf" download>Download the brochure <span>Brochure · 21 pages ↓</span></a></nav><p className="sidebar-note">“Their stories will not be silenced. Their lives will not be forgotten.”</p></aside>
          <article className="story-article">
            <section className="chapter" id="eileen"><ChapterLabel number="01">EILEEN’S STORY</ChapterLabel><h2>Eileen Smith<br /><em>The Unknown Story</em></h2><Paragraphs page={2} end={6} /><div className="archive-feature"><Photo index={1} /><p>{story[1].slice(6).join(" ")}</p></div></section>
            <section className="chapter" id="mary"><ChapterLabel number="02">MARY’S STORY</ChapterLabel><h2>{story[2][0]}</h2><Paragraphs page={3} end={4} /><div className="portrait-small"><Photo index={2} caption={story[2][4]} /></div>
              <section className="story-section"><h3>{story[3][0]}</h3><Paragraphs page={4} end={2} /><div className="photo-grid"><Photo index={3} /><Photo index={4} /></div><Paragraphs page={4} start={2} end={4} /><p>{story[3].slice(4).join(" ")}</p></section>
              <section className="story-section"><h3>{story[4][0]}</h3><Paragraphs page={5} end={5} /><div className="archive-feature"><Photo index={5} /><p>{story[4][5]}</p></div></section>
              <section className="story-section"><h3>{story[5][0]}</h3><Paragraphs page={6} end={6} /><p className="emphasis">{story[5].slice(6).join(" ")}</p></section>
              <section className="story-section"><h3>{story[6][0]}</h3><Paragraphs page={7} end={5} /><p>{story[6].slice(5).join(" ")}</p></section>
              <section className="story-section"><h3>{story[7][0]}</h3><Paragraphs page={8} /></section>
              <section className="story-section"><h3>{story[8][0]}</h3><Paragraphs page={9} end={2} /><div className="portrait-small"><Photo index={6} caption={story[8][2]} /></div><Paragraphs page={9} start={3} /><Paragraphs page={10} start={0} end={2} /><div className="photo-grid"><Photo index={7} caption="Mary Smith & Brother Christopher (Christy), 1 April 1990" /><Photo index={8} caption="Christy & Mary Smith, 9 September 2001" /></div></section>
              <section className="story-section"><h3>{story[10][0]}</h3><Paragraphs page={11} end={4} /><Photo index={9} caption={story[10].slice(4).join(" ")} /></section>
            </section>
            <section className="chapter" id="christy"><ChapterLabel number="03">CHRISTY’S STORY</ChapterLabel><h2>Remembering<br /><em>Christy</em></h2><Paragraphs page={13} start={0} end={2} /><Photo index={10} /><Paragraphs page={13} start={2} /><div className="photo-grid"><Photo index={11} caption={story[13][0]} /><Photo index={12} caption={story[13][1]} /></div><p>{story[13][2]}</p><div className="photo-grid"><Photo index={13} caption={story[13][3]} /><Photo index={14} caption={story[13][4]} /></div>
              <section className="story-section"><h3>Human Rights Violations</h3><p className="section-subtitle">Encounters With Psychiatrist Eugene Morgan</p><Paragraphs page={15} end={4} /><Photo index={15} caption={story[14][4]} /><div className="photo-grid"><Photo index={16} caption="20 November 2006," /><Photo index={17} caption="20 November 2006" /></div><p className="emphasis">Christopher&apos;s condition worsening</p><Paragraphs page={16} start={1} end={3} /><Photo index={18} caption={story[15][4]} /><p className="emphasis">{story[15][3]}</p></section>
              <section className="story-section"><h3>{story[16][0]}</h3><Paragraphs page={17} end={7} /><div className="photo-grid"><Photo index={19} caption="13 January 2007" /><Photo index={20} caption="13 January 2007" /></div><Paragraphs page={18} start={0} end={5} /><div className="death-notice"><span>{story[17][5]}</span><p>{story[17][6]}</p></div><Photo index={21} /></section>
            </section>
            <section className="chapter" id="never-forgotten"><ChapterLabel number="04">NEVER FORGOTTEN</ChapterLabel><h2>{story[18][0]}</h2><blockquote className="pull-quote">{story[18][1]}</blockquote><Photo index={22} /><Paragraphs page={19} start={2} /></section>
          </article>
        </div>
        <section className="memorial" aria-labelledby="memorial-title"><div className="memorial-inner wrap"><div className="memorial-portrait"><Photo index={24} /></div><div className="memorial-copy"><div className="eyebrow">{story[19][0]}</div><h2 id="memorial-title">Christy Smith</h2><p className="lifespan">{story[19][7]}</p><blockquote>{story[19].slice(1,5).join(" ")}</blockquote><p className="quote-credit">— CHRISTOPHER (CHRISTY) SMITH<br />15 FEBRUARY 2007</p></div></div></section>
        <section className="closing wrap"><div className="closing-photo"><Photo index={25} caption={story[20][1]} /></div><div><div className="eyebrow">IN LOVING MEMORY</div><h2>In Loving Memory</h2><blockquote>{story[20][2]}</blockquote><p className="presented">{story[20][3]}</p><a className="text-link" href="/three-stories-one-family.pdf" download>Download the brochure <span aria-hidden="true">↓</span></a></div></section>
      </main>
      <footer className="site-footer wrap"><a className="footer-title" href="#top">Three Stories, One Family</a><span>Presented by Mary Smith</span><a href="#top">Back to top ↑</a></footer>
    </>
  );
}
