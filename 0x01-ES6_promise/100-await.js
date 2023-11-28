import { createUser, uploadPhoto } from '../utils';

export default async function asyncUploadUser() {
  const user = await createUser().catch(() => null);
  const photo = await uploadPhoto().catch(() => null);

  return { photo, user };
}
