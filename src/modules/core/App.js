// ...existing code...
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Common Components
import NavBar from "../home-page/components/navbar";
import Carousel from "../home-page/components/carousel";
import Footer from "../home-page/components/footer";

// Main Pages
// fixed: import LoginPage from the actual Login folder (signup module was missing)
import LoginPage from "../Login/components/loginPage";
// If you have a Signup component, replace the Navigate redirect below with the actual component import.
// import SignupPage from "../Signup/components/signupPage";

import UserProfile from "../profile/components/user-profile";
import Collection from "../Collection/components/CollectionBody";
import Author from "../Authority/components/AuthorBody";
import Features from "../Feature/components/Features";

// Donation Components
import DonationCollection from "../Donation/components/collection";
import Heart from "../Donation/components/heart";
import Lung from "../Donation/components/lungs";
import Liver from "../Donation/components/liver";
import Kidney from "../Donation/components/kidney";
import Eye from "../Donation/components/eye";
import Blood from "../Donation/components/blood";

// Donation Forms
import HeartForm from "../Donation/Form/HeartForm";
import LungForm from "../Donation/Form/LungsForm";
import LiverForm from "../Donation/Form/LiverForm";
import KidneyForm from "../Donation/Form/KidneyForm";
import EyeForm from "../Donation/Form/EyeForm";
import BloodForm from "../Donation/Form/BloodForm";

// Collection Forms
import CollectionBlood from "../Collection/Form/Blood";
import CollectionEye from "../Collection/Form/Eye";
import CollectionHeart from "../Collection/Form/Heart";
import CollectionKidney from "../Collection/Form/Kidney";
import CollectionLiver from "../Collection/Form/Liver";
import CollectionLung from "../Collection/Form/Lung";

// CSS
import "../../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Protected Route Component
function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? children : <Navigate to="/login" />;
}

// App Component
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login & Signup */}
        <Route path="/login" element={<LoginPage />} />
        {/* If you don't have a signup page yet, redirect /signup to /login.
            Replace the element with <SignupPage /> if you add the signup component. */}
        <Route path="/signup" element={<Navigate to="/login" />} />

        {/* Home Page */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <NavBar />
              <Carousel />
              <Footer />
            </ProtectedRoute>
          }
        />

        {/* Profile Page */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <NavBar />
              <UserProfile />
              <Footer />
            </ProtectedRoute>
          }
        />

        {/* Collection Page */}
        <Route
          path="/collection"
          element={
            <ProtectedRoute>
              <NavBar />
              <Collection />
              <Footer />
            </ProtectedRoute>
          }
        />

        {/* Authority Page */}
        <Route
          path="/authority"
          element={
            <ProtectedRoute>
              <NavBar />
              <Author />
              <Footer />
            </ProtectedRoute>
          }
        />

        {/* Features Page */}
        <Route
          path="/features"
          element={
            <ProtectedRoute>
              <NavBar />
              <Features />
              <Footer />
            </ProtectedRoute>
          }
        />

        {/* Donation Section */}
        <Route
          path="/donation"
          element={
            <ProtectedRoute>
              <NavBar />
              <DonationCollection />
              <Footer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/donation/heart"
          element={
            <ProtectedRoute>
              <NavBar />
              <Heart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/donation/lung"
          element={
            <ProtectedRoute>
              <NavBar />
              <Lung />
            </ProtectedRoute>
          }
        />
        <Route
          path="/donation/liver"
          element={
            <ProtectedRoute>
              <NavBar />
              <Liver />
            </ProtectedRoute>
          }
        />
        <Route
          path="/donation/kidney"
          element={
            <ProtectedRoute>
              <NavBar />
              <Kidney />
            </ProtectedRoute>
          }
        />
        <Route
          path="/donation/eye"
          element={
            <ProtectedRoute>
              <NavBar />
              <Eye />
            </ProtectedRoute>
          }
        />
        <Route
          path="/donation/blood"
          element={
            <ProtectedRoute>
              <NavBar />
              <Blood />
            </ProtectedRoute>
          }
        />

        {/* Donation Forms */}
        <Route
          path="/donation/form/heart"
          element={
            <ProtectedRoute>
              <NavBar />
              <HeartForm />
              <Footer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/donation/form/lung"
          element={
            <ProtectedRoute>
              <NavBar />
              <LungForm />
              <Footer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/donation/form/liver"
          element={
            <ProtectedRoute>
              <NavBar />
              <LiverForm />
              <Footer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/donation/form/kidney"
          element={
            <ProtectedRoute>
              <NavBar />
              <KidneyForm />
              <Footer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/donation/form/eye"
          element={
            <ProtectedRoute>
              <NavBar />
              <EyeForm />
              <Footer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/donation/form/blood"
          element={
            <ProtectedRoute>
              <NavBar />
              <BloodForm />
              <Footer />
            </ProtectedRoute>
          }
        />

        {/* Collection Forms */}
        <Route
          path="/form/heart"
          element={
            <ProtectedRoute>
              <NavBar />
              <CollectionHeart />
              <Footer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/form/lung"
          element={
            <ProtectedRoute>
              <NavBar />
              <CollectionLung />
              <Footer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/form/kidney"
          element={
            <ProtectedRoute>
              <NavBar />
              <CollectionKidney />
              <Footer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/form/liver"
          element={
            <ProtectedRoute>
              <NavBar />
              <CollectionLiver />
              <Footer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/form/eye"
          element={
            <ProtectedRoute>
              <NavBar />
              <CollectionEye />
              <Footer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/form/blood"
          element={
            <ProtectedRoute>
              <NavBar />
              <CollectionBlood />
              <Footer />
            </ProtectedRoute>
          }
        />

        {/* Redirect Unknown Routes */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// ...existing code...