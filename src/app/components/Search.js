// @flow
import React from 'react';
import SearchIcon from '../icons/search';
import _ from 'lodash';

export default class Search extends React.Component {
    state: {
        value: string
    };
    handleChange: Function;
    handleKeyPress: Function;
    handleSubmit: Function;
    constructor(props: Object) {
        super(props);
        this.state = {value: props.query || ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event: Object) {
        this.setState({value: event.target.value});
    }
    handleKeyPress(event: Object) {
        if(event.key === 'Enter')
            this.handleSubmit(event);
    }
    handleSubmit(event: Object) {
        if(this.state.value.length) {
            const newValue =
                _(this.state.value)
                    .chain()
                    .split('/')
                    .compact()
                    .last()
                    .value();
            this.setState({value: newValue});
            this.props.validate(newValue);
        }
    }
    componentDidMount() {
        if(this.state.value)
            this.handleSubmit();
    }
    render() {
        return (
            <div className="searchbar">
                <div className="shadow"></div>
                <div className="bg"></div>
                <input
                    type="text"
                    placeholder="Look for someone"
                    value={this.state.value}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress} />
                <button onClick={this.handleSubmit}>
                    <SearchIcon />
                </button>
            </div>
        )
    }
}

Search.propTypes = {
    validate: React.PropTypes.func,
    query: React.PropTypes.string
};
