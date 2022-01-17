import { getDownloadURL, getStorage, uploadBytesResumable } from "firebase/storage";

 async function saveFile(file) {
  // 1 - Upload the file to Cloud Storage.
  const filePath = `${getAuth().currentUser.uid}/${messageRef.id}/${file.name}`;
  const newImageRef = ref(getStorage(), filePath);
  const fileSnapshot = await uploadBytesResumable(newImageRef, file);
      
  // 2 - Generate a public URL for the file.
  const publicImageUrl = await getDownloadURL(newImageRef);
  
  return {
    imageUrl: publicImageUrl,
    storageUri: fileSnapshot.metadata.fullPath
  };
}
