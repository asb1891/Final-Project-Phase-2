import React, { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import { useLoaderData } from "react-router-dom";

function App() {
  const [photos, setPhotos] = useState(useLoaderData());
  const [flippedPhotoId, setFlippedPhotoId] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [commentText, setCommentText] = useState("");
  // useEffect(() => {
  //   fetch("http://localhost:3000/Photos")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((photosData) => {
  //       setPhotos(photosData);
  //     })
  //     .catch((error) => {
  //       console.error(
  //         "There was a problem with the fetch operation:",
  //         error.message
  //       );
  //     });
  // }, []);
  console.log(photos);
  const addComment = (photoId, commentText) => {
    // First, find the current comments for the photo
    const photo = photos.find((p) => p.id === photoId);
    const currentComments = photo.comments;
    // Create the updated comments array
    // const updatedComments = [...currentComments, commentText ];
    fetch(`http://localhost:3000/Photos/${photoId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comments: [...currentComments, commentText ] }), // send the entire updated comments array
    })
      .then((response) => { return response.json() })
      .then((updatedPhoto) => {
        // Update the local state with the new photo data
        console.log(updatedPhoto);
        const updatedPhotos = photos.map((photo) => {
          if (photo.id === photoId) {
            return updatedPhoto;
          }
          return photo;
        });
        setPhotos(updatedPhotos);
      })
      .catch((error) => {
        console.error("There was a problem updating the photo:", error.message);
      });
  };

  const handleSubmit = (photoId, event) => {
    event.preventDefault();
    if (commentText.trim()) {
      addComment(photoId, commentText);
      setCommentText("");
    }
  };

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("video/")) {
      setVideoFile(file);
    } else {
      alert("Please select a valid video file");
    }
  };

  const flipCardStyle = {
    perspective: "1000px",
    maxWidth: "400px",
    height: "600px",
    margin: "10px auto", // centers the image within the flip card
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const flipCardInnerStyle = (isFlipped) => ({
    transformStyle: "preserve-3d",
    width: "100%",
    height: "100%",
    transition: "transform 0.5s",
    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
  });

  const flipCardFaceStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
  };

  const flipCardFrontStyle = {
    ...flipCardFaceStyle,
    objectFit: "contain", // This ensures the aspect ratio is maintained
    width: "100%", // Set to 100% of the container width
    height: "100%", // Set to 100% of the container height
  };

  const flipCardBackStyle = {
    ...flipCardFaceStyle,
    transform: "rotateY(180deg)",
    backgroundColor: "#F8DFC1",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const videoContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    marginBottom: "20px", // Margin added to separate video from the photo-container
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div className="photo-container" style={{ flex: 1, overflowY: "auto" }}>
        {photos.map((photo, index) => (
          <div key={photo.id}>
            <div
              style={flipCardStyle}
              onClick={() =>
                setFlippedPhotoId(flippedPhotoId !== photo.id ? photo.id : null)
              }
            >
              <div style={flipCardInnerStyle(flippedPhotoId === photo.id)}>
                {/* Front of the Card */}
                <img
                  src={photo.image}
                  alt={photo.description}
                  className={`image-${index}`}
                  style={flipCardFrontStyle}
                />

                {/* Rendering the photo's details (back of the card) */}
                <div style={flipCardBackStyle}>
                  <div style={{ fontWeight: "bold", fontSize: "16pt" }}>
                    {photo.description}
                  </div>

                  <ul>
                    {photo.comments.map((comment, commentIndex) => (
                      <li
                        key={`li-${commentIndex}`}
                        style={{ fontStyle: "italic", fontSize: "12pt" }}
                      >
                        {comment}
                      </li>
                    ))} 
                  </ul>
                </div>
              </div>
            </div>

            {/* Rendering the comment form */}

            <CommentForm photo={photo} addComment={addComment} />
          </div>
        ))}
      </div>

      <div className="video-container" style={videoContainerStyle}>
        <video width="960" height="720" autoPlay loop>
          <source src="https://i.imgur.com/KS3CcNw.mp4" type="video/mp4" />
          <source src="https://i.imgur.com/KS3CcNw.mp4" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default App;
