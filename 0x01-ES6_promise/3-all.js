import { createUser, uploadPhoto } from '../utils';

export default function handleProfileSignup() {
  Promise.all([createUser(), uploadPhoto()])
    .then((res) => {
      const [{ firstName, lastName }, { body }] = res;
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
