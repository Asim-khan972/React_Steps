import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Menu from './components/Menu';

function App() {
  return (
   <div className='container'>
   <Navbar/>
    <Menu/>
   <Footer/>
   </div>
  );
}

export default App;
