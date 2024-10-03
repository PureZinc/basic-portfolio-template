import Navbar from "./components/Navbar";
import PortfolioSection from "./sections/PortfolioSection";
import ReviewCarousel from "./components/ReviewCarousel";

import { website } from "./Data";

function App() {
  return (
    <main>
      <header>
        <Navbar />
      </header>

      <section className="hero-bg">
        <div className="container">
            <div className="hero-content">
                <div className="code-icon">
                    <i className="fas fa-code"></i>
                </div>
                <h2 className="header-lg">{website.heroHeaderLG}</h2>
                <div className="header-sm">{website.heroHeaderSM}</div>
                <div className="btn btn-primary">
                    <a href={website.CTALink}>{website.CTA}</a>
                </div>
            </div>
        </div>
      </section>

      <PortfolioSection />

      <section className="reviews">
          <div className="container">
              <p>What People Say.</p>
              <h2>Trusted by Clients</h2>
              <ReviewCarousel />
          </div>
      </section>
    </main>
  );
}

export default App;
