import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import "../assets/CSS/components/form.css";
import appleIcon from "../assets/Images/calendar_macos_bigsur_icon_189482.png";
import gmailIcon from "../assets/Images/gmail_new_logo_icon_159149.png";
import outlookIcon from "../assets/Images/microsoft_outlook_alt_macos_bigsur_icon_189970.png";
import webIcon from "../assets/Images/emblemweb_93503.png";
import PhoneExample from "./PhoneExample";
function AuthForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [fullName, setFullName] = useState("");
  const [selectedCalendar, setSelectedCalendar] = useState("Outlook");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "phone-number":
        setPhoneNumber(value);
        break;
      case "verification-code":
        setVerificationCode(value);
        break;
      case "full-name":
        setFullName(value);
        break;
      case "calendar":
        setSelectedCalendar(value);
        break;
      default:
        break;
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (currentStep < 4) {
        progressForm();
      }
    }
  };

  const handleNextClick = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log({
        phoneNumber,
        verificationCode,
        fullName,
        selectedCalendar,
      });
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div className="first-step-container">
              <PhoneExample />
              <div className="text-container">
                <h1>Schedule With Our App</h1>
                <h6>Quick, Fast, & Easy through Text</h6>
                <section className="input-container">
                  <label htmlFor="phone-number">2FA Authentication</label>
                  <div className="d-f-between">
                    <input
                      type="text"
                      name="phone-number"
                      placeholder="(+1) 123-456-7890"
                      value={phoneNumber}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyPress}
                    />
                    <button
                      className="d-f-center"
                      type="button"
                      onClick={handleNextClick}
                      onKeyDown={handleKeyPress}
                    >
                      <IoIosArrowForward />
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <div className="second-step-container d-f-center-col">
            <h1>TXT'nvite</h1>
            <section>
              <label htmlFor="verification-code">
                Please Enter The Verification Code
              </label>
              <div className="d-f-between">
                <input
                  type="text"
                  name="verification-code"
                  placeholder="123456"
                  value={verificationCode}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyPress}
                />
                <button
                  className="d-f-center"
                  type="button"
                  onClick={handleNextClick}
                  onKeyDown={handleKeyPress}
                >
                  <IoIosArrowForward />
                </button>
              </div>
            </section>
          </div>
        );
      case 3:
        return (
          <div className="second-step-container d-f-center-col">
            <h1>TXT'nvite</h1>
            <section>
              <label htmlFor="full-name">What Should We Call You?</label>
              <div className="d-f-between">
                <input
                  type="text"
                  name="full-name"
                  placeholder="Jiara Martins"
                  value={fullName}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyPress}
                />
                <button
                  className="d-f-center"
                  type="button"
                  onClick={handleNextClick}
                  onKeyDown={handleKeyPress}
                >
                  <IoIosArrowForward />
                </button>
              </div>
            </section>
          </div>
        );
      case 4:
        return (
          <div className="second-step-container d-f-center-col">
            <h1>TXT'nvite</h1>

            <section className="d-f-center-col">
              <label htmlFor="calendar">Set Your Preffered Calender</label>
              <div className="radio-container">
                <label htmlFor="iCal" className="radio-label">
                  <img src={appleIcon} />
                </label>
                <input
                  className="radio-input"
                  id="iCal"
                  type="radio"
                  name="iCal"
                  value="ICal"
                  checked={selectedCalendar === "ICal"}
                  onChange={handleInputChange}
                ></input>
                <label htmlFor="outlook" className="radio-label">
                  <img src={outlookIcon} />
                </label>
                <input
                  id="Outlook"
                  type="radio"
                  value="Outlook"
                  checked={selectedCalendar === "Outlook"}
                  onChange={handleInputChange}
                ></input>
                <label htmlFor="gmail" className="radio-label">
                  <img src={gmailIcon} />
                </label>
                <input
                  id="Gmail"
                  type="radio"
                  value="Gmail"
                  name="gmail"
                  checked={selectedCalendar === "Gmail"}
                  onChange={handleInputChange}
                ></input>
                <label htmlFor="web" className="radio-label">
                  <img src={webIcon} />
                </label>
                <input
                  id="Web"
                  type="radio"
                  value="Web"
                  name="web"
                  checked={selectedCalendar === "Web"}
                  onChange={handleInputChange}
                ></input>
              </div>
              <button
                className="d-f-center"
                type="button"
                onClick={handleNextClick}
                onKeyDown={handleKeyPress}
              >
                <IoIosArrowForward />
              </button>
            </section>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <form className="form-container">
      <section>{renderStep()}</section>
    </form>
  );
}

export default AuthForm;
