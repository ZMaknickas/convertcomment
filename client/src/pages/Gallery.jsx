import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export function Gallery() {
  const [image, setImage] = useState(localStorage.getItem("savedImage") || null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result;
        setImage(base64);
        localStorage.setItem("savedImage", base64); // Save image as Base64
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center p-4 bg-white rounded-4 shadow-sm"
         style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <label htmlFor="photo-upload" className="btn btn-primary px-4 py-2 mb-3">
        Choose a Photo
      </label>

      <input
        id="photo-upload"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="d-none"
      />

      {image && (
        <div className="mt-3 text-center">
          <img
            src={image}
            alt="Preview"
            className="img-fluid rounded-4 shadow-sm border"
            style={{
              width: "500px",
              maxWidth: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      )}
    </div>
  );
}