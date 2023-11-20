function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img src={props.author.avatarUrl} alt="" />
      </div>
    </div>
  );
}
