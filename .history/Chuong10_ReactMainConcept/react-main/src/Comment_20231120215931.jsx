const formatDate = (date) => {
  return new Date(date).toTimeString();
};

function Avatar(props) {
  return <img src={props.author.avatarUrl} alt={props.author.name} />;
}
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.auhtor} />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

export default Comment;
