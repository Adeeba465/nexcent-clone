import Header from "./component/Header";
import Hero from "./component/Hero/Hero";
import Clients from "./component/our-clients/Clients";
import './App.css';
import OurCommunity from "./component/Community/Our-Community";
import CommunityCard from "./component/Community/community-card";
import Achievement from "./component/achievement";
import AchievementConnection from "./component/achievement-connection";
import LastSection from "./component/last-section";




function App(){
  return(
    <div>
      <Header/>
      <Hero/>
      <Clients/>
      <OurCommunity/>
      <Achievement/>
      <AchievementConnection/>
      <LastSection/>
      
    </div>
  )
  
}
export default App;
  