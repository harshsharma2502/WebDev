import { Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import Error from "./components/Error";
import Footer from "./components/Footer";
import FormHandling from "./components/FormHandling";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Language from "./components/Language";
import Table from "./components/Table";
import UseEffectInfo from "./components/UseEffectInfo";
import UseContextInfo from "./components/UseContextInfo";
import UseReducerInfo from "./components/UseReducerInfo";

const App = () => {
  return (
    <div className="container mt-3">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/counter" element={<Counter count={1} />} />
        <Route path="/form" element={<FormHandling />} />
        <Route path="/table" element={<Table n={6} />} />
        <Route path="/table/:num" element={<Table />} />
        <Route path="/query" element={<Language />} />
        <Route path="/useeffect" element={<UseEffectInfo />} />
        <Route path="/usecontext" element={<UseContextInfo />} />
        <Route path="/usereducer" element={<UseReducerInfo />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
// * should be last otherwise no other link will work
//:num is any variable, making url parameter
