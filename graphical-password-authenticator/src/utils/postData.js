import axios from 'axios';

// export const sendPostRequest = async (name, email, password) => {
//   try {
//     const data = { name, email, password };
//     const response = await axios.post('http://localhost:5500/api/tasks', data);
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// };
import React from 'react';

const postData = async (email, hash) => {
  try {
    console.log(typeof hash);
    console.log(hash);
    await axios.post('http://localhost:5500/api/tasks', { email, hash });
  } catch (err) {
    console.log(err);
  }
};

export default postData;
