function CategoriesBar() {
  return (
    <>
      <div className="highlighted-categories bg-dark-opacity margin-top-130px">
        <div className="highlight-lists d-flex justify-content-center align-items-center">
          <h5 className="highlighted__title pr-5">
            Browse by Category <i className="la la-arrow-right ml-2"></i>
          </h5>
          <div className="hero-category-item rounded-0">
            <a href="#" className="d-block hero-cat-link rounded-0">
              <span className="icon-element bg-1 mx-auto">
                <i className="las la-car"></i>
              </span>
              Cars
            </a>
          </div>
          <div className="hero-category-item rounded-0">
            <a href="#" className="d-block hero-cat-link rounded-0">
              <span className="icon-element bg-2 mx-auto">
                <i className="las la-motorcycle"></i>
              </span>
              Motorcycles
            </a>
          </div>
          <div className="hero-category-item rounded-0">
            <a href="#" className="d-block hero-cat-link rounded-0">
              <span className="icon-element bg-3 mx-auto">
                <i className="las la-skiing-nordic"></i>
              </span>
              Scooters
            </a>
          </div>
          <div className="hero-category-item rounded-0">
            <a href="#" className="d-block hero-cat-link rounded-0">
              <span className="icon-element bg-4 mx-auto">
                <i className="las la-biking"></i>
              </span>
              Bicycle
            </a>
          </div>
          <div className="hero-category-item rounded-0">
            <a href="#" className="d-block hero-cat-link rounded-0">
              <span className="icon-element bg-5 mx-auto">
                <i className="la la-gear"></i>
              </span>
              Accessories
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesBar;
