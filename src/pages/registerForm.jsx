import React from 'react';
import Form from '../components/common/form';
import Joi from 'joi-browser';

class RegisterForm extends Form {
  state = {
    data: {
      username: '',
      password: '',
      name: ''
    },
    errors: {}
  }

  schema = {
    username: Joi.string().required().email().label('Username'),
    password: Joi.string().required().min(5).label('Password'),
    name: Joi.string().required().label('Name')
  }

  doSubmit = () => {
    console.log('You are registrated!');
    //...
  }

  render() {
    return (
      <div className='container'>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            {this.renderInput('username', 'Username')}
            {this.renderInput('password', 'Password', 'password')}
            {this.renderInput('name', 'Name')}
            {this.renderButton('Register')}
          </div>
        </form>
      </div>
    )
  }
}

export default RegisterForm;
