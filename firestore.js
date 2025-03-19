import { db } from "./firebase";
import { collection, addDoc, getDocs, query, orderBy, serverTimestamp } from "firebase/firestore";

// Add a new message
export const sendMessage = async (text, userId) => {
  try {
    await addDoc(collection(db, "messages"), {
      text,
      userId,
      timestamp: serverTimestamp()
    });
  } catch (error) {
    console.error("Error sending message:", error);
  }
};

// Fetch messages in real-time
export const getMessages = async () => {
  const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

