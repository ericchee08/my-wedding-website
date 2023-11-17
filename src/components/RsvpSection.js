import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/RsvpSectionStyle.css";

const RsvpSection = () => {
  const [response, setResponse] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    attending: false,
    preferredDishes: "",
    allergies: "",
    stayingForEveningFood: "",
    additionalInfo: "",
  });

  const handleButtonClick = (responseType) => {
    setResponse(responseType);
  };

  const handleInputChange = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  const handleFoodPreferenceSelect = (food) => {
    const updatedDishes = food; 
  
    handleInputChange("preferredDishes", updatedDishes);
  };
  

  const handleSubmit = () => {
    console.log("Form Data:", formData);
  };

  return (
    <div className="rsvp-section-container">
      <div className="rsvp-container">
        <div className="rsvp-headers">
          <p>Eric & Lauren</p>
          <p>Calke Abbey</p>
          <p>Monday, June 10, 2024</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="rsvp-input-container">
            <div className="input-name">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}/>
            </div>
            
            <div className="input-name">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}/>
            </div>
          </div>

          <div className="rsvp-buttons">
            <div
              className={`attendance-button ${response === "attending" && "selected"}`}
              onClick={() => handleButtonClick("attending")}>I can attend
            </div>
            <div className={`attendance-button ${response === "notAttending" && "selected"}`}
              onClick={() => handleButtonClick("notAttending")}>Sorry I can't attend
            </div>
          </div>

          {response === "attending" && (
            <div className="attending">
              <label htmlFor="preferredDishes">1. What dishes would you prefer at our wedding?</label>
              <div className="food-select-container">
                <div className={`box-select ${formData.preferredDishes.includes("Chicken") && "selected"}`}
                  onClick={() => handleFoodPreferenceSelect("Chicken")}>Chicken
                </div>
                <div
                  className={`box-select ${formData.preferredDishes.includes("Duck") && "selected"}`}
                  onClick={() => handleFoodPreferenceSelect("Duck")}>Duck
                </div>
                <div
                  className={`box-select ${formData.preferredDishes.includes("Rissotto") && "selected"}`}
                  onClick={() => handleFoodPreferenceSelect("Rissotto")}>Rissotto
                </div>
              </div>

              <label htmlFor="allergies">2. Do you have any allergies?</label>
              <textarea id="allergies" className="allergy-input" value={formData.allergies}
                onChange={(e) => handleInputChange("allergies", e.target.value)}/>

              <label htmlFor="stayingForEveningFood">3. Will you be staying for evening food?</label>
              <div className="food-select-container">
                <div className={`box-select ${formData.stayingForEveningFood === "Yes" && "selected"}`}
                  onClick={() => handleInputChange("stayingForEveningFood", "Yes")}>Yes
                </div>
                <div className={`box-select ${formData.stayingForEveningFood === "No" && "selected"}`}
                  onClick={() => handleInputChange("stayingForEveningFood", "No")}>No
                </div>
              </div>

              <label htmlFor="additionalInfo">4. Additional Information</label>
              <textarea id="additionalInfo" className="additional-input" value={formData.additionalInfo}
                onChange={(e) => handleInputChange("additionalInfo", e.target.value)}/>

              <div className="submit-button" onClick={handleSubmit}>
                Submit
              </div>

            </div>
          )}
        </form>
      </div>
      <div id="back">
        <Link to="/" id="back-button">
          Back
        </Link>
      </div>
    </div>
  );
};

export default RsvpSection;