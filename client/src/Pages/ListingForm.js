import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllVoivodeships } from "./../@@API/preFillService";
import listFormValidation from "../utils/validations/listFormValidation";
import { submitListForm, submitImages } from "./../@@API/offerService";
import Hero from "./../Sections/Hero";
import CarForm from "./../Components/ProductAttrViews/Forms/CarForm";
import MotorcycleForm from "./../Components/ProductAttrViews/Forms/MotorcycleForm";

function ListingForm() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [location, setLocation] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  // Gets states and cities to populate select
  const apiToStateVoivodaships = async () => {
    let res = await getAllVoivodeships();
    if (res) {
      setLocation(res.data);
    }
  };

  //Initiate main state
  const initialFormData = {
    offer: {
      category: "0",
      title: "",
      location: {
        voivodeship: "0",
        city: "0",
      },
      images_url: [],
      offer_type: "",
      price: "",
      availability: [],
      description: "",
      consent: false,
    },
    product_details: {},
  };
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
    }
    console.log(user);
    apiToStateVoivodaships();
  }, [user]);

  // HELPER FUNCTIONS
  const clearProductDetails = () => {
    setFormData((prevState) => ({
      offer: { ...prevState.offer },
      product_details: "",
    }));
  };
  const clearOffer = () => {
    setFormData(initialFormData);
  };
  const clearImages = () => {
    setSelectedImages([]);
  };

  //////////

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsSubmitting(true);
      const validationResult = listFormValidation(formData);
      console.log(validationResult);
      if (Object.keys(validationResult).length === 0) {
        console.log(formData);
        let { status, data } = await submitListForm(formData);
        console.log(status);
        if (status === 200) {
          const formDataImage = new FormData();
          // Append selected images from the selectedImages state
          selectedImages.forEach((image, index) => {
            formDataImage.append(`images_url`, image);
          });

          let submittedOfferId = data.data._id;
          let submittedImage = await submitImages(
            formDataImage,
            submittedOfferId
          );
          console.log(submittedImage);
          clearOffer();
          navigate("/listing-added-successfully", { replace: true });
        }
      } else {
        console.log(validationResult);
        setFormErrors(validationResult);
        setIsSubmitting(false);
      }
    } catch (err) {
      console.log("An Error occured on submit: Err:", err);
      setIsSubmitting(false);
    }
  };

  const onChange = (e) => {
    const { name, type, value, checked, files } = e.target;
    setFormData((prevState) => {
      if (name === "voivodeship" || name === "city") {
        return {
          ...prevState,
          offer: {
            ...prevState.offer,
            location: {
              ...prevState.offer.location,
              [name]: value,
            },
          },
        };
      }

      if (type === "file") {
        console.log(files);

        const filesArray = Array.from(files); // Convert FileList to Array
        setSelectedImages(filesArray);
        console.log(selectedImages);
        return {
          ...prevState,
          offer: {
            ...prevState.offer,
          },
        };
      }
      // consent
      if (name === "consent") {
        const updatedConsent = checked;
        return {
          ...prevState,
          offer: {
            ...prevState.offer,
            consent: updatedConsent,
          },
        };
      }

      // availability
      if (name === "availability") {
        const updatedAvailability = checked // updata Checked status
          ? [...prevState.offer.availability, value]
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
      // update rest of offers
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
        return (
          <CarForm
            formData={formData}
            setFormData={setFormData}
            formErrors={formErrors}
          />
        );
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
                and if you are a
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
                    encType="multipart/form-data"
                  >
                    <div className="col-lg-12">
                      <div className="input-box">
                        <label className="label-text">Category*</label>
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
                            <option value="0">
                              Select a Product Category*
                            </option>
                            <option value="Car">Car</option>
                            <option value="Motorcycle">Motorcycle</option>
                          </select>
                          <p className="error-message">
                            {formErrors["offer.category"]}
                          </p>
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
                          <p className="error-message">
                            {formErrors["offer.title"]}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="input-box">
                        <label className="label-text">Voivodeship*</label>
                        <div className="form-group user-chosen-select-container">
                          <select
                            className="user-chosen-select"
                            name="voivodeship"
                            onChange={onChange}
                            value={formData.offer.location.voivodeship}
                          >
                            <option value="0">Select a Voivodeship</option>
                            {location &&
                              location.map((e) => (
                                <option key={e._id} value={e.name}>
                                  {e.name}
                                </option>
                              ))}
                          </select>
                          <p className="error-message">
                            {formErrors["offer.location.voivodeship"]}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="input-box">
                        <label className="label-text">Cities*</label>
                        <div className="form-group user-chosen-select-container">
                          <select
                            className="user-chosen-select"
                            name="city"
                            onChange={onChange}
                            value={formData.offer.location.city}
                          >
                            <option value="0">Select a City</option>
                            {location &&
                              location.map((e) => {
                                if (
                                  e.name === formData.offer.location.voivodeship
                                ) {
                                  return e.cities.map((i, key) => (
                                    <option key={key} value={i}>
                                      {i}
                                    </option>
                                  ));
                                }
                              })}
                          </select>
                          <p className="error-message">
                            {formErrors["offer.location.city"]}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="input-box">
                        <label className="label-text">Offer Type*</label>
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
                          <p className="error-message">
                            {formErrors["offer.offer_type"]}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="input-box">
                        <label className="label-text">Price*</label>
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
                          <p className="error-message">
                            {formErrors["offer.price"]}
                          </p>
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
                            name="images_url"
                            className="multi file-upload-input with-preview"
                            multiple
                            onChange={onChange}
                          />
                          <span className="file-upload-text">
                            <i className="la la-upload mr-2"></i>Drop files here
                            or click to upload
                          </span>

                          {selectedImages && selectedImages.length !== 0 ? (
                            <div
                              className="MultiFile-list"
                              id="MultiFile1_list"
                            >
                              <div className="MultiFile-label">
                                <a
                                  onClick={clearImages}
                                  className="MultiFile-remove"
                                >
                                  x
                                </a>
                                <span>
                                  {selectedImages.map((e, key) => (
                                    <img
                                      className="MultiFile-preview"
                                      style={{
                                        maxHeight: "100px",
                                        maxWidth: "100px",
                                      }}
                                      key={key}
                                      src={URL.createObjectURL(
                                        new File([e], e.name)
                                      )}
                                      alt={key}
                                    />
                                  ))}
                                </span>
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                          <p className="error-message">
                            {formErrors["offer.images"]}
                          </p>
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
                          <p className="error-message">
                            {formErrors["offer.description"]}
                          </p>
                        </div>
                      </div>
                    </div>
                    {formData.offer.category
                      ? productTypeByCategory(formData.offer.category)
                      : ""}

                    <div className="col-lg-12 pt-5">
                      <div className="custom-checkbox">
                        <input
                          type="checkbox"
                          id="agreeChb2"
                          value={formData.offer.consent}
                          name="consent"
                          onChange={onChange}
                        />
                        <label htmlFor="agreeChb2" className="text-gray">
                          By continuing, you agree to Listhub's
                          <a
                            href="terms-and-conditions.html"
                            className="text-color-2"
                          >
                            Terms of Service
                          </a>
                          and acknowledge our
                          <a
                            href="privacy-policy.html"
                            className="text-color-2"
                          >
                            Privacy Policy.*
                          </a>
                        </label>
                        <p className="error-message">
                          {formErrors["offer.consent"]}
                        </p>
                      </div>
                      <div className="btn-box mt-4">
                        <button
                          type="submit"
                          className={`theme-btn gradient-btn border-0 ${
                            isSubmitting ? "disabled" : ""
                          }`}
                          disabled={isSubmitting}
                        >
                          Create an Offer
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
