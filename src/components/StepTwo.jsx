import React, { Component } from "react";

class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sport: "",
      conference: "",
    };
  }

  setSport = (x) => {
    this.setState({ sport: x.target.value });
  };
  setConference = (x) => {
    this.setState({ conference: x });
  };

  render() {
    if (this.props.currentStep !== 2) {
      return null;
    }
    return (
      <div className="container">
        <h3>Step 2 of 26</h3>
        {/* <p className="section-p">Current Community College Information</p> */}
        <div className="row">
          <div className="col-md">
            <div className="mb-3">
              <label htmlFor="communityCollegeInfo" className="form-label">
                Current Community College Information
              </label>
              <input
                className="form-control"
                type="text"
                id="communityCollegeInfo"
                name="communityCollegeInfo"
                value={this.props.communityCollegeInfo}
                onChange={this.props.handleChange}
                placeholder="Description (optional)"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="communityCollege" className="form-label">
                Current Community College Name
              </label>
              <input
                className="form-control"
                type="text"
                id="communityCollege"
                name="communityCollege"
                value={this.props.communityCollege}
                onChange={this.props.handleChange}
                placeholder="example: Golden West College"
              />
            </div>

            <div className="mb-3" onChange={this.props.handleChange}>
              <label htmlFor="sport" className="form-label">
                Sport
              </label>
              <select
                className="form-select"
                name="sport"
                value={this.props.sport}
                onChange={this.setSport}
              >
                <option defaultValue>Please Select A Sport</option>
                <option value="Men's Baseball">Men's Baseball</option>
                <option value="Men's Basketball">Men's Basketball</option>
                <option value="Men's Cross Country">Men's Cross Country</option>
                <option value="Men's Football">Men's Football</option>
                <option value="Men's Soccer">Men's Soccer</option>
                <option value="Men's Swimming And Diving">
                  Men's Swimming And Diving
                </option>
                <option value="Men's Track And Field">
                  Men's Track And Field
                </option>
                <option value="Men's Volleyball">Men's Volleyball</option>
                <option value="Men's Water Polo">Men's Water Polo</option>
                <option value="Woman's Basketball">Women's Basketball</option>
                <option value="Woman's Beach Volleyball">
                  Women's Beach Volleyball
                </option>
                <option value="Woman's Cross Country">
                  Women's Cross Country
                </option>
                <option value="Woman's Soccer">Women's Soccer</option>
                <option value="Woman's Softball">Women's Softball</option>
                <option value="Woman's Swimming And Diving">
                  Women's Swimming And Diving
                </option>
                <option value="Woman's Track And Field">
                  Women's Track And Field
                </option>
                <option value="Woman's Volleyball">Women's Volleyball</option>
                <option value="Woman's Water Polo">Women's Water Polo</option>
              </select>
            </div>

            
            {/* <div className="mb-3">
              <label htmlFor="communityCollegeStartMonth" className="form-label">
                Current Community College Start Month
              </label>
              <input
                className="form-control"
                type="text"
                id="communityCollegeStartMonth"
                name="currentCollegeStartMonth"
                value={this.props.currentCollegeStartYear}
                onChange={this.props.handleChange}
                placeholder="example: Oct"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="currentCollegeEndYear" className="form-label">
                Current Community College Start Year
              </label>
              <input
                className="form-control"
                type="text"
                id="currentCollegeEndYear"
                name="currentCollegeEndYear"
                value={this.props.currentCollegeEndYear}
                onChange={this.props.handleChange}
                placeholder="example: 2019"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="currentCollegeStartYear" className="form-label">
                Current Community College End Month
              </label>
              <input
                className="form-control"
                type="text"
                id="currentCollegeStartYear"
                name="currentCollegeStartYear"
                value={this.props.currentCollegeStartMonth}
                onChange={this.props.handleChange}
                placeholder="example: 2020"
              />
            </div> */}

            <div className="mb-3">
              <label>Athletic Conference</label>
              <p>
                <small>
                  All Sport Offerings are hosted in the Orange Empire Conference
                  (OEC), except Men's Football which is hosted in the Southern
                  California Football Association (SCFA)
                </small>
              </p>


              <div
                className="d-flex justify-content-start"
                onChange={this.props.handleChange}
              >
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="athleticConference"
                    id="oec"
                    value="Orange Empire Conference (OEC)"
                    onChange={() =>
                      this.setConference("Orange Empire Conference (OEC)")
                    }
                    checked={
                      this.props.athleticConference ===
                      "Orange Empire Conference (OEC)"
                    }
                  />
                  <label className="form-check-label" htmlFor="oec">
                    Orange Empire Conference (OEC)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="athleticConference"
                    id="scfa"
                    value="Southern California Football Association (SCFA)"
                    onChange={() =>
                      this.setConference(
                        "Southern California Football Association (SCFA)"
                      )
                    }
                    checked={
                      this.props.athleticConference ===
                      "Southern California Football Association (SCFA)"
                    }
                  />
                  <label className="form-check-label" htmlFor="scfa">
                    Southern California Football Association (SCFA)
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>After Section 2 Continue To Next Section</p>
      </div>
    );
  }
}

export default StepTwo;
