import React, { useState } from "react";
import AgentComp from "../../Components/Agent/AgentComp";
function CompleteAgentPage(props) {
  const items = [
    { label: "OMEN", value: "OMEN" },
    { label: "JETT", value: "JETT" },
    { label: "RAZE", value: "RAZE" },
    { label: "PHOENIX", value: "PHOENIX" },
  ];
  const [agent, setAgent] = useState("OMEN");

  return (
    
    <div className="black" >
      
      <div style={{borderTop:"3px solid white"}}>
      <select
        className="white-text"
        style={{ backgroundColor: "black" ,width:"50%",margin:"0 auto"}}
        value={agent}
        onChange={(e) => setAgent(e.target.value)}
      >
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      </div>
      <div>
        <AgentComp agent={agent} />
      </div>
    </div>
  
  );
}

export default CompleteAgentPage;
