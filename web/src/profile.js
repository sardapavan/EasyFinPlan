import { doc, getDoc, getFirestore, serverTimestamp, setDoc } from "firebase/firestore";

export async function getUserProfile(user) {
  return await getDoc(__get_profile_ref(user));
}

export async function updateUserProfile(user) {
  // load existing profile.
  const profileSnap = await getUserProfile(user);
  
  // reuse existing profile if present, otherwise create new.
  let newProfile = profileSnap.exists() ? profileSnap.data() : {
    firstLogin: serverTimestamp()
  };

  // override the displayName and photoURL with latest values.
  newProfile.displayName = user.displayName;
  newProfile.photoURL = user.photoURL;
  console.log(newProfile);

  // TODO: No need to call setDoc if there is no change.
  return await setDoc(__get_profile_ref(user), newProfile);
}

function __get_profile_ref(user) {
  return doc(getFirestore(), 'profile', user.uid);
}
