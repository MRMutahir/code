import { getAuth, onAuthStateChanged , doc, getDoc,db,getDocs,collection} from "../../forms/firebase.js";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log(uid , '===> uid');
    currentAlluserpost(uid)
    // ...
  } else {
    // User is signed out
    console.log(' User is signed out');
    // ...
  }
});


async function currentAlluserpost(id) {
  console.log(id);
// Query a reference to a subcollection
// const querySnapshot = await getDocs(collection(db, "postcontent", id, "landmarks"));
// try {
//   querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.id, " => ", doc.data());
//   });
// } catch (error) {
//   console.log(error);
// }

  const docRef = doc(db, "postcontent",id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
}
