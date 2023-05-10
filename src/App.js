import { BrowserRouter, Route, Routes } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css"
import NavMenu from "./components/NavMenu.jsx";
import Home from './pages/Home.jsx';
import Page1 from './pages/Page1.jsx';
import Page2 from './pages/Page2.jsx';
import Error404 from './pages/Error404.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './styles/App.css';

function App() {
  return (
    <>

    <BrowserRouter>
      <NavMenu/>
      <Header />
      <Routes>
        <Route path= "/page1" element={<Page1 />}></Route>
        <Route path= "/page2" element={<Page2 />}></Route>
        <Route path= "/" element={<Home />}></Route>
        <Route path= "*" element={<Error404 />}></Route>      
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}
export default App;

    
    
        
      
