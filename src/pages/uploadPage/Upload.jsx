import "../uploadPage/Upload.scss";
import Thumbnail from "../../assets/Images/Upload-video-preview.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import Button from "../../components/atoms/button/Button";
import publishIcon from "../../assets/Images/publish.svg";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function Upload() {
  const [submitResults, setSubmitResults] = useState("");
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    let titleInput = event.target.uploadTitle.value;
    let descriptionInput = event.target.uploadDescription.value;

    if (titleInput.length === 0 && descriptionInput.length === 0) {
      setTitle(titleInput);
      setDescription(descriptionInput);
      toast.error("Input values cannot be empty", {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "colored",
        hideProgressBar: true,
        autoClose: 1000,
      });
    } else if (titleInput.length === 0 || descriptionInput.length === 0) {
      setTitle(titleInput);
      setDescription(descriptionInput);
      toast.error("Please fill out all input values", {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "colored",
        hideProgressBar: true,
        autoClose: 1000,
      });
    } else {
      setTitle(titleInput);
      setDescription(descriptionInput);
      // setSubmitResults("Upload successful!");
      toast.success("Upload successful!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "colored",
        hideProgressBar: true,
        autoClose: 1000,
      });
      setTimeout(() => navigate("/home"), 1500);
    }
  };

  return (
    <div className="upload">
      <h1 className="upload__heading">Upload Video</h1>

      <form className="upload__form" id="form1" onSubmit={handleSubmit}>
        <figure className="upload__figure">
          <figcaption className="upload__label">VIDEO THUMBNAIL</figcaption>
          <img
            className="upload__thumbnail"
            alt="video_thumbnail"
            src={Thumbnail}
          ></img>
        </figure>
        <div className="upload__form--inputs">
          <label className="upload__label" htmlFor="uploadTitle">
            TITLE YOUR VIDEO
          </label>
          <input
            name="uploadTitle"
            id="uploadTitle"
            type="text"
            placeholder="Add a title to your video"
            className={`upload__title ${title === "" ? "error" : ""}`}
          ></input>
          <label className="upload__label" htmlFor="uploadDescription">
            ADD A VIDEO DESCRIPTION
          </label>
          <input
            name="uploadDescription"
            id="uploadDescription"
            type="text"
            placeholder="Add a description to your video"
            className={`upload__description ${
              description === "" ? "error" : ""
            }`}
          ></input>{" "}
          <ToastContainer />
        </div>
      </form>
      <div className="upload__button--div">
        <Button
          form="form1"
          className="upload__submit"
          type="submit"
          text="PUBLISH"
          icon={publishIcon}
        />
        <input
          className="upload__cancel"
          onClick={() => navigate("/home")}
          type="button"
          value="CANCEL"
        ></input>
      </div>
    </div>
  );
}

export default Upload;
