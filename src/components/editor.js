import React, { Component } from "react";
import {updatePreview} from '../actions/index';
import Preview from './preview';
import marked from 'marked';
import {connect} from 'react-redux';
import './editor.css';

marked.setOptions({
  breaks: true,
});

class ConnectedEditor extends Component {
    constructor() {
        super();

        this.state = {
            text: opener
        };
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount = () => {
        this.props.updatePreview(this.state.text);
    }

    handleChange(event) {
        this.setState({text: event.target.value});
        this.props.updatePreview(event.target.value);
    }

    render() {
        return (
            <div>
                <textarea 
                    id="editor" 
                    rows='20' 
                    cols='50'  
                    value={this.state.text} 
                    onChange = {this.handleChange}
                />
                <Preview />
            </div>
        )
    }
}

const opener = `# Markdown Editor 
## Made with React/Redux
[React](https://reactjs.org/) [Redux](https://redux.js.org/)
Here \`const inline = 'code'\` is **inline code**.
\`\`\`
function smallestCommons(arr) {
    let start = arr[0];
    let end = arr[1];
    if(end > start){
        arr.sort((a,b) => !a-b);
    }
    let comp = [];
    for(let x = arr[0]; x >= arr[1]; x--) {comp.push(x);}
    let y = comp[1];
    let g = 1;
    let solved = false;
    while(solved === false) {
        let i = y * g * comp[0];
        var test = [];
        for(let z of comp){
            if(i %z === 0){
                test.push(true);
            } else {test.push(false); break;};
        }
        if(test.every(g => g === true)) {
            return i;
            solved = true;
        }
        g++;
    }
}
\`\`\`
- Here is
- An unordered
- List
> And a Block Quote!
And one image!
![JEFF](https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/198001_207603472583863_3987851_n.jpg?_nc_cat=111&_nc_ht=scontent.fapa1-1.fna&oh=a0b933e85df9e5f5a94000c288fd1025&oe=5CE4856D)`

function mapDispatchToProps(dispatch) {
    return {
        updatePreview: textArea => dispatch(updatePreview(textArea))
    };
}

const Editor = connect(null, mapDispatchToProps)(ConnectedEditor);

export default Editor;