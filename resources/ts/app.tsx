import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RegisterUser from "./pages/user/RegisterUser";
import UpdateUser from "./pages/user/UpdateUser";
import UpdateUserPassword from "./pages/user/UpdateUserPassword";
import UserList from "./pages/user/UserList";
import RegisterBook from "./pages/book/RegisterBook";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AuthProvider from "./context/auth/AuthProvider";

const App: React.FC = () => {
    return (
        <Router>
            <AuthProvider>
                <Header />
                <main role="main" className="pt-5">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/user/list" component={UserList} />
                        <Route
                            exact
                            path="/user/register"
                            component={RegisterUser}
                        />
                        <Route
                            exact
                            path="/user/update"
                            component={UpdateUser}
                        />
                        <Route
                            exact
                            path="/user/update_password"
                            component={UpdateUserPassword}
                        />
                        <Route
                            exact
                            path="/book/register"
                            component={RegisterBook}
                        />
                    </Switch>
                </main>
                <Footer />
            </AuthProvider>
        </Router>
    );
};

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
