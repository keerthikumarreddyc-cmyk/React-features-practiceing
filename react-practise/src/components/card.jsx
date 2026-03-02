function Card({ children, onSelect }) {
  return (
    <div className="container">
      <button onClick={() => onSelect(children)}>{children}</button>
    </div>
  );
}
export default Card;
