import React, { useState } from 'react'

function CompleteAgentPage(props) {

  const items = [
    { label: "OMEN", value: "OMEN" },
    { label: "JETT", value: 'JETT' }
  ];
  const[agent,setAgent]=useState("OMEN");
  
  return (
    <div >
    <select
      value={agent}
      onChange={(e) =>setAgent(e.target.value)}
    >{items.map(item => (
      <option
        key={item.value}
        value={item.value}
      >
        {item.label}
        </option>
         ))}
      </select>
      <div><AgentComp agent={agent}/></div>
       
    </div>
  );
}

export default CompleteAgentPage;