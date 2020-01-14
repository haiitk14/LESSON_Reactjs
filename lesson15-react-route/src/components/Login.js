import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtUsername: "",
            txtPassword: "",
            isAuth: false
        }
    }

    onChangeHandler = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    onLogin = (event) => {
        event.preventDefault();
        let { txtUsername, txtPassword } = this.state;

        if (txtUsername === 'admin' && txtPassword === 'admin') {
            localStorage.setItem('user', JSON.stringify({
                username: txtUsername,
                password: txtPassword
            }));
            this.setState({
                isAuth: true
            });
        }
    }


    render() {
        let { txtUsername, txtPassword } = this.state;
        let user = localStorage.getItem('user');
        if (user !== null) {
            let { location } = this.props;

            return <Redirect
                to={{
                    pathname: '/products',
                    state: {
                        from: location
                    }
                }}
            ></Redirect>
        }


        return (

            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <form onSubmit={this.onLogin}>
                        <legend>Đăng nhập</legend>

                        <div className="form-group">
                            <label >Username</label>
                            <input type="text" className="form-control" name="txtUsername" value={txtUsername} onChange={this.onChangeHandler} />
                        </div>

                        <div className="form-group">
                            <label >Password</label>
                            <input type="password" className="form-control" name="txtPassword" value={txtPassword} onChange={this.onChangeHandler} />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                </div>
            </div>

        );
    }

}

export default Login;
