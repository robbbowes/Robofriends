import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { robots } from './robots';

ReactDOM.render(
    <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} robots/>, 
    document.getElementById('root'));
serviceWorker.unregister();
