import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) => results.map((result) => {
    if ('reason' in result) {
      return { status: result.status, value: `Error: ${result.reason.message}` };
    }
    return result;
  }));
}
