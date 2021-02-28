import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { DetailBook, Home, Login, RegisterBook, RegisterUser, UpdateUser, UpdateUserPassword, UserList } from './pages/index';
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
                        <Route
                            exact
                            path="/book/detail/:id"
                            component={DetailBook}
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
