import Button from "../../atoms/button/Button";
import Avatar from "../../../components/atoms/Avatar/Avatar";
import "./Comments.scss";
import commentIcon from "../../../assets/Images/add_comment.svg";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Comments({
  comments,
  submit,
  commentRef,
  videoID,
  specificVideo,
  setActiveVideo,
}) {
  const date = (time) => {
    return moment(time).format("MM/DD/YYYY");
  };

  comments.sort((a, b) => {
    return b.timestamp - a.timestamp;
  });

  const deleteComment = async (commentID) => {
    const deleteURL = `https://project-2-api.herokuapp.com/videos/${videoID}/comments/${commentID}?api_key=0a31848d-f986-4555-b2f6-6db9bf1ecb95`;
    try {
      await axios.delete(deleteURL);
      const { data } = await axios.get(specificVideo(videoID));
      setActiveVideo(data);
    } catch {
      console.log("Error");
    }
  };

  return (
    <div className="comments">
      <h4 className="comments__count">{comments.length} comments</h4>
      <div className="comments__form-container">
        <div className="comments__user-photo">
          <Avatar className="avatar avatar__icon" />
        </div>
        <form
          action=""
          className="comments__form"
          id="commentsForm"
          name="commentsForm"
          onSubmit={submit}
        >
          <label htmlFor="commentsComment" className="comments__label">
            JOIN THE CONVERSATION
          </label>
          <div className="comments__input-container">
            <textarea
              type="text"
              className="comments__comment-input"
              id="commentsComment"
              name="commentsComment"
              placeholder="Add a new comment"
              ref={commentRef}
            ></textarea>
            <Button
              className="comments__button"
              icon={commentIcon}
              text="COMMENT"
            />
          </div>
        </form>
      </div>
      {comments?.map((comment) => (
        <div className="comments__div" key={comment?.id}>
          <div className="comments__user-photo">
            <Avatar className="avatar" />
          </div>
          <div className="comments__text-box">
            <div className="comments__text-top">
              <h4 className="comments__name">{comment.name}</h4>
              <div className="comments__dynamic">
                <p className="comments__time">{date(comment.timestamp)}</p>
                <FontAwesomeIcon
                  className="comments__delete"
                  onClick={() => {
                    deleteComment(comment.id);
                  }}
                  icon={faTrashCan}
                />
              </div>
            </div>
            <p className="comments__content">{comment.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Comments;
