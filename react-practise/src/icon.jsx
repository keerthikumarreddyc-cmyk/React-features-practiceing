function IconCard({ title, description, image }) {
  return (
    <div className="iconcard">
      <img src={image} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
export default IconCard;
