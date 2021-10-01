import React,{useState} from 'react'
import "./Details.css";
import Overview from './Overview';
import Photos from './Photos';

const HotelDetails = () => {
    const [photoData,setPhotoData] = useState(false);
    const [Over,setOver] = useState(false);
    

const filterItem1=(e)=>{
    setPhotoData(false)
    setOver(true)
    console.log(`clicked ${e.target.value}`)
}
console.log(Over)

const filterItem2=(e)=>{
    setOver(false)
    setPhotoData(true)
    console.log(`clicked ${e.target.value}`)
}

    return (
        <div className="b-hd-parent-container-div">
            <div className="b-all-headings-div">
              <span><button id="o1" onClick={filterItem1}>Overview</button></span>
              <span><button id="o2">Info</button></span>
              <span><button id="o3" onClick={filterItem2}>Photos</button></span>
              <span><button id="o4">Review</button></span>
              <span><button id="o5" >Deals</button></span>    
            </div>
            <hr/>
            <Overview Over={Over}/>
            <Photos photoData={photoData}/>
        </div>
        
    )
}

export default HotelDetails
