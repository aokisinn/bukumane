import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { DetailBook, Home, Login, RegisterBook, Signup } from './pages/index';
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
                        <Route exact path="/signup" component={Signup} />
                        <Route
                            exact
                            path="/book/register"
                            component={RegisterBook}
                        />                        
                        <Route
                            exact
                            path="/book/detail"
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
