import axios from "axios";
import React, { Component } from "react";
const UserContext = React.createContext();
//Provider, consumer

const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_USER":
            return {
                ...state,//spret operatörü javascript 6 ile gelen bir özellik
                users: state.users.filter(user => action.payload !== user.id)
            }
        case "ADD_USER":
            return{
                ...state,
                users: [...state.users, action.payload]
            }
        default:
            return state
    }
}
export class UserProvider extends Component {

    state = {
        users: [
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    }

    componentDidMount = async () => {
       const response = await axios.get("http://localhost:3004/users");
       console.log(response);
       this.setState({
        users: response.data
       })
    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}
const UserConsomer = UserContext.Consumer;

export default UserConsomer;