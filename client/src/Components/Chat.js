import React from 'react';
import { connect } from 'react-redux';

// import './../css/style.css';

class Chat extends React.Component {
    render() {
        return (
            <>
                <div class="join-container">
                    <header class="join-header">
                        <h1>Crush 19</h1>
                    </header>
                    <main class="join-main">
                        <form action="chat.html">
                            <div class="form-control">
                                <label for="username">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder="Enter username..."
                                    required
                                />
                            </div>
                            <div class="form-control">
                                <label for="room">Room</label>
                                <select name="room" id="room">
                                    <option value="Vaccinated">Vaccinated</option>
                                    <option value="Anti-Bodies">Anti-Bodies</option>
                                    <option value="High Risk">High Risk</option>
                                    <option value="Low Risk">Low Risk</option>
                                    <option value="Waiting on Resluts">Waiting on Resluts</option>
                                    <option value="Unknown">Unkown</option>
                                </select>
                            </div>
                            <button type="submit" class="btn">Join Chat</button>
                        </form>
                    </main>
                </div>
            </>
        )
    }
}


function mapState(state) {
    return {};
}

const actionCreators = {
}
      
export default connect(mapState, actionCreators)(Chat);
