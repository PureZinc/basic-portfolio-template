import Navbar from "./components/Navbar";
import PortfolioSection from "./sections/PortfolioSection";
import ReviewCarousel from "./components/ReviewCarousel";

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
                <h2 className="header-lg">Code. Eat. Sleep</h2>
                <div className="header-sm">
                    I create meaningful solutions to your brand and products.
                    Give your customers the best experience possible.
                </div>
                <div className="btn btn-primary">
                    <a href="/" data-open="about">Let's Talk Now</a>
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
