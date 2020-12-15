import React from 'react';
import { connect } from 'react-redux';

class CovidStats extends React.Component {
    render() {
        return (
            <div>
                <div class="section">
                    <div class="container">
                    <h1><span class="text-gradient-1">Covid Stats</span></h1>
                    </div>
                </div>
                <div class="section">
                    <div class="container"></div>
                </div>
                <div class="w-embed w-script">
                    <script src="https://apps.elfsight.com/p/platform.js" defer=""></script>
                    <div class="elfsight-app-3938c394-38e1-4ba1-a74b-ce19e223b9d1"></div>
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
      
export default connect(mapState, actionCreators)(CovidStats);
