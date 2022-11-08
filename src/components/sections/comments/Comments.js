import Button from "../../atoms/button/Button";
import Avatar from "../../../components/atoms/Avatar/Avatar";
import "./Comments.scss";
import commentIcon from "../../../assets/Images/add_comment.svg";
import moment from "moment";

function Comments({ comments }) {
  const date = (time) => {
    return moment(time).format("MM/DD/YYYY");
  };

  return (
    <div className="comments">
      <h4 className="comments__count">{comments?.length} comments</h4>
      <div className="comments__form-container">
        <div className="comments__user-photo">
          <Avatar className="avatar avatar__icon" />
        </div>
        <form
          action=""
          className="comments__form"
          id="commentsForm"
          name="commentsForm"
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
              <h4 className="comments__name">{comment?.name}</h4>
              <p className="comments__time">{date(comment?.timestamp)}</p>
            </div>
            <p className="comments__content">{comment?.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Comments;
