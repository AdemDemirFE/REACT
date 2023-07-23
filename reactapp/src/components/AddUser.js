import React, { Component } from 'react'
import pose from 'react-pose'
import uuid from 'react-uuid';
import UserConsomer from '../context';
const Animation = pose.div({
    visible: {
        opacity: 1,
        applyAtStart: {
            display: "block"
        }
    },
    hidden: {
        opacity: 0,
        applyAtEnd: {
            display: "none"
        }
    }
});
class AddUser extends Component {
    state = {
        visible: false,
        name: "",
        department: "",
        salary: ""
    }


    changeVisibility = (e) => {
        this.setState({
            visible: !this.state.visible
        })
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addUser = (dispatch,e) => {
        e.preventDefault();
        const { name, department, salary } = this.state;

        const newUser = {
            id: "12323",
            name: name,
            department: department,
            salary: salary

            //alttaki gibide olabilir js6 ile geldi.
            // name,
            // department,
            // salary
        }
        console.log(newUser)
        dispatch({ type: "ADD_USER", payload: newUser })
    }
    render() {
        const { visible, name, department, salary } = this.state;

        return <UserConsomer>
            {
                value => {
                    const {dispatch} = value;
                    return (
                        <div className='col-md-8 mb-4'>
                            <button onClick={this.changeVisibility} class="btn btn-dark btn-block mb-2">{visible ? "Hide Form" : "Show From"}</button>
                            <Animation pose={visible ? "visible" : "hidden"}>
                                <div className='card'>
                                    <div className='card-header'>
                                        <h4>Add User Form</h4>
                                    </div>
                                    <div className='card-body'>
                                        <form onSubmit={this.addUser.bind(this,dispatch)}>
                                            <div className='form-group'>
                                                <label htmlFor="name">Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder='Enter Name'
                                                    className='form-control'
                                                    value={name}
                                                    onChange={this.changeInput}
                                                ></input>
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor="department">Department</label>
                                                <input
                                                    type="text"
                                                    name="department"
                                                    placeholder='Enter Department'
                                                    className='form-control'
                                                    value={department}
                                                    onChange={this.changeInput}
                                                ></input>
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor="salary">Salary</label>
                                                <input
                                                    type="text"
                                                    name="salary"
                                                    placeholder='Enter Salary'
                                                    className='form-control'
                                                    value={salary}
                                                    onChange={this.changeInput}
                                                ></input>
                                            </div>
                                            <button
                                                type='submit'
                                                className="btn btn-danger btn-block">Add User</button>
                                        </form>
                                    </div>
                                </div>
                            </Animation>
                        </div>
                    )
                }
            }
        </UserConsomer>

    }
}

export default AddUser;
