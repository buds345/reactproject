import { db } from "./firebaseConfig";
import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from "firebase/firestore";

// Send message
export const sendMessage = async (userId, text) => {
  try {
    await addDoc(collection(db, "messages"), {
      userId,
      text,
      timestamp: serverTimestamp()
    });
  } catch (error) {
    throw error;
  }
};

// Fetch messages in real-time
export const fetchMessages = (callback) => {
  const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));
  return onSnapshot(q, (snapshot) => {
    const messages = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    callback(messages);
  });
};
