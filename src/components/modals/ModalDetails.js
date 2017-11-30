import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';

export default class ModalDetails extends Component {
  render() {
    let info = this.props.playerDetails;
    return (
      <Modal 
        className="text-center"
        bsSize="large" 
        aria-labelledby="contained-modal-title-sm"
        show={this.props.showModalDetails}
        onHide={() => this.props.toggleModal('Details')}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">Player Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center" style={{fontSize: 18, cursor: "pointer"}}  onClick={() => this.props.toggleModal('Details')}>
            <i className="fa fa-bolt fa-2x"/> {info.points}
          </div>
          <div className="text-center" style={{cursor: "pointer"}} onClick={this.toggleCoins}>
            Total Coins: 
            <i className="fa fa-bandcamp fa-2x" style={{color:'gray'}}>{info.coins.white}</i>
            <i className="fa fa-bandcamp fa-2x" style={{color:'blue'}}>{info.coins.blue}</i>
            <i className="fa fa-bandcamp fa-2x" style={{color:'green'}}>{info.coins.green}</i>
            <i className="fa fa-bandcamp fa-2x" style={{color:'red'}}>{info.coins.red}</i>
            <i className="fa fa-bandcamp fa-2x" style={{color:'black'}}>{info.coins.black}</i>
          </div>
          
          <div className="text-center" style={{cursor: "pointer"}} onClick={() => this.props.toggleModal('BoughtCards')}>
            Persistent Colors:
            <i className="fa fa-eercast fa-2x" style={{color:'gray'}}>{info.persistColors.white}</i>
            <i className="fa fa-eercast fa-2x" style={{color:'blue'}}>{info.persistColors.blue}</i>
            <i className="fa fa-eercast fa-2x" style={{color:'green'}}>{info.persistColors.green}</i>
            <i className="fa fa-eercast fa-2x" style={{color:'red'}}>{info.persistColors.red}</i>
            <i className="fa fa-eercast fa-2x" style={{color:'black'}}>{info.persistColors.black}</i>
          </div>

          <div className="text-center" style={{cursor: "pointer"}} onClick={() => this.props.toggleModal('Details')}>
            Buying Power:
            <i className="fa fa-superpowers fa-2x" style={{color:'gray'}}>{info.coins.white + info.persistColors.white}</i>
            <i className="fa fa-superpowers fa-2x" style={{color:'blue'}}>{info.coins.blue + info.persistColors.blue}</i>
            <i className="fa fa-superpowers fa-2x" style={{color:'green'}}>{info.coins.green + info.persistColors.green}</i>
            <i className="fa fa-superpowers fa-2x" style={{color:'red'}}>{info.coins.red + info.persistColors.red}</i>
            <i className="fa fa-superpowers fa-2x" style={{color:'black'}}>{info.coins.black + info.persistColors.black}</i>
            <i className="fa fa-superpowers fa-2x" style={{color:'#DAA520'}}>{info.coins.gold}</i>
          </div>
          
            
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.props.toggleModal('Details')}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}