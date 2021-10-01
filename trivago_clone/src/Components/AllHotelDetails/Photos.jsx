import React from 'react'

const Photos = ({photoData}) => {
    return (
        <div>
            <div style={{display:`${photoData? "block" :"none"}`}} className="b-overview-parent-div-2">
                <div className="b-photots"></div>
                <div className="b-photots"></div>
                <div className="b-photots"></div>
                <div className="b-photots"></div>
                
                <div className="b-photots-1"></div>
                <div className="b-photots-1"></div>
                <div className="b-photots-1"></div>
                <div className="b-photots-1"></div>

                <div className="b-photots-2"></div>
                <div className="b-photots-2"></div>
                <div className="b-photots-2"></div>
                <div className="b-photots-2"></div>
            </div>
            
        </div>
    )
}

export default Photos
