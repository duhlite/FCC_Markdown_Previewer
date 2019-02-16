import React, {Component} from 'react';
import marked from 'marked';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {textArea: state.textArea};
};

class ConnectedPreview extends Component {
    getMarkdownText() {
        const rawMarkup = marked(this.props.textArea, {sanitize: true});
        return {__html: rawMarkup};
    }
    render() {
        return (
        <div 
        id='preview' 
        dangerouslySetInnerHTML={this.getMarkdownText()}
        />
        )
    }
};

const Preview = connect(mapStateToProps)(ConnectedPreview);

export default Preview;