import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavStudent from "./components/NavStudent";
import NavAdmin from "./components/NavAdmin";
import Navbar from "./components/Navbar";
import TopRecruiters from "./components/TopRecruiters";
import CampusLife from "./components/CampusLife";
import Alumni from "./components/Alumni";
import Footer from "./components/Footer";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Announcements from "./components/Announcements";
import JobListings from "./components/JobListings";
import Profile from "./components/Profile";
import Applications from "./components/Applications";
import Announcements_Admin from "./components/Announcements_Admin";
import Companies_Admin from "./components/Companies_Admin";
import Applications_Admin from "./components/Applications_Admin";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogin = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <Router>
      {user ? (
        user.userType === "Student" ? (
          <NavStudent onLogout={handleLogout} />
        ) : (
          <NavAdmin onLogout={handleLogout} />
        )
      ) : (
        <Navbar />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <main className="main_Img">
                <div className="logo-container">
                  <img
                    src="https://cdn.freelogovectors.net/wp-content/uploads/2022/03/chandigarh_university_logo_cu_freelogovectors.net_.png"
                    alt="Chandigarh University Logo"
                    className="main-logo"
                  />
                </div>
                <h1>
                  Welcome to the Chandigarh University <br />
                  Campus Portal 2025
                </h1>
                <div className="main_Cont">
                  Chandigarh University is a hub of innovation, academic excellence, and global opportunities. We foster research, industry collaborations, and a vibrant community, empowering students to grow personally and professionally while making a meaningful impact on society.
                </div>
              </main>
              <TopRecruiters />
              <CampusLife />
              <Alumni />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/student/announcements" element={<Announcements />} />
        <Route path="/student/jobListings" element={<JobListings />} />
        <Route path="/student/applications" element={<Applications />} />
        <Route path="/student/profile" element={<Profile user={user} />} />
        <Route path="/admin/announcements" element={<Announcements_Admin />} />
        <Route path="/admin/manage-companies" element={<Companies_Admin />} />
        <Route path="/admin/applications" element={<Applications_Admin />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
