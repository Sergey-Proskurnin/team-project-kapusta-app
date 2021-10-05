import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/auth-operations';

const HomeView = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const clearInput = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    clearInput();
  };
  return (
    <div>
      <h1>Please enter your login</h1>

      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          E-mail
          <input type="email" name="email" value={email} onChange={onChange} />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onInput={onChange}
          />
        </label>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default HomeView;
