// src/components/Accordion/Accordion.js

import Inferno from 'inferno';
import Component from 'inferno-component';
import './Accordion.css';

function handleClick(ev) {
    let el = ev.target;
    el.classList.toggle("selected");
}

class Accordion extends Component {
  render(props) {
    let finalData = props.data;
    let finalData2 = props.data2;

    return(
    <div className="list-group-item">
      <h4 className="list-group-item-heading" onClick={ handleClick }>{finalData2}</h4>
      <p className="body list-group-item-text">{finalData}</p>
    </div>
    );
  }
}

export default Accordion;