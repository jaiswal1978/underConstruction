import React from 'react';
import underConstruction from '../../assests/images/underConstruction1.json';
import Lottie from 'lottie-react';

function Index() {
  return (
    <>
    <div className='AnnimationContainer'>
        <Lottie className='animationdata' animationData={underConstruction} loop={true} />
        <h1 className="text-3xl font-bold underline">Chirayu Medical Assure</h1>
        <h2>Your Partner in Healthcare Administration Services</h2>
    </div>    
    </>
  )
}

export default Index