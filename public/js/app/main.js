'use strict';

import {React} from "../react/cjs/react.development.js";
import {ReactDOM} from "../react-dom/cjs/react-dom.development.js";
import {App} from "./components/app.js";

const e = React.createElement;

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(e(App));