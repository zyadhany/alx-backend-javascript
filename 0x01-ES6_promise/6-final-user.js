import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(fileName, lastName), uploadPhoto(fileName)])
    .then((res) => (
      res.map((val) => ({
        status: val.status,
        value: val.status === 'fulfilled' ? val.value : String(val.reason),
      }))
    ));
}
