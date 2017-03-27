import React, { Component } from 'react';

class BaseLiftInput extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) { 
        this.setState({value: event.target.value}); 
        this.props.onChange({name: this.props.shortname, value: event.target.value});
    }

    render() {
        return(
            <span>
                <span className="visible-sm visible-xs">
                    <div className="col-md-12" style={{display: 'table', margin: '0 auto'}}>
                        <strong>{this.props.name}</strong>
                        <input type="number" className="form-control" style={{textAlign: 'center'}} value={this.state.value} onChange={this.handleChange}/>
                    </div>
                </span>

                <span className="hidden-sm hidden-xs">
                    <strong>{this.props.name}</strong>
                    <input type="number" className="form-control" style={{textAlign: 'center'}} value={this.state.value} onChange={this.handleChange}/>
                </span>
            </span>
        );
    }
}

export {BaseLiftInput};
// vim: filetype=javascript.jsx