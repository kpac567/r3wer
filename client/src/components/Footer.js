import React from 'react';
import { connect } from 'react-redux';

class Footer extends React.Component {
    render() {
        return (
            
                <div class="footer">
                  <div class="gradient-line"></div>
                  <div class="container w-container">
                    <div class="space-small"><img src="images/Logo-Final-1.png" loading="lazy" width="500" sizes="(max-width: 767px) 92vw, 500px" srcset="images/Logo-Final-1-p-500.png 500w, images/Logo-Final-1-p-800.png 800w, images/Logo-Final-1-p-1080.png 1080w, images/Logo-Final-1.png 3218w" alt="" /></div>
                    <div class="footer-flex-container"></div>
                  </div>
                </div>
            
        )
    }
}


function mapState(state) {
    return {};
}

const actionCreators = {
}
      
export default connect(mapState, actionCreators)(Footer);
