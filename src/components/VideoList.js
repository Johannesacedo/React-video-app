import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) =>{
    
    const renderedList = videos.map((video) =>{
        return(

            <VideoItem 
                key={video.id.videoId}   
                video={video} 
                onVideoSelect={onVideoSelect} 
            />

        );
    })

    return(
        //contains props.videos
        <div className='ui segment'>
            <div>
                <div className='ui header'>Related Results</div>
                <div className='ui fitted divider'></div>
            </div>
            
            <div className='ui relaxed divided list'>
                { renderedList }
            </div>

        </div>
    );
}

export default VideoList;