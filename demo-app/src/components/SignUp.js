import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            email: "",
            password: "",
            passwordConfirm: ""
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleOnChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        const { email, password, fullName, passwordConfirm } = this.state;
        return (
            <div className="row">
                <div className="col-sm-6 col-sm-push-3 text-left">
                    <form onSubmit={this.handleSubmit}>
                        <legend>Register</legend>

                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" className="form-control" id="fullName" name="fullName" placeholder="Full Name"
                                value={fullName} onChange={this.handleOnChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" name="email" placeholder="Email"
                                value={email} onChange={this.handleOnChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" name="password" placeholder="Password"
                                value={password} onChange={this.handleOnChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="passwordConfirm">Password Confirm</label>
                            <input type="password" className="form-control" id="passwordConfirm" name="passwordConfirm" placeholder="Password Confirm"
                                value={passwordConfirm} onChange={this.handleOnChange} />
                        </div>

                        <button type="submit" className="btn btn-primary">SignUp</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUp;