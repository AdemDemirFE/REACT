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
            {
                id: "unique-1",
                name: "Adem Demir",
                salary: "10000",
                department: "Yazılım"
            },
            {
                id: "unique-2",
                name: "Adem fe",
                salary: "102000",
                department: "Yazılım"
            }
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
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