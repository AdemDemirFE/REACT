import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

class User extends Component {
    state = {
        isVisible : false
    }
    static defaultProps = {
        name: "Bilgi Yok",
        salary: "Bilgi Yok",
        department: "Bilgi Yok",
    };

    onClickEvent = (e) =>{
        this.setState({
            isVisible : ! this.state.isVisible
        })
 
    }
    render() {
        const { name, department, salary } = this.props;
        const {isVisible} = this.state;
        return (
            <div className="col-md-8 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-center"onClick={this.onClickEvent}>
                        <h4 className="d-inline" >{name}</h4>
                        <i className="far fa-trash-alt" style={{ cursor: "pointer" }}></i>
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

User.propTypes = {
    name: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
};

export default User;