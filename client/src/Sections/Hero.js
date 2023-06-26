import { Link } from "react-router-dom";
function Hero({ imageSrc }) {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(./theme/assets/images/heroImages/${imageSrc})`,
        }}
        className="breadcrumb-area bread-overlay overflow-hidden"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-content d-flex flex-wrap align-items-center justify-content-between">
                <div className="section-heading">
                  <h2 className="sec__title text-white font-size-40 mb-0">
                    Submit Your Listing
                  </h2>
                </div>
                <ul className="list-items bread-list ">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Add New Listing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bread-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="50px"
            viewBox="0 0 1200 150"
            preserveAspectRatio="none"
          >
            <g>
              <path
                fillOpacity="0.2"
                d="M0,150 C600,100 1000,50 1200,-1.13686838e-13 C1200,6.8027294 1200,56.8027294 1200,150 L0,150 Z"
              ></path>
            </g>
            <g
              className="pix-waiting animated"
              data-anim-type="fade-in-up"
              data-anim-delay="300"
            >
              <path
                fill="rgba(255,255,255,0.8)"
                d="M0,150 C600,120 1000,80 1200,30 C1200,36.8027294 1200,76.8027294 1200,150 L0,150 Z"
              ></path>
            </g>
            <path
              fill="#fff"
              d="M0,150 C600,136.666667 1000,106.666667 1200,60 C1200,74 1200,104 1200,150 L0,150 Z"
            ></path>
            <defs></defs>
          </svg>
        </div>
      </section>
    </>
  );
}

export default Hero;
