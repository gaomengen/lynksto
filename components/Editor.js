import React from 'react'; 
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const quillBubbleStyle =  require('../static/quillBubbleStyle').default;

class Editor extends React.Component {
  constructor (props) {
    super(props)
    if (typeof window !== 'undefined') {
      this.ReactQuill = require('react-quill')
    }
    this.state = { editorHtml: ''}
    this.handleChange = this.handleChange.bind(this)   
  }
  
  handleChange (html) {
  	this.setState({ editorHtml: html });
  }
  
    /* 
    * Quill modules to attach to editor
    * See https://quilljs.com/docs/modules/ for complete options
    */
    modules = {
        toolbar: true,
        clipboard: {
            // toggle to add extra line breaks when pasting HTML:
            matchVisual: true,
        }
    }
    /* 
    * Quill editor formats
    * See https://quilljs.com/docs/formats/
    */
    formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
    ]

    propTypes = {
        placeholder: PropTypes.string,
    }

  render() {
      const ReactQuill = this.ReactQuill;
      if (typeof window !== 'undefined' && ReactQuill){
        return (
            <React.Fragment>
                <ReactQuill 
                    theme='bubble'
                    onChange={this.handleChange}
                    value={this.state.editorHtml}
                    modules={this.modules}
                    formats={this.formats}
                    bounds={'.app'}
                    placeholder={this.props.placeholder}
                />
            </React.Fragment>
            )
     } else {
         return (<div className="app"></div>);
     }
  }
}


export default withStyles(quillBubbleStyle)(Editor);