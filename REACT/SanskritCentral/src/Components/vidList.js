import React, { Component } from 'react';
import './vidList.css';

class VidList extends Component {
    render() {
        const videos = [
            {title:'Some video title1',description:'Some description of the video1',vid:'https://www.youtube.com/embed/kT9sNV9iwRE'},
            {title:'Some video title2',description:'Some description of the video2',vid:'https://www.youtube.com/embed/9utSIYt0xCc'},
            {title:'Some video title3',description:'Some description of the video3',vid:'https://www.youtube.com/embed/q9IYhBLUKBw'},
            {title:'Some video title4',description:'Some description of the video4',vid:'https://www.youtube.com/embed/o07tvGoHzQw'},
            {title:'Some video title4',description:'Some description of the video4',vid:'https://www.youtube.com/embed/o07tvGoHzQw'},

        ];
        return ( 
            <div>
                {videos.map(function(videos){
                    return <Item title={videos.title} description={videos.description} vid={videos.vid} />}
                )}
            </div>
        );
    }
}

function Item(props){
    return(
        <>
        <div className='column'>
                <div className='videocard'>
                    <iframe width="264" height="174" src={props.vid} 
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
                    <div className='container'>
                        <h4 className='vtitle'><b>{props.title}</b></h4>
                        <p className='vdes'>{props.description}</p>
                    </div>
                </div>
        </div>
        </>
    )
}

export default VidList;

// src="https://www.youtube.com/embed/kT9sNV9iwRE"