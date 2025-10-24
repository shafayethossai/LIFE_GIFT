import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import NavBar from "../home-page/components/navbar";
import Carousel from "../home-page/components/carousel";
import Footer from "../home-page/components/footer";
import UserProfile from "../profile/components/user-profile";
import Collection from '../Collection/components/CollectionBody';
import Author from '../Authority/components/AuthorBody';
import Login from '../Login/components/loginPage';
import Features from "../Feature/components/Features";

// Donation components (case-sensitive paths)
import DonationCollection from "../Donation/components/collection";
import Heart from "../Donation/components/heart";
import Lung from "../Donation/components/lungs";
import Liver from "../Donation/components/liver";
import Kidney from "../Donation/components/kidney";
import Eye from "../Donation/components/eye";
import Blood from "../Donation/components/blood";

import HeartForm from "../Donation/Form/HeartForm";
import LungForm from "../Donation/Form/LungsForm";
import LiverForm from "../Donation/Form/LiverForm";
import KidneyForm from "../Donation/Form/KidneyForm";
import EyeForm from "../Donation/Form/EyeForm";
import BloodForm from "../Donation/Form/BloodForm";

// Collection Form
import CollectionBlood from "../Collection/Form/Blood";
import CollectionEye from "../Collection/Form/Eye";
import CollectionHeart from "../Collection/Form/Heart";
import CollectionKidney from "../Collection/Form/Kidney";
import CollectionLiver from "../Collection/Form/Liver";
import CollectionLung from "../Collection/Form/Lung";

import "../../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Protected Route component
function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return isLoggedIn ? children : <Navigate to="/" />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route shows Login page */}
        <Route path="/" element={<Login />} />
        
        {/* Protected routes - only accessible after login */}
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

        {/* Donation routes implemented here (no nested Router) */}
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

        {/* Form pages */}
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

        {/* Collection form routes (used by CollectionBody links like /form/heart) */}
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

        {/* Redirect all unknown routes to login */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;