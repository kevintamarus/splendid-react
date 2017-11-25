import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';

class PlayerInfo extends Component {
  constructor(props) {
    super(props);
    this.handleHoverColors = this.handleHoverColors.bind(this);
    this.state = {
      backgroundReservedCards: 'default'
    }
  }

  handleHoverColors(name, color) {
    let state = 'background' + name;
    this.setState({[state]: color});
  }

  render() {
    let info = this.props.playerDetails;
    return (
      <div>
        <Panel>
          <div className="col-sm-2" style={{fontSize: 18, cursor: "pointer"}}  onClick={() => this.props.toggleModal('Details')}>
            <i className="fa fa-bolt fa-2x"/> Points: {info.points}
          </div>
          <div className="col-sm-3" style={{cursor: "pointer"}} onClick={() => this.props.toggleModal('Details')}>
            <i className="fa fa-bandcamp fa-2x" style={{color:'gray'}}>{info.coins.white + info.persistColors.white}</i>
            <i className="fa fa-bandcamp fa-2x" style={{color:'blue'}}>{info.coins.blue + info.persistColors.blue}</i>
            <i className="fa fa-bandcamp fa-2x" style={{color:'green'}}>{info.coins.green + info.persistColors.green}</i>
            <i className="fa fa-bandcamp fa-2x" style={{color:'red'}}>{info.coins.red + info.persistColors.red}</i>
            <i className="fa fa-bandcamp fa-2x" style={{color:'black'}}>{info.coins.black + info.persistColors.black}</i>
            <i className="fa fa-bandcamp fa-2x" style={{color:'#DAA520'}}>{info.coins.gold}</i>
          </div>
          <div className="col-sm-3" style={{cursor: "pointer"}} onClick={() => this.props.toggleModal('Details')}>
            <i className="fa fa-eercast fa-2x" style={{color:'gray'}}>{info.persistColors.white}</i>
            <i className="fa fa-eercast fa-2x" style={{color:'blue'}}>{info.persistColors.blue}</i>
            <i className="fa fa-eercast fa-2x" style={{color:'green'}}>{info.persistColors.green}</i>
            <i className="fa fa-eercast fa-2x" style={{color:'red'}}>{info.persistColors.red}</i>
            <i className="fa fa-eercast fa-2x" style={{color:'black'}}>{info.persistColors.black}</i>
          </div>
          <div 
            className="col-sm-2" 
            style={{fontSize: 19, color: info.coins.total < 10? 'black': 'red', cursor: "pointer"}}
            onClick={() => this.props.toggleModal('Details')}
          >
            <i className="fa fa-superpowers fa-2x" style={{color: info.coins.total < 10? 'black': 'red'}}/> Total Coins: {info.coins.total}
          </div>
          <div 
            className="col-sm-2" 
            style={{
              backgroundColor: this.state.backgroundReservedCards, 
              fontSize: 19, 
              color: info.reservedCards.length < 3? 'black': 'red',
              cursor: "pointer"
            }}
            onClick={() => this.props.toggleModal('ReservedCards')}
            onMouseEnter={() => this.handleHoverColors('ReservedCards', '#DCDCDC')}
            onMouseLeave={() => this.handleHoverColors('ReservedCards', 'white')}
          >
            <i className="fa fa-lock fa-2x" style={{color: info.reservedCards.length < 3? 'black': 'red'}}/> Reserved: {info.reservedCards.length}
          </div>
        </Panel>
      </div>
    )
  }
}

export default PlayerInfo;