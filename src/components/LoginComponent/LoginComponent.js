import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import s from './LoginComponent.module.css';

const LoginComponent = ({ handleChange, email, password, handleSubmit }) => {
  return (
    <div className={s.LoginSection}>
      <h1 className={s.LoginTitle}>Login</h1>
      <FormControl className={s.LoginFormControl}>
        <TextField
          style={{ marginTop: '20px' }}
          onChange={handleChange}
          type="email"
          name="email"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="For example 'email@gmail.com'"
          required
          autoComplete="off"
          value={email}
          color="secondary"
          id="1"
          label="Enter your email"
          variant="outlined"
        />
        <TextField
          style={{ marginTop: '20px' }}
          onChange={handleChange}
          type="password"
          name="password"
          required
          value={password}
          id="2"
          label="Enter your password"
          variant="outlined"
        />
        <Button
          type="submit"
          style={{ marginTop: '20px' }}
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Sign in
        </Button>
      </FormControl>
    </div>
  );
};

LoginComponent.propTypes = {
  handleChange: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
  handleSubmit: PropTypes.func,
};
export default LoginComponent;
