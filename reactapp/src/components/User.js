import React, { Component } from "react";
import PropTypes from "prop-types";
import UserConsomer from "../context";

class User extends Component {
    state = {
        isVisible: false
    }
    static defaultProps = {
        name: "Bilgi Yok",
        salary: "Bilgi Yok",
        department: "Bilgi Yok",
    };

    onClickEvent = (e) => {
        this.setState({
            isVisible: !this.state.isVisible
        })

    }

    onDeleteUSer = (dispatch,e) => {
        const {id} = this.props;
        //Consumer Dispatch
        dispatch({type : "DELETE_USER", payload:id})
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
    }
    render() {
        const { name, department, salary } = this.props;
        const { isVisible } = this.state;

        return (
            <UserConsomer>
                {
                    value => {
                        const { dispatch } = value;
                        return (
                            <div className="col-md-8 mb-4">
                                <div className="card">
                                    <div
                                     style={isVisible ? {backgroundColor: "#56AEFF", color: "white"} : null}
                                     className="card-header d-flex justify-content-between align-items-center">
                                        <h4 className="d-inline" onClick={this.onClickEvent}>{name}</h4>
                                        <i onClick={this.onDeleteUSer.bind(this,dispatch)} className="far fa-trash-alt" style={{ cursor: "pointer" }}></i>
                                    </div>
                                    {
                                        isVisible ? <div className="card-body">
                                            <p className="card-text">Salary: {salary}</p>
                                            <p className="card-text">Department: {department}</p>
                                        </div> : null
                                    }
                                </div>
                            </div>
                        );
                    }
                }
            </UserConsomer>
        )

    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

export default User;