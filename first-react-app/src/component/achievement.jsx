import AchievementCards from "./achievement-cards";

function Achievement() {
  const achievements = [
    {
      img: "./assets/achievement1.png",
      desc: "2,245,341",
      subdesc: "Members"
    },
    {
      img: "./assets/achievement2.png",
      desc: "1,926,436",
      subdesc: "Event Bookings"
    },
    {
      img: "./assets/achievement3.png",
      desc: "46,328",
      subdesc: "Payments"
    },
    {
      img: "./assets/achievement4.png",
      desc: "828,867",
      subdesc: "Clubs"
    }
  ];

  return (
    <section className="achievement-section">

      <h1 className="achievement-heading">
        Our Achievements
      </h1>

      <div className="achievements-container">

        {/* Text Side */}
        <div className="achievements-text">
          <p>Helping a local</p>
          <h2 className="highlight">
            business reinvent itself
          </h2>
          <p>
            We reached here with our hard work and dedication
          </p>
        </div>

        {/* Cards Side */}
        <div className="achievements-cards">
          {achievements.map((item, index) => (
            <AchievementCards
              key={index}
              img={item.img}
              desc={item.desc}
              subdesc={item.subdesc}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Achievement;