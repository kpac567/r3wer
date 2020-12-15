
import React from 'react';
import { connect } from 'react-redux';

class LoginForm extends React.Component {
    render() {
        return (
            <div>
              <div class="section">
                <div class="container">
                  <div class="text-center">
                    <h1 class="text-gradient-1">Login... Start Crushing</h1>
                  </div>
                </div>
              </div>
              <div class="section">
                <div class="container">
                  <div class="w-form">
                    <form id="email-form" name="email-form" data-name="Email Form">
                        <label for="name">Profile Name</label>
                        <input type="text" class="w-input" maxlength="256" name="name" data-name="Name" placeholder="" id="name" />
                        <label for="Password">Password</label>
                        <input type="password" class="w-input" maxlength="256" name="Password" data-name="Password" placeholder="" id="Password" required="" />
                        <input type="submit" value="Submit" data-wait="Please wait..." class="w-button" />
                    </form>
                    <div class="w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div class="w-form-fail">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div>
                  <h2 class="extra-bold-text"></h2>
                </div>
              </div>
              <div class="section"></div>
              <div class="preloader">
                <div class="preloader-content">
                    <div class="preloader-line">
                        <div class="preloader-gradient"></div>
                    </div>
                    <img src="images/Logo-Final-1-1.png" loading="lazy" width="649" sizes="100vw" srcset="images/Logo-Final-1-1-p-500.png 500w, images/Logo-Final-1-1-p-800.png 800w, images/Logo-Final-1-1-p-1080.png 1080w, images/Logo-Final-1-1.png 3218w" alt="" />
                </div>
              </div>
            </div>
        )
    }
}

function mapState(state) {
  return {};
}

const actionCreators = {
};

export default connect(mapState, actionCreators)(LoginForm);
