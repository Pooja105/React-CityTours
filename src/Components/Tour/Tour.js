import React, {Component} from 'react';
import "./Tour.scss";


export default class Tour extends Component {
    state = {
        showInfo : false
    }

    handleInfo = (id) => {
        this.setState({
            showInfo: !this.state.showInfo
        });
    }
    render() {
        const {id,city, info, img, name} = this.props.tour;
        const {removeTour} = this.props;
        return (
            <article className="tour">
              <div className="img-container">
                  <img 
                  alt=""
                  src={img} />   
              <span className="close-btn" onClick={() => removeTour(id)}>
                    <i className="fas fa-window-close" />
              </span> 
              </div>
              <div className="tour-info">
                  <h3>{city}</h3>
                  <h4>{name}</h4>
                  <h5> info {" "}
                      <span onClick={() => this.handleInfo(id)}>
                        <i className="fas fa-caret-square-down"/>
                      </span>
                  </h5> 
                  {this.state.showInfo && <p>{info}</p>} 
              </div>        
            </article>    
        );
    }
}