function CommunityCard(props) {
    return (
        <div className="our-community-cards">
        <div className="community-card">
            <img src={props.img} alt={props.title}></img>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </div>
        </div>
    )
}
export default CommunityCard;