import axios from 'axios';
export const _getUsers = () => {
    //   const token = this.state.data.token;
  axios
    .get('http://localhost:5000/users')
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
};