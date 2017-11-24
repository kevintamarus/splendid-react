import React, {Component} from 'react';
import {Panel, ButtonGroup, Button} from 'react-bootstrap';

class CoinsDisplay extends Component {
  constructor(props) {
    super(props);
    this.toggleButtonsOn = this.toggleButtonsOn.bind(this);
    this.toggleButtonsOff = this.toggleButtonsOff.bind(this);
    this.updateSelectedCoins = this.updateSelectedCoins.bind(this);
    this.state = {
      showButtons: false,
      selectedCoins: []
    }
  }

  toggleButtonsOn() {
    if(this.props.isPlayerTurn) {this.setState({showButtons: true})};
  }

  toggleButtonsOff() {
    this.setState({selectedCoins: []});
    this.setState({showButtons: false});
  }

  updateSelectedCoins(color, colorIndex) {
    const coins = this.state.selectedCoins;
    const duplicateCheck = (a) => {
      for(let i = 0; i < a.length; i++) {
        for(let x = i; x < a.length; x++) {
          if(x !== i && a[x] === a[i]) {
            return true;
          }
        }
        return false;
      }
    }
    //prevents player from picking up coin if there are no coins of that color
    if(!this.props.coins[colorIndex] && coins.length === 0){this.setState({showButtons: false}); return;}
    //prevents player from picking up 2 coins of the same color if colored coin is less than 3
    if(this.props.coins[colorIndex] <= 2 && coins.includes(color)){return;}
    //prevents player from picking up another coin of the same color if they already have 2 coins
    if(coins.length < 3 && !duplicateCheck(coins) && this.props.coins[colorIndex]) {
      if(!coins.includes(color) || coins.length < 2) {
        this.setState({selectedCoins: coins.concat(color)});
      }
    }
  }

  render() {
    return (
      <div>
        <div>
          <Panel
            style={{cursor:'pointer'}}
            onClick={() => { this.toggleButtonsOn();
              this.updateSelectedCoins('white', 0);
            }} 
            className="col-sm-2 text-center" 
            header={<i className="fa fa-bandcamp fa-2x" style={{color:'gray'}}/>}>
            {this.props.coins[0]}
          </Panel>
          <Panel
            style={{cursor:'pointer'}}
            onClick={() => { this.toggleButtonsOn();
              this.updateSelectedCoins('blue', 1);
            }} 
            className="col-sm-2 text-center"
            header={<i className="fa fa-bandcamp fa-2x" style={{color:'blue'}}/>}
            bsStyle="primary">
            {this.props.coins[1]}
          </Panel>
          <Panel
            style={{cursor:'pointer'}}
            onClick={() => { this.toggleButtonsOn();
              this.updateSelectedCoins('green', 2);
            }} 
            className="col-sm-2 text-center" 
            header={<i className="fa fa-bandcamp fa-2x" style={{color:'green'}}/>}
            bsStyle="success">
            {this.props.coins[2]}
          </Panel>
          <Panel
            style={{cursor:'pointer'}}
            onClick={() => { this.toggleButtonsOn();
              this.updateSelectedCoins('red', 3);
            }} 
            className="col-sm-2 text-center" 
            header={<i className="fa fa-bandcamp fa-2x" style={{color:'red'}}/>}
            bsStyle="danger">
            {this.props.coins[3]}
          </Panel>
          <Panel
            style={{cursor:'pointer'}}
            onClick={() => { this.toggleButtonsOn();
              this.updateSelectedCoins('black', 4);
            }} 
            className="col-sm-2 text-center" 
            header={<i className="fa fa-bandcamp fa-2x" style={{color:'black'}}/>} 
            bsStyle="default">
            {this.props.coins[4]}
          </Panel>
          <Panel
            style={{cursor:'pointer'}}
            onClick={() => alert("You must reserve a Card collect a Gold Coin")} 
            className="col-sm-2 text-center" 
            header={<i className="fa fa-bandcamp fa-2x" style={{color:'#DAA520'}}/>}
            bsStyle="warning">
            {this.props.coins[5]}
          </Panel>
        </div>
        { this.state.selectedCoins ?
          <div className="text-center">
            {this.state.selectedCoins.map((value, key) => {
              if(value === 'white') { value = 'gray'}
              return <i className="fa fa-bandcamp fa-4x" style={{color: value}} key={key}/>
            })}
          </div>: null
        }
        { this.state.showButtons && this.props.isPlayerTurn ?
          <div className="text-center">
            <ButtonGroup>
              <Button 
                bsClass="btn btn-w-m btn-danger"
                onClick={this.toggleButtonsOff}>
                Reset Selection
              </Button>
              <Button
                bsClass="btn btn-w-m btn-success"
                onClick={this.toggleButtonsOff}>
                Confirm Selection
              </Button>
            </ButtonGroup>
          </div> : null
        }
      </div>
    )
  }
}

export default CoinsDisplay;