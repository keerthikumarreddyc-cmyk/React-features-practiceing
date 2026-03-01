function User({ img, name, role, status }) {
  const statusClass = status === "active" ? "active" : "inactive";
  function handleclick() {
    alert(`${name} is a ${role}`);
  }
  return (
    <div className="cards">
      <img src={img} alt={name} />
      <h1>{name}</h1>
      <p>{role}</p>
      <div className={statusClass}>{status}</div>
      <button onClick={handleclick}>click</button>
    </div>
  );
}
export default User;
