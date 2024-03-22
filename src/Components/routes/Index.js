import React from 'react';
import { Routes, Route } from "react-router-dom";
// import { ReactDOM } from 'react';
import Index from '../home/Index';
import ImagesStories from '../Instastories/ImageStories';
import VideoStories from '../Instastories/VideoStories';
import ImageVideoStories from '../Instastories/ImageVideoStories';
import ComponentStories from '../Instastories/ComponentStories';
import HeaderStories from '../Instastories/HeaderStories';
import SeeMore from '../Instastories/SeeMore';
// import MyWebStory from '../Instastories/MyWebStory';

// import Ampexample from '../Instastories/ampexample';
// import Webstories from '../home/webstories';
// import { ReactDOM } from 'react-dom/client';
// import { render } from '@testing-library/react';

function App() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Index/>}/>
            <Route path='/image_stories' element={<ImagesStories/>}/>
            <Route path='/video_stories' element={<VideoStories />}/>
            <Route path='/image_video_stories' element={<ImageVideoStories />} />
            <Route path='/component_stories' element={<ComponentStories/>}/>
            <Route path='/header_stories' element={<HeaderStories/>}/>
            <Route path='/see_more' element={<SeeMore />}/>
            {/* <Route path='/ampexample' element={<Ampexample/>}/> */}
            {/* <Route path='/mywebstory' element={<MyWebStory/>}/> */}
        </Routes>
    </div>
  )
}

export default App