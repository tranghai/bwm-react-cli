import React from 'react';
import LoginForm from './LoginForm';
import * as actions from '../../actions';
export default class Login extends React.Component {

    constructor() {
        super();

        this.state = {
            errors: []
        }
        this.loginUser = this.loginUser.bind(this);
    }

    loginUser(userData) {
        actions.login(userData).then(
            res => console.log(res),
            errors => this.setState({ errors })
        );
    }

    render() {
        const { successRegister } = this.props.location.state || false;
        const { errors } = this.state;

        return (
            <section id="login">
                <div className="bwm-form">
                    <div className="row">
                        <div className="col-md-5">
                            <h1>Login</h1>
                            {
                                successRegister &&
                                <div className='alert alert-success'>
                                    <p> You have been succesfuly registered, please login now. </p>
                                </div>
                            }
                            <LoginForm submitCb={this.loginUser} errors={errors} />
                        </div>
                        <div className="col-md-6 ml-auto">
                            <div className="image-container">
                                <h2 className="catchphrase">Hundreds of awesome places in reach of few clicks.</h2>
                                <img src={process.env.PUBLIC_URL + '/img/login-image.jpg'} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}