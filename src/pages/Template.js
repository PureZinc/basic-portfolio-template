import Navbar from "../components/Navbar";
import PortfolioSection from "../sections/PortfolioSection";
import ReviewCarousel from "../components/ReviewCarousel";

import { data } from "../Data";

function Template({dataUse}) {
  const webData = data[dataUse];
  return (
    <main>
      <header>
        <Navbar data={webData} />
      </header>

      <section className="hero-bg">
        <div className="container">
            <div className="hero-content">
                <div className="code-icon">
                    <i className="fas fa-code"></i>
                </div>
                <h2 className="header-lg">{webData.website.heroHeaderLG}</h2>
                <div className="header-sm">{webData.website.heroHeaderSM}</div>
                <div className="btn btn-primary">
                    <a href={webData.website.CTALink}>{webData.website.CTA}</a>
                </div>
            </div>
        </div>
      </section>

      <PortfolioSection data={webData} />

      <section className="reviews">
          <div className="container">
              <p>What People Say.</p>
              <h2>Trusted by Clients</h2>
              <ReviewCarousel data={webData} />
          </div>
      </section>
    </main>
  );
}

export default Template;
