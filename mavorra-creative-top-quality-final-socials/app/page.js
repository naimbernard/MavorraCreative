import ClientEffects from './components/ClientEffects';

const services = [
  ['001', 'Branding', 'Build a brand system that makes the business look sharper, safer and easier to remember.'],
  ['002', 'Websites', 'Modern, conversion-focused pages that explain the offer and move visitors to enquire.'],
  ['003', 'Campaigns', 'Launch visuals, sales assets and adverts designed around attention, trust and action.'],
  ['004', 'Content', 'Social media graphics and captions that keep the business visible, consistent and credible.']
];

const outcomes = [
  'Look serious before the first conversation',
  'Explain the offer clearly and quickly',
  'Turn attention into enquiries',
  'Stay consistent without overcomplicating marketing'
];

const proofItems = [
  'Official government communication visuals',
  'Aviation management website experience',
  'Beverage, real estate and business service assets',
  'Brand systems for businesses that need authority'
];

export default function Home() {
  return (
    <>
      <ClientEffects />

      <header>
        <div className="wrap nav">
          <a className="brand magnetic" href="/" aria-label="Mavorra Creative home">
            <img src="/logo.png" alt="Mavorra Creative logo" />
          </a>
          <nav className="navlinks" aria-label="Main navigation">
            <a href="#offers">Offers</a>
            <a href="#proof">Proof</a>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
          </nav>
          <a className="btn magnetic" href="/start-project">Start a project</a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="heroOrnament one" aria-hidden="true"></div>
          <div className="heroOrnament two" aria-hidden="true"></div>

          <div className="wrap heroGrid">
            <div className="heroText reveal isVisible">
              <div className="kicker">Premium marketing made practical</div>
              <h1>Marketing that makes your business easier to choose.</h1>
              <p className="heroCopy">
                Mavorra Creative builds premium brand assets, websites, campaign visuals and monthly marketing systems for businesses that need to look credible, communicate clearly and attract better enquiries.
              </p>
              <div className="heroActions">
                <a className="btn dark magnetic" href="/start-project">Start a project</a>
                <a className="btn magnetic" href="#offers">Explore the offers</a>
              </div>
              <div className="proof">
                <div><b>01</b><span>Official government communications experience</span></div>
                <div><b>02</b><span>Premium à la carte marketing for ambitious brands</span></div>
                <div><b>03</b><span>Marketing Buffet packages for consistent growth</span></div>
              </div>
            </div>

            <div className="showcase reveal isVisible">
              <article className="brandCard magnetic">
                <span className="cardLine l1"></span>
                <span className="cardLine l2"></span>
                <div className="logoBox">
                  <img src="/logo.png" alt="Mavorra Creative wordmark" />
                </div>
                <div className="cardCopy">
                  <h2>Built to be noticed. Designed to be remembered.</h2>
                  <p>Creative direction, premium execution and practical marketing systems for brands that cannot afford to look average.</p>
                  <div className="pills">
                    <span>Branding</span>
                    <span>Websites</span>
                    <span>Campaigns</span>
                    <span>Content</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marqueeTrack">
            <span>À la carte marketing <i>•</i> Marketing Buffet packages <i>•</i> Official communications <i>•</i> Branding <i>•</i> Websites <i>•</i> Campaign visuals <i>•</i></span>
            <span>À la carte marketing <i>•</i> Marketing Buffet packages <i>•</i> Official communications <i>•</i> Branding <i>•</i> Websites <i>•</i> Campaign visuals <i>•</i></span>
          </div>
        </div>

        <section id="offers">
          <div className="wrap">
            <div className="sectionHead reveal">
              <div>
                <p className="eyebrow">Two ways to work with us</p>
                <h2 className="title">Premium when you need depth. Simple when you need consistency.</h2>
              </div>
              <p>
                The right marketing depends on your stage. Some brands need a premium custom build. Others need clean, reliable monthly visibility. We make both options clear.
              </p>
            </div>

            <div className="offerGrid">
              <article className="offer reveal magnetic">
                <small>For established or ambitious brands</small>
                <div>
                  <h3>À la carte marketing.</h3>
                  <p>Choose exactly what your business needs, built at a premium standard and tailored around the commercial outcome.</p>
                  <ul>
                    <li>Brand identity, visual systems and creative direction</li>
                    <li>Websites, landing pages, sales copy and conversion flow</li>
                    <li>Campaign visuals, launch posts, flyers and adverts</li>
                    <li>Strategy, content direction and digital growth assets</li>
                  </ul>
                </div>
                <a className="btn" href="/start-project">Build a custom plan</a>
              </article>

              <article className="offer premiumOffer reveal magnetic">
                <span className="best">Popular</span>
                <small>For small businesses that need momentum</small>
                <div>
                  <h3>Marketing Buffet.</h3>
                  <p>Simple monthly marketing packages for businesses that need clean design, regular content and steady visibility without agency confusion.</p>
                  <ul>
                    <li>Monthly graphics, captions and campaign support</li>
                    <li>Consistent brand look across every public touchpoint</li>
                    <li>Practical assets for offers, launches and announcements</li>
                    <li>Affordable ongoing creative that keeps the business active</li>
                  </ul>
                </div>
                <a className="btn dark" href="/start-project">Ask about packages</a>
              </article>
            </div>
          </div>
        </section>

        <section className="outcomesSection">
          <div className="wrap outcomeGrid">
            <div className="sectionIntro reveal">
              <p className="eyebrow">What clients really buy</p>
              <h2 className="title">Not random design. Commercial confidence.</h2>
            </div>
            <div className="outcomeList">
              {outcomes.map((item, index) => (
                <div className="outcome reveal" key={item}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="proof">
          <div className="wrap">
            <div className="sectionHead reveal">
              <div>
                <p className="eyebrow">Why clients trust us</p>
                <h2 className="title">We create work for places where looking amateur is not an option.</h2>
              </div>
              <p>Trust is the product before the product. Your marketing must make people feel safe enough to enquire, book, buy or believe.</p>
            </div>

            <div className="trustStrip">
              <article className="trust reveal">
                <div>
                  <h3>Official communication experience.</h3>
                  <p>
                    Mavorra Creative has created official government communication visuals, as well as websites and marketing assets for aviation management, beverage companies, real estate and business service brands.
                  </p>
                </div>
                <div className="trustList">
                  {proofItems.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>

              <aside className="proofbox reveal magnetic">
                <div>
                  <b>Trust</b>
                  <span>is the first conversion</span>
                </div>
                <p>Before a client reads every detail, they judge whether the brand looks real, organised and worth their time. That is the gap we design for.</p>
              </aside>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="wrap">
            <div className="sectionHead reveal">
              <div>
                <p className="eyebrow">Services</p>
                <h2 className="title">Marketing assets that make the business easier to choose.</h2>
              </div>
              <p>Every service is built around visibility, credibility and enquiries. Not design for the sake of design.</p>
            </div>

            <div className="serviceGrid">
              {services.map(([number, title, copy]) => (
                <article className="service reveal magnetic" key={number}>
                  <span className="num">{number}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="signatureSection">
          <div className="wrap signatureGrid">
            <div className="signatureCard reveal">
              <img src="/logo.png" alt="Mavorra Creative logo" />
            </div>
            <div className="signatureCopy reveal">
              <p className="eyebrow">The standard</p>
              <h2 className="title">Clean enough to trust. Strong enough to remember.</h2>
              <p>
                Every project is shaped around honesty, clarity and forward-thinking growth. The work should look expensive, but more importantly, it should make the business feel easier to understand and safer to choose.
              </p>
            </div>
          </div>
        </section>

        <section id="process">
          <div className="wrap">
            <div className="sectionHead reveal">
              <div>
                <p className="eyebrow">Process</p>
                <h2 className="title">Clear thinking before creative output.</h2>
              </div>
            </div>

            <div className="process">
              <div className="step reveal"><b>01</b><h3>Diagnose</h3><p>We identify what is stopping people from trusting, understanding or choosing the business.</p></div>
              <div className="step reveal"><b>02</b><h3>Build</h3><p>We create the right assets, from one premium campaign to a full monthly content system.</p></div>
              <div className="step reveal"><b>03</b><h3>Launch</h3><p>We package the work for social, web, ads and sales conversations so it can be used immediately.</p></div>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="wrap reveal">
            <img src="/logo.png" alt="Mavorra Creative logo" />
            <h2 className="title">Tell us what stage your business is at. We will tell you what marketing makes sense.</h2>
            <p>Choose premium à la carte creative work, or start with an affordable Marketing Buffet package built for consistency.</p>
            <a className="btn dark magnetic" href="/start-project">Open the project form</a>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap foot">
          <span>© Mavorra Creative</span>
          <span>Built to be noticed. Designed to be remembered.</span>
          <div className="socialLinks">
            <a href="https://www.instagram.com/mavorracreative?igsh=MTdta25jM3hpanRheQ==" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com/share/1Y4aCrn8jT/" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
      </footer>
    </>
  );
}
