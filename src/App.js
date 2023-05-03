import { Route, Routes } from "react-router-dom";
import Layout from "./Components/layout";
import "./main.css";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import AddVenue from "./Pages/AddVenue";
import Venue from "./Pages/Venue";
import EditAvatar from "./Pages/EditAvatar";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Profile/:name' element={<Profile />} />
        <Route path='/AddVenue' element={<AddVenue />} />
        <Route path='/Venue/:id' element={<Venue />} />
        <Route path='/EditAvatar' element={<EditAvatar />} />
      </Routes>
    </Layout>
  );
}

export default App;
