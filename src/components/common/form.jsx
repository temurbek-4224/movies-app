import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';
import InputSelect from './select';

class Form extends Component {
  state = {
    data: {},
    errors: {}
  }

  validate = () => {
    const result = Joi.validate(this.state.data, this.schema, { abortEarly: false });
    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;

    console.log(errors);

    return errors;
  }

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    // console.log(result);
    // this.updateState();

    return error?.details[0]?.message;
  }

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    if (errors) return;

    this.doSubmit();

  }

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    data[input.name] = input.value;

    this.setState({ data, errors });
  }

  renderButton = label => {
    return (
      <button
        // disabled={this.validate()}
        className="btn btn-primary mt-2" type='submit'
      >{label}</button>
    )
  }

  renderInput = (name, label, type = 'text') => {
    const { data, errors } = this.state;

    return (
      <Input
        onChange={this.handleChange}
        name={name}
        value={data[name]}
        label={label}
        type={type}
        error={errors[name]}
      />
    );
  }

  renderSelect = (name, label, options) => {
    const { data, errors } = this.state;
    return (
      <InputSelect
        onChange={this.handleChange}
        value={data[name]}
        name={name}
        label={label}
        options={options}
        error={errors[name]}
      />
    )
  }
}



export default Form;