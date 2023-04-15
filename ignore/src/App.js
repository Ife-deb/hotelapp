import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Reserve from "./pages/reserve/Reserve";
import ReserveEmployee from "./pages/reserveEmployee/ReserveEmployee";
import Records from "./pages/records/Records";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/customer-reserve" element={<Reserve/>}/>
        <Route path="/employee-reserve" element={<ReserveEmployee/>}/>
        <Route path="/records" element={<Records/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
