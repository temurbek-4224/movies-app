import React from 'react';
import Joi from 'joi-browser';
import Form from '../components/common/form';

class LoginForm extends Form {

  state = {
    data: {
      username: '',
      password: ''
    },
    errors: {}
  }

  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password')
  }

  doSubmit = () => {
    console.log('LogIn');

    // this.setState({ accaunt: { username: '', password: '' } });
  }

  render() {

    return (
      <div className='container'>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            {this.renderInput('username', 'Username')}
            {this.renderInput('password', 'Password', 'password')}
            {this.renderButton('Login')}
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;