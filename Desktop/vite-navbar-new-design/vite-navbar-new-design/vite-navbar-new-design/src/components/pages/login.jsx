import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './login.css';

function Login() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const history = useHistory();

  const handleLogin = (event) => {
    event.preventDefault();
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      alert('Login successful!');
      localStorage.setItem('userLoggedIn', 'true');
      history.push('/account'); // Redirect to the account page
    } else {
      setError('Invalid email or password');
    }
  };

  const handleRegister = (event) => {
    event.preventDefault();
    if (username && email && password && confirmPassword) {
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }
      const newUser = { username, email, password };
      setUsers([...users, newUser]);
      alert('Registration successful!');
      setIsRegistering(false);
      setError('');
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } else {
      setError('All fields are required');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="login-form">
          <h1>{isRegistering ? 'Регистрация' : 'Войти по почте'}</h1>
          <p>
            {isRegistering ? 'Уже есть аккаунт? ' : 'Еще нет аккаунта? '}
            <a href="#!" onClick={() => setIsRegistering(!isRegistering)}>
              {isRegistering ? 'Войти' : 'Зарегистрироваться'}
            </a>
          </p>
          <form onSubmit={isRegistering ? handleRegister : handleLogin}>
            {isRegistering && (
              <div>
                <label>Имя пользователя</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            )}
            <div>
              <label>Почтовый адрес</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Пароль</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {isRegistering && (
              <div>
                <label>Подтвердите пароль</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            )}
            <div className="remember-me">
              {!isRegistering && (
                <>
                  <input type="checkbox" id="rememberMe" />
                  <label htmlFor="rememberMe">Запомнить меня</label>
                </>
              )}
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">{isRegistering ? 'Регистрация' : 'Войти'}</button>
          </form>
        </div>
      </div>
      <div className="login-image">
        <img src="../../../public/images/path-to-your-image.jpg" alt="Login Illustration" />
      </div>
    </div>
  );
}

export default Login;
