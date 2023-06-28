import { useState } from "react";
import Hero from "./../Sections/Hero";
import CarForm from "./../Components/ProductAttrViews/Forms/CarForm";
import MotorcycleForm from "./../Components/ProductAttrViews/Forms/MotorcycleForm";

function ListingForm() {
  const [formData, setFormData] = useState({
    offer: {
      category: "",
      title: "",
      location: "",
      offer_type: "",
      price: "",
      availability: [],
      images_url: [],
      description: "",
    },
    product_details: {},
  });
  const [images, setImages] = useState();
  const clearProductDetails = () => {
    setFormData((prevState) => ({
      offer: { ...prevState.offer },
      product_details: "",
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const onChange = (e) => {
    const { name, type, value, checked, files } = e.target;

    setFormData((prevState) => {
      if (type === "file") {
        console.log("file:", files);
        console.log("file:", URL.createObjectURL(files[0]));
        let imageArr = [...files].map((e) => URL.createObjectURL(e));
        setImages(imageArr);
        console.log(images);
        return {
          ...prevState,
          offer: {
            ...prevState.offer,
            images_url: [...files].map((e) => e.name),
          },
        };
      }
      // checkbox group
      if (type === "checkbox") {
        const updatedAvailability = checked
          ? // updata Checked status
            [...prevState.offer.availability, value]
          : // update Unchecked status
            prevState.offer.availability.filter((item) => item !== value);

        return {
          ...prevState,
          offer: {
            ...prevState.offer,
            availability: updatedAvailability,
          },
        };
      }
      // update rest of states
      return {
        ...prevState,
        offer: {
          ...prevState.offer,
          [name]: value,
        },
      };
    });
    console.log(formData);
  };
  const productTypeByCategory = (category) => {
    switch (category) {
      case 0:
        return "";
      case "Car":
        return <CarForm formData={formData} setFormData={setFormData} />;
      case "Motorcycle":
        return <MotorcycleForm formData={formData} setFormData={setFormData} />;
      default:
        return "";
    }
  };
  return (
    <>
      <Hero imageSrc="add-listing-bg.jpg" />
      <section className="add-listing-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div
                className="alert alert-info font-size-15 text-color"
                role="alert"
              >
                <span className="font-weight-semi-bold">
                  Returning User? Please
                </span>
                <a href="/#" className="alert-link text-color-2">
                  log in
                </a>
                and if you are a{" "}
                <span className="font-weight-semi-bold">
                  New User, Continue Below
                </span>{" "}
                and register along with this submission.
              </div>
              <div className="block-card mb-4">
                <div className="block-card-header">
                  <h2 className="widget-title">General Information</h2>
                  <div className="stroke-shape"></div>
                </div>
                <div className="block-card-body">
                  <form
                    method="post"
                    className="form-box row"
                    onSubmit={onSubmit}
                  >
                    <div className="col-lg-12">
                      <div className="input-box">
                        <label className="label-text">Category</label>
                        <div className="form-group user-chosen-select-container">
                          <select
                            className="user-chosen-select"
                            onChange={(e) => {
                              onChange(e);
                              clearProductDetails();
                            }}
                            name="category"
                            value={formData.offer.category}
                          >
                            <option value="0">Select a Product Category</option>
                            <option value="Car">Car</option>
                            <option value="Motorcycle">Motorcycle</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-box">
                        <label className="label-text d-flex align-items-center ">
                          Title
                          <i
                            className="la la-question tip ml-1"
                            title="Put your product title here and tell the name of your product."
                          ></i>
                        </label>
                        <div className="form-group">
                          <span className="la la-briefcase form-icon"></span>
                          <input
                            className="form-control"
                            type="text"
                            name="title"
                            onChange={onChange}
                            placeholder="Example: Super Duper Car"
                            value={formData.offer.title}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="input-box">
                        <label className="label-text">Location</label>
                        <div className="form-group">
                          <span className="la la-map form-icon"></span>
                          <input
                            className="form-control"
                            id="location"
                            type="text"
                            name="location"
                            placeholder="Warsaw - Poland"
                            onChange={onChange}
                            value={formData.offer.location}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="input-box">
                        <label className="label-text">Offer Type</label>
                        <div className="form-group user-chosen-select-container">
                          <select
                            className="user-chosen-select"
                            name="offer_type"
                            onChange={onChange}
                            value={formData.offer.offer_type}
                          >
                            <option value="0">Select an Offer Type</option>
                            <option value="buy">Buy</option>
                            <option value="sell">Sell</option>
                            <option value="rental">Rental</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="input-box">
                        <label className="label-text">Price</label>
                        <div className="form-group">
                          <span className="la la-map form-icon"></span>
                          <input
                            className="form-control"
                            type="text"
                            name="price"
                            placeholder="100"
                            onChange={onChange}
                            value={formData.offer.price}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-box">
                        <label className="label-text">Availability</label>
                        <div className="form-group d-flex flex-wrap">
                          <div className="col-lg-4 custom-checkbox">
                            <input
                              onChange={onChange}
                              type="checkbox"
                              name="availability"
                              value="uber"
                              id="uber"
                              checked={formData.offer.availability.includes(
                                "uber"
                              )}
                            />
                            <label htmlFor="uber">Uber</label>
                          </div>
                          <div className="col-lg-4 custom-checkbox">
                            <input
                              onChange={onChange}
                              type="checkbox"
                              name="availability"
                              value="uber-eats"
                              id="uber-eats"
                              checked={formData.offer.availability.includes(
                                "uber-eats"
                              )}
                            />
                            <label htmlFor="uber-eats">UberEats</label>
                          </div>
                          <div className="col-lg-4 custom-checkbox">
                            <input
                              onChange={onChange}
                              type="checkbox"
                              name="availability"
                              value="bolt"
                              id="bolt"
                              checked={formData.offer.availability.includes(
                                "bolt"
                              )}
                            />
                            <label htmlFor="bolt">Bolt</label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12 pb-3">
                      <div className="input-box">
                        <label className="label-text">Images</label>
                        <div className="file-upload-wrap">
                          <input
                            type="file"
                            name="files[]"
                            className="multi file-upload-input with-preview"
                            multiple
                            onChange={onChange}
                          />
                          <span className="file-upload-text">
                            <i className="la la-upload mr-2"></i>Drop files here
                            or click to upload
                          </span>

                          {images ? (
                            <div
                              className="MultiFile-list"
                              id="MultiFile1_list"
                            >
                              <div className="MultiFile-label">
                                <a
                                  onClick={() => setImages("")}
                                  className="MultiFile-remove"
                                >
                                  x
                                </a>
                                <span>
                                  {images.map((e, key) => (
                                    <img
                                      className="MultiFile-preview"
                                      style={{
                                        maxHeight: "100px",
                                        maxWidth: "100px",
                                      }}
                                      key={key}
                                      src={e}
                                      alt={key}
                                    />
                                  ))}
                                </span>
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-box">
                        <label className="label-text">Description</label>
                        <div className="form-group">
                          <textarea
                            className="message-control form-control user-text-editor pl-3"
                            name="description"
                            onChange={onChange}
                            value={formData.offer.description}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    {formData.offer.category
                      ? productTypeByCategory(formData.offer.category)
                      : ""}

                    <div className="col-lg-12 pt-5">
                      <div className="custom-checkbox">
                        <input type="checkbox" id="agreeChb2" />
                        <label htmlFor="agreeChb2" className="text-gray">
                          By continuing, you agree to Listhub's{" "}
                          <a
                            href="terms-and-conditions.html"
                            className="text-color-2"
                          >
                            Terms of Service
                          </a>{" "}
                          and acknowledge our{" "}
                          <a
                            href="privacy-policy.html"
                            className="text-color-2"
                          >
                            Privacy Policy
                          </a>
                          .
                        </label>
                      </div>
                      <div className="btn-box mt-4">
                        <button
                          type="submit"
                          className="theme-btn gradient-btn border-0"
                        >
                          Save & Preview
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ListingForm;
