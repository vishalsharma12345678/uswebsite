import React, { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";
const options = [
  { value: "FreightType1", label: "Freight Type" },
  { value: "FreightType2", label: "Freight Type 1" },
  { value: "FreightType3", label: "Freight Type 2" },
  { value: "FreightType4", label: "Freight Type 3" },
];

const options2 = [
  { value: "Load1", label: "Load" },
  { value: "Load2", label: "Load 2" },
  { value: "Load3", label: "Load 3" },
  { value: "Load4", label: "Load 4" },
];

export default function CompanyBenefit() {
  const [distance, setDistance] = useState(50);
  const [isImproved, setIsImproved] = useState(false);
  const [isSlidToSide, setIsSlidToSide] = useState(false);

  // const [customerData,setCustomerData] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [address, setAddress] = useState("");

  const initialSelected = options.find(
    (option) => option.label === "Freight Type"
  );
  const initialSelected2 = options2.find((option) => option.label === "Load");

  const [selected, setSelected] = useState(initialSelected);
  const [selected2, setSelected2] = useState(initialSelected2);

  useEffect(() => {
    setIsImproved(distance > 50);
    setIsSlidToSide(distance !== 50 && distance !== 500);
  }, [distance]);

  const handleRangeChange = (e) => {
    const newDistance = parseInt(e.target.value, 10);
    setDistance(newDistance);
  };

  const handleChange = (selectedOption) => {
    setSelected(selectedOption);
  };

  const handleChange2 = (selectedOption2) => {
    setSelected2(selectedOption2);
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    let obj = {
      name: fullname,
      email: email,
      phoneNumber: phone,
      address: address,
      message: message,
    };
    const res = await axios.post(
      "https://api.usfrn.com/customer/create/record",
      obj,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    // console.log(res);
    if (res.data.success == true) {
      setAddress("");
      setEmail("");
      setFullname("");
      setMessage("");
      setPhone("");
    }
  };

  return (
    <section className="company-benefit-one padding">
      <div
        className={`company-benefit-one__img wow fadeInRight ${
          isImproved ? "improved-bg" : ""
        }`}
        data-wow-delay="0ms"
        data-wow-duration="1500ms"
        style={{
          backgroundImage: "url(/img/resource/company-benefit-v1-img1.jpg)",
        }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="company-benefit-one__content">
              <div className="sec-title-two">
                <div className="sub-title">
                  <h5>Company Benefit</h5>
                </div>
                <h2>Why do You Like US Freight Now?</h2>
              </div>

              <div className="company-benefit-one__content-text">
                <p>
                  If you're interested in learning more about our dispatch
                  services or would like to schedule a consultation, please
                  don't hesitate to contact us directly.
                </p>
              </div>

              <ul className="company-benefit-one__content-list">
                <li
                  className="wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="shape1">
                    <img
                      src="/img/shape/company-benefit-v1-shape1.png"
                      alt="Shape 1"
                    />
                  </div>
                  <div className="icon-box">
                    <span className="icon-right-time-delivery-1"></span>
                  </div>
                  <div className="content-box">
                    <h3>Right Time Delivery</h3>
                    <p>
                      We ensure your shipments arrive exactly when needed,
                      thanks to our efficient logistics and planning.
                    </p>
                  </div>
                </li>

                <li
                  className="wow fadeInLeft"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="shape1">
                    <img
                      src="/img/shape/company-benefit-v1-shape1.png"
                      alt="Shape 3"
                    />
                  </div>
                  <div className="icon-box">
                    <span className="icon-safe-package"></span>
                  </div>
                  <div className="content-box">
                    <h3>Safe Package</h3>
                    <p>
                      We prioritize the safety of your packages, ensuring secure
                      handling and transportation from start to finish.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* End Company Benefit One Content */}

          {/* Company Benefit One Form */}
          <div className="col-xl-6">
            <div className="company-benefit-one__form">
              <div className="title-box">
                <h2>Request Quick Quote</h2>
              </div>

              <form method="post" onSubmit={submitHandle}>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        required
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-12">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="form-group">
                      <div
                        className="select-box value-option"
                        id="select-box-home-two"
                      >
                        <Select
                          options={options2}
                          value={selected2}
                          onChange={handleChange2}
                          styles={{
                            control: (provided) => ({
                              ...provided,
                              width: "100%",
                              height: "50px",
                              fontSize: "16px",
                              fontWeight: 500,
                              borderRadius: "4px",
                              backgroundColor: "#fff",
                              color: "#000",
                            }),
                            option: (provided, state) => ({
                              ...provided,
                              color: state.isSelected ? "#fff" : "#000",
                              backgroundColor: state.isSelected
                                ? "#121213"
                                : state.isFocused
                                ? "#FF5E15"
                                : "#fff",
                              fontWeight: 500,
                              lineHeight: "24px",
                              minHeight: "35px",
                              paddingLeft: "18px",
                              paddingRight: "29px",
                              cursor: "pointer",
                              transition: "all 0.2s",
                            }),
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-12">
                    <div className="form-group">
                      <textarea
                        placeholder="Write your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-12">
                    <div className="button-box">
                      <button
                        className="thm-btn"
                        type="submit"
                        data-loading-text="Please wait..."
                      >
                        <span className="txt">Send Request</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* End Company Benefit One Form */}
        </div>
      </div>
    </section>
  );
}
