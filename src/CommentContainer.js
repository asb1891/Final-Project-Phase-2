// import React, { useState, useEffect } from "react";

// function CommentsContainer() {
//   const [photos, setPhotos] = useState([]);
//   const [detailImageSrc, setDetailImageSrc] = useState("");
//   const [comment, setComment] = useState("");
//   const [description, setDescription] = useState("");
//   const [originalDescription, setOriginalDescription] = useState("");

//   useEffect(() => {
//     fetch("http://localhost:4001/Photos")
//       .then((response) => response.json())
//       .then((data) => setPhotos(data))
//       .catch((error) => console.error("Error fetching photos:", error));
//   }, []);

//   function handleImageClick(photo) {
//     setDetailImageSrc(photo.image);
//     setComment(photo.comment);
//     setOriginalDescription(photo.description);
//     setDescription(photo.description);
//   }

//   function handleImageHover(photo) {
//     setDetailImageSrc(photo.image);
//     setComment(photo.comment);
//     setDescription(photo.description);
//   }

//   return (
//     <div>
//       <div className="photos-container">
//         {photos.map((photo, index) => (
//           <img
//             key={index}
//             src={photo.image}
//             className={`image-${index}`}
//             onClick={() => handleImageClick(photo)}
//             onMouseOver={() => handleImageHover(photo)}
//           />
//         ))}
//       </div>

//       <div className="detail-container">
//         <img className="detail-image" src={detailImageSrc} alt="Detail" />
//         <p className="comment">{comment}</p>
//         <p className="description">{description}</p>
//       </div>
//     </div>
//   );
// }

// export default CommentsContainer;
