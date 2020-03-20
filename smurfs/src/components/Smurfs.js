import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSmurf } from '../actions/index';

class Smurfs extends Component {
    componentDidMount() {
        this.props.fetchSmurf();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newSmurf) {
            this.props.smurfs.unshift(nextProps.newSmurfs)
        }
    }

    render(){
        const smurfItems = this.props.smurfs.map(smurf => (
            <div>
                <h3>{smurf.name}</h3>
                <p>Age: {smurf.age}</p>
                <p>Height: {smurf.height}</p>
            </div>
        ));

        return (
            <div>
                <h1>Smurf Village</h1>
                {smurfItems}
            </div>
        )
    }
}

Smurfs.PropTypes = {
    fetchSmurf: PropTypes.func.isRequired,
    smurfs: PropTypes.array.isRequired,
    newSmurf: PropTypes.object
}

const mapStatetoProps = state => ({
    smurfs: state.smurfs.items,
    newSmurf: state.smurfs.item,
});

export default connect(mapStateToProps, { fetchSmurf })(Smurfs);