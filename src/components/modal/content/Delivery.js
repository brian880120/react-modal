import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { updateMode } from '../../../store/actions/shopmode.action';
import Address from './Address';

class Delivery extends React.Component {
    toDelivery = () => {
        this.props.updateMode('delivery');
    };

    toPickup = () => {
        this.props.updateMode('pickup');
    };

    render() {
        const { mode } = this.props;
        return (
            <div>
                <Address />
                <button onClick={this.toDelivery}>to delivery</button>
                <button onClick={this.toPickup}>to pickup</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        mode: state.mode,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateMode: bindActionCreators(updateMode, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Delivery);
