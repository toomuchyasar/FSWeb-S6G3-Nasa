import React from "react"
import "./Content.css"

const Content = (props) => {
    const {data} = props
    
    console.log(data.date)
    return (
        <div className="page-row">
            <div className="imageStage">
                <img src={data.hdurl}></img>
            </div>
            <div className="textStage">
                <div className="title">
                {data.title}
                <hr/>
                </div>
                <div className="person">
                {data.copyright} | {data.date}
                <hr/>
                </div>
                <div className="exp">
                {data.explanation}
                </div>
            </div>
        </div>
    )


}

export default Content;
