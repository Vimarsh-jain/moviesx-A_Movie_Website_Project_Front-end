import React, { useState } from 'react'
import "./style.css"

const SwitchTabs = ({data,onTabChange}) => {
    const [selectedTab, setSelectedTabs] = useState(0);
    const [left,setLeft] = useState(0);

    
    const switchTabs = (tab,index)=>{
        setLeft(index*100);
        setTimeout(()=>{
            setSelectedTabs(index)
        },300);
        onTabChange(tab,index);
    }
  return (
    <div className="switchingTabs">
        <div className="tabItems">
            {
                data.map((tab,index)=>
                (
                    <span key={index} 
                    className={`tabItem ${selectedTab === index ? "active" : ""}`}
                    onClick={()=>switchTabs(tab,index)}
                    >
                        {tab}
                    </span>
                ))
            }
            <span className='movingBg' style={{left}}/>
        </div>

    </div>
  )
}

export default SwitchTabs;