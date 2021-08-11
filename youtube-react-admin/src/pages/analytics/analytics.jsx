
import PhoneNumber from "../../reusables/phoneNumber";
import DatePicker from "../../reusables/dateRange";
import TabComponent from "../../reusables/tabComponent";
import Profile from "../../reusables/profiles";
import Collapse from "../../reusables/collapsible.";
import TopBar from "../../reusables/topBar";
import { FaExpandArrowsAlt } from "react-icons/fa";

export default function Analytics() {
  return (
    <div className="home">
      
      <div style={{display:"flex", justifyContent:"space-around", marginBottom: "8px"}}>
      <div style={{textAlign:"center"}}>
        <FaExpandArrowsAlt/>
        <span style={{position: "relative",
    bottom: "3px"}}>Customer Experience Summary</span>
        </div>
      <div style={{display:"flex", alignContent:"flex-end"}}>
          <PhoneNumber/>
          <DatePicker/>
      </div>
      </div>
      <hr/>
      <TopBar/>
<hr/>
<br/>
<div style={{display:"flex"}}>
  <div>

  <div style={{backgroundColor:"grey", height: "40px", textAlign:"center", paddingTop: "17px" }}>Customer Profile</div>
  <Collapse/>
  
  </div>

  <TabComponent/>
</div>

    </div>
  );
}
