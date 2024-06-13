import PropTypes from "prop-types";
const PostCard = ({ postObj, func }) => {
  const { _id, title, content, coverImg } = postObj;
  const styles = {
    card: {
      width: "350px",
      height: "450px",
      border: "2px solid #333",
      padding: "16px",
      borderRadius: "8px",
    },
    img: {
      width: "100%",
      height: "200px",
      borderRadius: "8px",
    },
    title: {
      color: "orange",
      margin: "18px 0",
    },
    btn: {
      padding: "8px 16px",
      backgroundColor: "orange",
      color: "white",
      border: "none",
      borderRadius: "16px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.card} id={_id}>
      <img
        style={styles.img}
        src={
          coverImg ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToQNIcP7e2sV3nP_mwkRxoG268cWQCM1rlcUYWpmAM_IDt6QgJr7YubiK_47jnHWUipQE&usqp=CAU"
        }
        alt="post image"
      />

      <div>
        <h4 style={styles.title}>{title || ""}</h4>
        <p>{content.slice(0, 50) || ""}</p>

        <button  id={_id} style={styles.btn} onClick={func}>Read more...</button>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  postObj: PropTypes.shape({
    _id: PropTypes.any,
    content: PropTypes.string,
    coverImg: PropTypes.string,
    title: PropTypes.string,
  }),
  func:PropTypes.func
};

export default PostCard;
