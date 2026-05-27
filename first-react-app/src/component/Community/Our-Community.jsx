import CommunityCard from "./community-card";

function OurCommunity() {
    const communityData = [
        {
            title: "Membership Organisations",
            desc: "Our membership management software provides full automation of membership renewals and payments",
            img: "./assets/community1.png"
        },
        {
            title: "National Associations",
            desc: "Our membership management software provides full automation of membership renewals and payments",
            img: "./assets/community2.png"
        },
        {
            title: "Club and Groups",
            desc: "Our membership management software provides full automation of membership renewals and payments",
            img: "./assets/community1.png"
        }
    ];

    return (
        <div className="cards-container">
            <h1>OUR COMMUNITY</h1>
            <p>Manage your entire community in a single system

                Who is Nextcent suitable for?</p>
            <div className="our-community-cards">
                {communityData.map((data, index) => (
                    <CommunityCard key={index} title={data.title} desc={data.desc} img={data.img} />
                ))}
            </div>
            <div className="community-section">
                <img src="./assets/community3.png" alt="Community Image"></img>
                <div className="community-section-text">
                    <h2>The unseen of spending three years at Pixelgrade</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                    <button className="btn-green">Learn More</button>
                </div>
            </div>
            
        </div>
    )
}
export default OurCommunity;