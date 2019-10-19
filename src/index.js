"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ink_1 = require("ink");
exports.Counter = (props) => {
    const [counter, setCounter] = React.useState(0);
    React.useEffect(() => {
        const timer = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1);
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    });
    return (h(ink_1.Color, { green: true }, counter));
};
