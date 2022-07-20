import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import UsersList from "./pages/UsersList";
import AddUser from "./pages/AddUser";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<UsersList />}></Route>
        <Route path="/addUser" element={<AddUser />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
