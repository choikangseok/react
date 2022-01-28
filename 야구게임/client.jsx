import React from "react";
import ReactDom from "react-dom";
import { hot } from 'react-hot-loader/root';

// import Bgame from "./RenderTest";

import Bgame from './NumberBaseball';

const Hot = hot(Bgame);

// ReactDom.render(<Hot />, document.querySelector('#root'));
ReactDom.render(<Hot />, document.querySelector('#root'));