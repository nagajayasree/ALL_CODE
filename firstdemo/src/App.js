import React from "react";
import "./App.css";
import DisplayInfo from "./CallBackMethod/Parent";
import MainComp from "./LiftStateUp/Parent";
import ParentComp from "./PureComponent/ParentComp";
import LoginPage from "./Login/LoginPage";
import Counter from "./CodeTasks/Counter";
import SearchFilter from "./CodeTasks/Search";
import CodeSplit from "./CodeSplitting/MainComp";
import Child from "./ErrorBoundaries/Child";
import ErrorBoundary from "./ErrorBoundaries/ErrorBoundary";
import ErrorCheck from "./ErrorBoundaries/ErrorCheck";
import ErrBound from "./ErrorBoundaries/ErrBound";
import ExtraComp from "./ErrorBoundaries/ExtraComp";
import ErrorImg from "./ErrorBoundaries/ErrorImg";
import StylingTest from "./Styling/Comp";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Routing/Navbar";
import Home from "./Routing/Home";
import Products from "./Routing/Products";
import Aboutus from "./Routing/Aboutus";
import Child1 from "./Context/Child1";
import { UserProvider } from "./Context/UserContext";
import Student from "./Student/Student";
import InputFields from "./UI/InputFields";
import Login from "./Validations/Login";
import StuInfo from "./Validations/StuInfo";
import TableDisplay from "./ReusableTable/TableDisplay";
import Name from "./UncontrolledComps/UnConComp";
import Portal from "./Portals/Portal";
import ModalParent from "./Portals/ModalParent";
import BtnClick from "./HOC/BtnClick";
import BtnHover from "./HOC/BtnHover";
import dbData from "./DB/dbData";

function App() {
  return (
    <div className="App">
      {/* <InputFields /> */}
      {/* <BasicProgram sridhar="React.js">
        This is child
        <h1>h1 tag</h1>
      </BasicProgram> */}
      {/* <MainComp /> */}
      {/* <ParentComp /> */}
      {/* <LoginPage /> */}
      {/* <Counter /> */}
      {/* <DisplayInfo /> */}
      {/* <SearchFilter /> */}
      {/* <CodeSplit /> */}
      {/* <ErrorBoundary>
        <Child student="jayasree" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Child student="sree" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Child student="jayee" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Child student="jaysree" />
      </ErrorBoundary> */}
      {/* <ErrBound>
        <ErrorCheck setPwd="jayasree1" />
      </ErrBound>
      <ErrBound>
        <ExtraComp />
      </ErrBound> */}
      {/* <StylingTest /> */}
      {/* <Navbar />
      <div className="routing">
        <Switch>
          <Route path="/products" component={Products} />
          <Route path="/aboutus" component={Aboutus} />
          <Route path="/" component={Home} />
        </Switch>
      </div> */}
      {/* <UserProvider value="jayasree">
        <Child1></Child1>
      </UserProvider> */}
      {/* <InputFields></InputFields> */}
      {/* <Login/> */}
      {/* <Student /> */}
      {/* <StuInfo /> */}
      {/* <TableDisplay /> */}
      {/* <Name /> */}
      {/* <Portal /> */}
      {/* <ModalParent /> */}
      {/* <BtnClick /> */}
      {/* <br /> */}
      {/* <BtnHover /> */}
      <dbData />
    </div>
  );
}

export default App;
