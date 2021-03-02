import React, { useState } from 'react';
// import {Link} from 'react-router-dom';

const useState = React.useState 

function VList(props){
    const videoName = props.match.params.videoName;
    const videos = {
        sanscen:[ 
            {title:'sc video title1',vid:'kT9sNV9iwRE'},
            {title:'sc video title2',vid:'9utSIYt0xCc'},
            {title:'sc video title3',vid:'q9IYhBLUKBw'},
            {title:'sc video title4',vid:'o07tvGoHzQw'},
        ]
    }

    // const [title,utit] = useState(videos[videoName][0].title)
    // const [vid,uvid] = useState(videos[videoName][0].vid)

    const renderVideo = () =>{
        return(
            <div className="video-container">
                <iframe width="853" height="480" src="https://youtu.be/kT9sNV9iwRE" frameBorder="0" allowFullScreen></iframe>
            </div>
        )
    }
    return(
        <div>
            <h1>{ videoName }</h1>
            {renderVideo()}
        </div>
    );
}

export default VList;