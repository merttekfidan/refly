import MainSearch from "./../Components/MainSearch";
import CategoriesBar from "./../Sections/CategoriesBar";
import ArticlesSection from "./../Sections/ArticlesSection";
import HowToSection from "./../Sections/HowToSection";
import RecentOffers from "../Sections/RecentOffers";
function Home() {
  return (
    <>
      <section className="hero-wrapper hero-bg-4 pb-0">
        <div className="overlay opacity-9"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-heading">
                <div className="section-heading">
                  <h2 className="sec__title mb-3 line-height-60">
                    Listhub helps you find out whats happening in your city,
                    Let's explore.
                  </h2>
                  <p className="sec__desc line-height-35">
                    Simple, Yet powerful local business directory where buyers
                    and sellers engage each others with trust.
                  </p>
                </div>
                <div className="btn-box padding-top-35px">
                  <a
                    href="about.html"
                    className="theme-btn gradient-btn shadow-none"
                  >
                    Know More<i className="la la-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 ml-auto">
              <MainSearch />
            </div>
          </div>
        </div>
        <CategoriesBar />
      </section>
      <RecentOffers />

      <div className="section-block"></div>

      <HowToSection />
      <ArticlesSection />

      <section className="cta-area cta-bg bg-fixed section-padding text-center">
        <div className="overlay opacity-9"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cta-content p-0">
                <div className="section-heading">
                  <div className="section-badge pb-3">
                    <span className="ribbon ribbon-lg">Join with us</span>
                  </div>
                  <h2 className="sec__title mb-4 font-size-45 line-height-60 text-white">
                    Grow Your Marketing With{" "}
                    <span className="text-color-16">Listhub</span> and <br />
                    Be Happy With Your Business.
                  </h2>
                  <p className="sec__desc text-white line-height-35 mb-3">
                    Your business deserves efficiently unleash cross-media
                    information without cross-media value <br />
                    Quickly maximize timely deliverables for real-time schemas.
                  </p>
                </div>
                <div className="btn-box pt-4">
                  <a href="/#" className="theme-btn gradient-btn">
                    <i className="la la-user-plus mr-2"></i>Click Me to Start
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
