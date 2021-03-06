import React, { Component } from "react";

class StepThree extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentStep !== 3) {
      return null;
    }
    return (
      <div className="container">
        <h3>Step 3 of 26</h3>
        <div className="row">
          <div className="col-md">

            <div className="mb-3">
              <label htmlFor="highSchoolInfo" className="form-label">
                High School Information
              </label>
              <input
                className="form-control"
                type="text"
                id="highSchoolInfo"
                name="highSchoolInfo"
                value={this.props.highSchoolInfo}
                onChange={this.props.handleChange}
                placeholder="Description (optional)"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="highSchool" className="form-label">
                Name Of High School You Last Attended
              </label>
              <input
                className="form-control"
                type="text"
                id="highSchool"
                name="highSchool"
                value={this.props.highSchool}
                onChange={this.props.handleChange}
                placeholder="example Hoover High School"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="highSchoolCityState" className="form-label">
                What CITY, STATE And, ZIP Code Was Your High School In? 
              </label>
              <input
                className="form-control"
                type="text"
                id="highSchoolCityState"
                name="highSchoolCityState"
                value={this.props.highSchoolCityState}
                onChange={this.props.handleChange}
                placeholder="example Huntington Beach, CA 90210"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="highSchoolMonthYearGraduation" className="form-label">
                What was the MONTH And YEAR You Graduated High School?
              </label>
              <input
                className="form-control"
                type="text"
                id="highSchoolMonthYearGraduation"
                name="highSchoolMonthYearGraduation"
                value={this.props.highSchoolMonthYearGraduation}
                onChange={this.props.handleChange}
                placeholder="example June 2020"
              />
            </div>

          </div>
        </div>
        <p>After Section 3 Continue To Next Section</p>
      </div>
    );
  }
}

export default StepThree;
