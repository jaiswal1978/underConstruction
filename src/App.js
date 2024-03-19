import logo from './logo.svg';
import './App.css';
import Lottie from 'lottie-react';
import underConstruction from '../src/assests/images/underConstruction1.json';


function App() {
  return (
    <>
    <div className='AnnimationContainer'>
        <Lottie className='animationdata' animationData={underConstruction} loop={true} />
    </div>
    </>
  );
}

export default App;
