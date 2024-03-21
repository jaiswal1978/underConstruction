import React from 'react';
import { Routes, Route } from "react-router-dom";
import Index from '../home/Index';
import ImagesStories from '../Instastories/ImageStories';
import VideoStories from '../Instastories/VideoStories';
import ImageVideoStories from '../Instastories/ImageVideoStories';
import ComponentStories from '../Instastories/ComponentStories';
import HeaderStories from '../Instastories/HeaderStories';
import SeeMore from '../Instastories/SeeMore';
import Webstories from '../home/webstories';

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
            <Route path='/webstories' element={<Webstories/>}/>
        </Routes>
    </div>
  )
}

export default App