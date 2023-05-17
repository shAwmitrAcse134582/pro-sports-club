
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Header></Header>
      <br></br>
      <Body></Body>
      <ToastContainer></ToastContainer>
      <br></br>
      <Footer></Footer>
    </div>
  );
}

export default App;
