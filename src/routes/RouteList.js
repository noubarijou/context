import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import Cart from '../components/Cart';
import Home from '../components/Home';
import Context from "../context/Context";
const RouteList = () => {
    return (
<>

<BrowserRouter>
<Context>
  <Header />
  <div>
      <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/cart' element={<Cart />} />

    </Routes>
  </div>
  </Context>
  </BrowserRouter>
</>
    )
}
export default RouteList;
