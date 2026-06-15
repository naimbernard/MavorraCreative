const services = [
  ['001', 'Branding', 'A look and voice that makes the business feel premium, clear and remembered.'],
  ['002', 'Websites', 'Modern pages that explain the offer, build trust and guide visitors to enquire.'],
  ['003', 'Campaigns', 'Launch visuals, flyers and ad creatives built around a specific business objective.'],
  ['004', 'Content', 'Consistent social posts and captions that keep the brand visible and serious.']
];

export default function Home() {
  return (
    <>
      <header>
        <div className="wrap nav">
          <a className="brand" href="/" aria-label="Mavorra Creative home">
            <img src="/logo.png" alt="Mavorra Creative logo" />
          </a>
          <nav className="navlinks" aria-label="Main navigation">
            <a href="#offers">Offers</a>
            <a href="#proof">Proof</a>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
          </nav>
          <a className="btn" href="/start-project">Start a project</a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap heroGrid">
            <div className="fadeIn">
              <div className="kicker">Premium marketing made practical</div>
              <h1>Choose the marketing your business actually needs.</h1>
              <p className="heroCopy">
                Mavorra Creative gives serious brands premium à la carte creative work, and gives growing businesses simple Marketing Buffet packages for consistent visibility without confusion.
              </p>
              <div className="heroActions">
                <a className="btn dark" href="#offers">See the offers</a>
                <a className="btn" href="/start-project">Start a project</a>
              </div>
              <div className="proof">
                <div><b>01</b><span>Official government communications experience</span></div>
                <div><b>02</b><span>Premium custom marketing for ambitious brands</span></div>
                <div><b>03</b><span>Affordable monthly packages for small businesses</span></div>
              </div>
            </div>

            <div className="showcase fadeIn">
              <article className="brandCard">
                <span className="cardLine l1"></span>
                <span className="cardLine l2"></span>
                <div className="logoBox"><img src="/logo.png" alt="Mavorra Creative wordmark" /></div>
                <div className="cardCopy">
                  <h2>Built to be noticed. Designed to be remembered.</h2>
                  <p>For brands that need to look credible, communicate clearly and create demand.</p>
                  <div className="pills">
                    <span>À la carte</span>
                    <span>Buffet packages</span>
                    <span>Official comms</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marqueeTrack">
            <span>À la carte marketing <i>•</i> Marketing Buffet packages <i>•</i> Official communications <i>•</i> Branding <i>•</i> Websites <i>•</i></span>
            <span>À la carte marketing <i>•</i> Marketing Buffet packages <i>•</i> Official communications <i>•</i> Branding <i>•</i> Websites <i>•</i></span>
          </div>
        </div>

        <section id="offers">
          <div className="wrap">
            <div className="sectionHead">
              <div>
                <p className="eyebrow">Two ways to work with us</p>
                <h2 className="title">Premium when you need depth. Simple when you need consistency.</h2>
              </div>
              <p>Clients do not want vague creative services. They want to know which option fits their business, their budget and their stage.</p>
            </div>

            <div className="offerGrid">
              <article className="offer">
                <small>For established or ambitious brands</small>
                <div>
                  <h3>À la carte marketing.</h3>
                  <p>Choose exactly what your business needs, built at a premium standard and tailored around the outcome.</p>
                  <ul>
                    <li>Brand identity and visual direction</li>
                    <li>Websites, landing pages and sales copy</li>
                    <li>Campaign visuals, launch posts and adverts</li>
                    <li>Strategy, content direction and digital growth assets</li>
                  </ul>
                </div>
                <a className="btn" href="/start-project">Build a custom plan</a>
              </article>

              <article className="offer">
                <span className="best">Popular</span>
                <small>For small businesses that need momentum</small>
                <div>
                  <h3>Marketing Buffet.</h3>
                  <p>Simple monthly marketing packages for businesses that need clean design, regular content and steady visibility without overcomplicating the process.</p>
                  <ul>
                    <li>Monthly social media graphics and captions</li>
                    <li>Consistent brand look across every post</li>
                    <li>Practical campaign support for offers and launches</li>
                    <li>Affordable ongoing creative without agency confusion</li>
                  </ul>
                </div>
                <a className="btn dark" href="/start-project">Ask about packages</a>
              </article>
            </div>
          </div>
        </section>

        <section id="proof">
          <div className="wrap">
            <div className="sectionHead">
              <div>
                <p className="eyebrow">Why clients trust us</p>
                <h2 className="title">We create work for places where looking amateur is not an option.</h2>
              </div>
              <p>Trust is the product before the product. Your marketing must make people feel safe enough to enquire, book, buy or believe.</p>
            </div>
            <div className="trustStrip">
              <article className="trust">
                <div>
                  <h3>Official government communication experience.</h3>
                  <p>Mavorra Creative has created official government communication visuals, as well as websites and marketing assets for aviation management, beverage companies, real estate and business service brands.</p>
                </div>
                <div className="trustList">
                  <span>Clear public-facing messaging</span>
                  <span>Premium design with authority</span>
                  <span>Brand assets built for credibility</span>
                </div>
              </article>
              <aside className="proofbox">
                <div><b>Trust</b><span>is the first conversion</span></div>
                <p>Before a client reads every detail, they judge whether the brand looks real, organised and worth their time. That is the gap we design for.</p>
              </aside>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="wrap">
            <div className="sectionHead">
              <div>
                <p className="eyebrow">What clients actually need</p>
                <h2 className="title">Marketing assets that make the business easier to choose.</h2>
              </div>
              <p>Every service is built around visibility, credibility and enquiries. Not random content. Not design for the sake of design.</p>
            </div>
            <div className="serviceGrid">
              {services.map(([number, title, copy]) => (
                <article className="service" key={number}>
                  <span className="num">{number}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process">
          <div className="wrap">
            <div className="sectionHead">
              <div>
                <p className="eyebrow">Process</p>
                <h2 className="title">Clear thinking before creative output.</h2>
              </div>
            </div>
            <div className="process">
              <div className="step"><b>01</b><h3>Diagnose</h3><p>We identify what is stopping people from trusting, understanding or choosing the business.</p></div>
              <div className="step"><b>02</b><h3>Build</h3><p>We create the right assets, from one premium campaign to a full monthly content system.</p></div>
              <div className="step"><b>03</b><h3>Launch</h3><p>We package the work for social, web, ads and sales conversations so it can be used immediately.</p></div>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="wrap">
            <img src="/logo.png" alt="Mavorra Creative logo" />
            <h2 className="title">Tell us what stage your business is at. We will tell you what marketing makes sense.</h2>
            <p>Choose premium à la carte creative work, or start with an affordable Marketing Buffet package built for consistency.</p>
            <a className="btn dark" href="/start-project">Open the project form</a>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap foot">
          <span>© Mavorra Creative</span>
          <span>Built to be noticed. Designed to be remembered.</span>
        </div>
      </footer>
    </>
  );
}
