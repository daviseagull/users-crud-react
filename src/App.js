import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserManagement from "./pages/UserManagement/UserManagement";
import UserForm from "./pages/UserForm/UserForm";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserManagement />} />
        <Route path="/user-form" element={<UserForm type='create' />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
