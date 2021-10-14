import axios from '../axios';

export async function login(email, password) {
  return await axios.post('auth/login', {
    email: email,
    password: password
  });
}
