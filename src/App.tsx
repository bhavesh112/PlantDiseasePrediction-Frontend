import React from "react";
import { Provider } from "react-redux";
import Form from "./components/Form";
import Header from "./components/Header";
import { store } from "./app/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Form />
      </Provider>
    </>
  );
}

export default App;
