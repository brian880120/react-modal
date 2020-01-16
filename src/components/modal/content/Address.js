import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { updatePostcode } from '../../../store/actions/address.action';

class Address extends React.Component {
    state = {
        postcode: this.props.address.postcode,
        isEditing: !this.props.address.postcode,
    };

    backupPostcode = this.props.address.postcode;

    handleChange = (event) => {
        this.setState({
            postcode: event.target.value,
        });
    };

    onSave = () => {
        if (this.state.postcode) {
            this.props.updatePostcode(this.state.postcode);
            this.setState({
                isEditing: false,
            });
        }
    };

    onCancel = () => {
        this.setState({
            isEditing: false,
            postcode: this.backupPostcode,
        });
    };

    onChangeClick = () => {
        this.setState({
            isEditing: true,
        });
        this.backupPostcode = this.state.postcode;
    };

    render() {
        const { isEditing, postcode } = this.state;

        return (
            <div>
                <h2>Delivery</h2>
                {
                    isEditing ?
                    (
                        <div>
                            <input type="text"
                                value={this.state.postcode}
                                onChange={this.handleChange} />
                            <button onClick={this.onSave}>save</button>
                            <button onClick={this.onCancel}>cancel</button>
                        </div>

                    ) :
                    (
                        <div>
                            <p>{postcode}</p>
                            <button onClick={this.onChangeClick}>chagne postcode</button>
                            <button>to pickup</button>
                        </div>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        address: state.address,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updatePostcode: bindActionCreators(updatePostcode, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Address);