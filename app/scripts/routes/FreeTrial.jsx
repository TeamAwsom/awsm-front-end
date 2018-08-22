import React, { Fragment } from 'react';
import Header from '../components/Header';

export default class FreeTrial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputvalue: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputvalue: event.target.value,
    });
  }
  render() {
    return (
      <Fragment>
        <Header />
        <div className="app__container">
          <div className="app__freetrial_description">
            <h1>Let's find a great teacher in your area!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="app__form">
            <form>
              <div className="app__form_item">
                <div>What instrument are you interested in learning? *</div>
                <select className="app__form_dropdownbox">
                  <option value="volvo">Piano</option>
                  <option value="saab">Guitar</option>
                  <option value="mercedes">Didgeridoo</option>
                  <option value="audi">Turntables</option>
                </select>
              </div>
              <div className="app__form_item">
                <div>
                  Which musical style are you most interested in learning? *
                </div>
                <select className="app__form_dropdownbox">
                  <option value="volvo">Classical</option>
                  <option value="saab">Jazz</option>
                  <option value="mercedes">Rock</option>
                  <option value="audi">Opera</option>
                </select>
              </div>
              <div className="app__form_item">
                <div>Previous musical experience: *</div>
                <select className="app__form_dropdownbox">
                  <option value="volvo">Beginner: 0-2 years</option>
                  <option value="saab">Intermediate: 3-4 years</option>
                  <option value="mercedes">Advanced: 5+ years</option>
                </select>
              </div>
              <div className="app__form_item">
                <div>Do you have an instrument already? *</div>
                <select className="app__form_dropdownbox">
                  <option value="volvo">No</option>
                  <option value="saab">Yes</option>
                </select>
              </div>
              <div className="app__form_item">
                <div>Address: *</div>
                <input
                  type="text"
                  className="app__form_input"
                  value={this.state.inputvalue}
                  onChange={this.handleChange}
                />
                <div className="app__form_addresssub">Address 1</div>
                <input
                  type="text"
                  className="app__form_input"
                  value={this.state.inputvalue}
                  onChange={this.handleChange}
                />
                <div className="app__form_addresssub">Address 2</div>
                <input
                  type="text"
                  className="app__form_input"
                  value={this.state.inputvalue}
                  onChange={this.handleChange}
                />
                <div className="app__form_addresssub">City</div>
                <input
                  type="text"
                  className="app__form_input"
                  value={this.state.inputvalue}
                  onChange={this.handleChange}
                />
                <div className="app__form_addresssub">State</div>
                <input
                  type="text"
                  className="app__form_input"
                  value={this.state.inputvalue}
                  onChange={this.handleChange}
                />
                <div className="app__form_addresssub">Zip</div>
              </div>
              <div className="app__form_item">
                <div>What are the best days and times for lessons? *</div>
                <ul className="list-unstyled">
                  <li>
                    <button type="button" className="btn btn-outline-secondary">
                      Monday
                    </button>
                  </li>
                  <li>
                    <button type="button" className="btn btn-outline-secondary">
                      Tuesday
                    </button>
                  </li>
                  <li>
                    <button type="button" className="btn btn-outline-secondary">
                      Wednesday
                    </button>
                  </li>
                  <li>
                    <button type="button" className="btn btn-outline-secondary">
                      Thursday
                    </button>
                  </li>
                  <li>
                    <button type="button" className="btn btn-outline-secondary">
                      Friday
                    </button>
                  </li>
                  <li>
                    <button type="button" className="btn btn-outline-secondary">
                      Saturday
                    </button>
                  </li>
                  <li>
                    <button type="button" className="btn btn-outline-secondary">
                      Sunday
                    </button>
                  </li>
                </ul>
              </div>
              <div className="app__form_item">
                <div>Allergies:</div>
                <input
                  className="app__form_input"
                  type="text"
                  value={this.state.inputvalue}
                  onChange={this.handleChange}
                />
              </div>
              <div className="app__form_item">
                <div>Special Needs:</div>
                <input
                  className="app__form_input"
                  type="text"
                  value={this.state.inputvalue}
                  onChange={this.handleChange}
                />
              </div>
              <div className="app__form_container">
                <button type="submit" className="btn btn-primary">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}