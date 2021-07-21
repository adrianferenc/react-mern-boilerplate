import "./App.css";
import { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NavBar from "../../components/NavBar/NavBar";

function App() {
  const [user, setUser] = useState(null);
  return (
    <main className="App">


      {user ?
        <>
          <NavBar />
          <Switch>
            <Route path="/orders/new">
              <NewOrderPage />
            </Route>

            <Route path="/orders">
              <OrderHistoryPage />
            </Route>

            <Route>
              <Redirect to="/orders" />
            </Route>
          </Switch>
        </>
        : (
          <AuthPage />
        )}
    </main>
  );
}

export default App;