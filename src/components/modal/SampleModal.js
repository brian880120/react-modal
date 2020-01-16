import React from 'react';
import Modal from 'react-modal';
import Delivery from './content/Delivery';

const customStyles = {
    content : {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
};

class SampleModal extends React.Component {
    state = {
        isOpen: false,
    };

    openModal = () => {
        this.setState({
            isOpen: true,
        });
    };

    closeModal = () => {
        this.setState({
            isOpen: false,
        });
    };

    render() {
        const { isOpen } = this.state;

        return (
            <div>
                <button onClick={this.openModal}>Open Modal</button>
                <Modal isOpen={isOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    ariaHideApp={false}
                    contentLabel="Example Modal">
                    <Delivery />
                </Modal>
            </div>
        );
    }
}

export default SampleModal;
