import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';
import Notes from './data.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';


console.log(toml.title);        // output 'TOML Example'
console.log(toml.owner.name);   // output 'Tom preston-Werner'

console.log(yaml.title);        // 'YAML example"
console.log(yaml.owner.name);   // 'Tom preston-Werner'

console.log(json.title);        // 'JSON5 Example'
console.log(json.owner.name);   // 'Tom Preston-Werner'

function component() {
    const element = document.createElement('div');
    
    // Lodash, now imported by this script
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.innerHTML = "als;djkfasd";
    element.classList.add('hello');
    
    // Add the image to our esisting div.
    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    
    console.log(Data);
    console.log(Notes);
    
    return element;
}
  
document.body.appendChild(component());