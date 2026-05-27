function AchievementCards({ img, desc, subdesc }) {
  return (
    <div className="achievement-card">

      <img src={img} alt={`Achievement ${desc}`} />

      <p className="card-number">{desc}</p>
      <p className="card-text">{subdesc}</p>

    </div>
  );
}

export default AchievementCards;