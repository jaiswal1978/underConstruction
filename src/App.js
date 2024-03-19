import logo from './logo.svg';
import './App.css';
import Lottie from 'lottie-react';
import underConstruction from '../src/assests/images/underConstruction1.json';


function App() {
  return (
    <>
    <div className='AnnimationContainer'>
        <Lottie className='animationdata' animationData={underConstruction} loop={true} />
        <h1>Chirayu Medical Assure</h1>
        <h2>Your Partner in Healthcare Administration Services</h2>
    </div>
    </>
  );
}

export default App;
