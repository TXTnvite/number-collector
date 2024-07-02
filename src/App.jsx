import { useLocation } from "react-router-dom";
import Page from './components/Page';
import './App.css'
import Navbar from './components/Navbar';

function App() {
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <>
    {/* <Navbar/> */}
     <main>
        <Page currentPage={currentPage} />
      </main>
    </>
  )
}

export default App
