import react, { useState } from "react";
import "../styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Contact = (props) => {
  const [editing, setEditing] = useState(false);

  function handleInputChange(event) {
    props.edit(event);
  }

  function handleEditContact() {
    setEditing(true);
  }

  function handleSubmitContact() {
    setEditing(false);
  }

  const { name, email, phone, city, province } = props;

  return (
    <div className="contact-info">
      {editing ? (
        <input
          type="text"
          value={name}
          className="name-input"
          onChange={handleInputChange}
          title="Enter your name"
        />
      ) : (
        <h1 className="name">{name}</h1>
      )}
      <ul className="contact-header">
        {editing ? (
          <input
            type="email"
            value={email}
            className="input-edit"
            id="emailInput"
            onChange={handleInputChange}
            title="Enter your email"
          />
        ) : (
          <li className="email">{email}</li>
        )}
        <FontAwesomeIcon icon={faCircle} className="contact-bullet" />
        {editing ? (
          <input
            type="text"
            value={phone}
            className="input-edit"
            maxLength="12"
            id="phoneInput"
            onChange={handleInputChange}
            title="Enter your phone number"
          />
        ) : (
          <li className="phone">{phone}</li>
        )}
        <FontAwesomeIcon icon={faCircle} className="contact-bullet" />
        {editing ? (
          <div className="location-input">
            <input
              type="text"
              value={city}
              className="input-edit"
              id="cityInput"
              onChange={handleInputChange}
              title="Enter your city (max 30 chars)"
              maxLength="30"
            />
            <select
              name="province"
              id="provinceInput"
              defaultValue="ON"
              onChange={handleInputChange}
              title="Choose your province"
            >
              <option value="AB">Alberta</option>
              <option value="BC">British Columbia</option>
              <option value="MB">Manitoba</option>
              <option value="NB">New Brunswick</option>
              <option value="NL">Newfoundland and Labrador</option>
              <option value="NS">Nova Scotia</option>
              <option value="NT">Northwest Territories</option>
              <option value="NU">Nunavut</option>
              <option value="ON">Ontario</option>
              <option value="PE">Prince Edward Island</option>
              <option value="QC">Quebec</option>
              <option value="SK">Saskatchewan</option>
              <option value="YT">Yukon</option>
            </select>
          </div>
        ) : (
          <li className="city">
            {city}, {province}
          </li>
        )}
      </ul>
      {editing ? (
        <div className="submit" onClick={handleSubmitContact}>
          Save Changes
        </div>
      ) : (
        <div className="edit" onClick={handleEditContact}>
          Edit Contact Info
        </div>
      )}
    </div>
  );
};

export default Contact;
