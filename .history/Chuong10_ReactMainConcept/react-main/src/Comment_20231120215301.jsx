function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img src={props.author.avatarUrl} alt={props.author.name} />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
      <div className="Comment-text">{props.text</div>
    </div>
  );
}
