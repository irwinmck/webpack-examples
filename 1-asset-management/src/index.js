import _ from 'lodash';
import './style.css';

import Icon from './icon.png';
import Data from './note.xml';

function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log(Data);

  return element;
}

document.body.appendChild(component());