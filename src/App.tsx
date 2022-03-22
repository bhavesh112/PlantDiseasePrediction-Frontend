import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import StyledCard from "./components/StyledCard";
import UploadForm from "./components/UploadForm/UploadForm";
import Result from "./components/Result/Result";
import Loader from "./components/Loader";
import College from "./components/College";
function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar />

          <StyledCard>
            <Routes>
              <Route path='/' element={<UploadForm />} />
              <Route path='/result' element={<Result />} />
            </Routes>
          </StyledCard>
          <College />
        </Router>
      </Provider>
    </>
  );
}

export default App;
