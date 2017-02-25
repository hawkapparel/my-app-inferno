// src/components/DinoDetail/DinoDetail.js

import Inferno from 'inferno';
import Component from 'inferno-component';
import './DinoDetail.css';
import Accordion from './../Accordion/Accordion';

class DinoDetail extends Component {
  render(props) {
    let dino = props.dino;

    return(
      <div className="DinoDetail">
        {
          dino ? (
            <div className="list-group">
              <div className="list-group-item list-group-item-info">
                <h3 className="list-group-item-heading text-center">{dino.name}</h3>
                <div className="list-group-item-img-container">
                  <img src={dino.img} />
                </div>
              </div>
              <Accordion data={dino.pronunciation} data2={"pronunciation"}/>

              <Accordion data={dino.meaningOfName} data2={"Meaning of Name"}/>

              <div className="list-group-item">
                <h4 className="list-group-item-heading">Period</h4>
                <p className="list-group-item-text">
                  {dino.period} ({dino.mya} million years ago)
                </p>
              </div>

              <Accordion data={dino.diet} data2={"Diet"}/>

              <Accordion data={dino.length} data2={"Length"}/>

              <Accordion data={dino.info} data2={"Description"}/>

            </div>
          ) : (
            <p className="lead">
              <em>Select a dinosaur to see details.</em>
            </p>
          )
        }
      </div>
    );
  }
}

export default DinoDetail;