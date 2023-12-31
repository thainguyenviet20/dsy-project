import axios from 'axios';
import { showAlert } from './alerts';

export const signup = async (
  name,
  email,
  phone,
  role,
  password,
  passwordConfirm
) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/users/signup',
      data: {
        name,
        email,
        phone,
        role,
        password,
        passwordConfirm,
      },
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Signed up successfully!');
      window.setTimeout(() => {
        window.location.assign('/verifySignup');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
