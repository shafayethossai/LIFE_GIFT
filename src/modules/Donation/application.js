import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Collection from "./components/collection";

import Heart from "./components/heart";
import Lung from "./components/lungs";
import Liver from "./components/liver";
import Kidney from "./components/kidney";
import Eye from "./components/eye";
import Blood from "./components/blood";

import HeartForm from "./Form/HeartForm";
import LungForm from "./Form/LungsForm";
import LiverForm from "./Form/LiverForm";
import KidneyForm from "./Form/KidneyForm";
import EyeForm from "./Form/EyeForm";
import BloodForm from "./Form/BloodForm";

function Application() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Collection />} />

        {/* Organ info pages */}
        <Route path="/heart" element={<Heart />} />
        <Route path="/lung" element={<Lung />} />
        <Route path="/liver" element={<Liver />} />
        <Route path="/kidney" element={<Kidney />} />
        <Route path="/eye" element={<Eye />} />
        <Route path="/blood" element={<Blood />} />

        {/* Form pages */}
        <Route path="/form/heart" element={<HeartForm />} />
        <Route path="/form/lung" element={<LungForm />} />
        <Route path="/form/liver" element={<LiverForm />} />
        <Route path="/form/kidney" element={<KidneyForm />} />
        <Route path="/form/eye" element={<EyeForm />} />
        <Route path="/form/blood" element={<BloodForm />} />
      </Routes>
    </Router>
  );
}

export default Application;
