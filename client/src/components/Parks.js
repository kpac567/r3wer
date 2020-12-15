import React from 'react';
import { connect } from 'react-redux';

class Parks extends React.Component {
    render() {
        return (
            <div>
                <div class="section section-grey">
                  <div class="container">
                    <div class="w-layout-grid grid-10">
                      <div id="w-node-fd4f95ad34b6-9ef8c60f" class="content center">
                        <h1 class="text-gradient-1">Parks </h1>
                        <div class="text-holder"></div>
                      </div>
                    </div>
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
}
      
export default connect(mapState, actionCreators)(Parks);
