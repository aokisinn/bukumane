import React from "react";
import ReactDOM from "react-dom";
import Button from "react-bootstrap/Button";

const App: React.FC = () => {
    return (
        <div>
            Hello World<Button variant="primary">Primary</Button>
        </div>
    );
};

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
