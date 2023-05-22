import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserManagement from "./pages/UserManagement/UserManagement";
import UserForm from "./pages/UserForm/UserForm";
import UserDetails from "./pages/UserDetails/UserDetails";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserManagement />} />
        <Route path="/user-form" element={<UserForm type='create' />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
