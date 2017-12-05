import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import Card from '../gameplay_components/Card';

export default class ModalBoughtCards extends Component {

  render() {
    return (
      <Modal 
        className="text-center"
        bsSize="large" 
        aria-labelledby="contained-modal-title-sm"
        show={this.props.showModalBoughtCards}
        onHide={() => this.props.toggleModal('BoughtCards')}>
        <Modal.Header>
          {this.props.cards.map((card, index) => {
            return <Card
              className={'col-sm-3'} 
              card={card}
              key={index}
              index={index}
              level={'Bought'}
              convertColor={this.props.convertColor}
              convertStyle={this.props.convertStyle}
            />
          })}
        </Modal.Header>
        <Modal.Body closeButton>
          <Modal.Title id="contained-modal-title-sm">Your Cards</Modal.Title>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.props.toggleModal('BoughtCards')}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}