import { useState } from "react";
import { uploadImage } from "../services/storage";

const MediaUpload = ({ onUpload }) => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return;
    const url = await uploadImage(file);
    onUpload(url); // Pass the uploaded image URL to the parent component
    setFile(null);
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} disabled={!file}>Upload</button>
    </div>
  );
};

export default MediaUpload;

