import react, { Component } from "react";
import "../styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };

    this.handleEditContact = this.handleEditContact.bind(this);
    this.handleSubmitContact = this.handleSubmitContact.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.props.edit(event);
  }

  handleEditContact() {
    this.setState({
      editing: true,
    });
  }

  handleSubmitContact() {
    this.setState({
      editing: false,
    });
  }

  render() {
    const { name, email, phone, city, province } = this.props;

    return (
      <div className="contact-info">
        {this.state.editing ? (
          <input
            type="text"
            value={name}
            className="name-input"
            onChange={this.handleInputChange}
            title="Enter your name"
          />
        ) : (
          <h1 className="name">{name}</h1>
        )}
        <ul className="contact-header">
          {this.state.editing ? (
            <input
              type="email"
              value={email}
              className="input-edit"
              id="emailInput"
              onChange={this.handleInputChange}
              title="Enter your email"
            />
          ) : (
            <li className="email">{email}</li>
          )}
          <FontAwesomeIcon icon={faCircle} className="contact-bullet" />
          {this.state.editing ? (
            <input
              type="text"
              value={phone}
              className="input-edit"
              maxLength="12"
              id="phoneInput"
              onChange={this.handleInputChange}
              title="Enter your phone number"
            />
          ) : (
            <li className="phone">{phone}</li>
          )}
          <FontAwesomeIcon icon={faCircle} className="contact-bullet" />
          {this.state.editing ? (
            <div className="location-input">
              <input
                type="text"
                value={city}
                className="input-edit"
                id="cityInput"
                onChange={this.handleInputChange}
                title="Enter your city (max 30 chars)"
                maxLength="30"
              />
              <select
                name="province"
                id="provinceInput"
                defaultValue="ON"
                onChange={this.handleInputChange}
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
        {this.state.editing ? (
          <div className="submit" onClick={this.handleSubmitContact}>
            Save Changes
          </div>
        ) : (
          <div className="edit" onClick={this.handleEditContact}>
            Edit Contact Info
          </div>
        )}
      </div>
    );
  }
}

export default Contact;
