import React , { Component } from 'react'
import { connect } from 'react-redux'

import ItemDeatail from '../components/Home/ItemDetail'

import { fetchListItemApi } from '../actions/home'
import Bar from '../components/common/Bar'
import Nav from '../components/common/Nav'

import ReactMarkdown from 'react-markdown'


var assign = require('lodash.assign');
var CodeBlock = require('./code-block');
var Markdown = require('react-markdown')
var h = React.createElement;
	
class List extends Component{

	componentDidMount(){
	    const { dispatch } = this.props
	    dispatch(fetchListItemApi(this.props.params.id))
	}


	constructor(props) {
	  super(props);
	
	  this.state = {
	  	markdownSrc: [
                '# Live demo\n\nChanges are automatically rendered as you type.\n\n* Follows the ',
                '[CommonMark](http://commonmark.org/) spec\n* Renders actual, "native" React DOM ',
                'elements\n* Allows you to escape or skip HTML (try toggling the checkboxes above)',
                '\n* If you escape or skip the HTML, no `dangerouslySetInnerHTML` is used! Yay!\n',
                '\n## HTML block below\n\n<blockquote>\n    This blockquote will change based ',
                'on the HTML settings above.\n</blockquote>\n\n## How about some code?\n',
                '```js\nvar React = require(\'react\');\nvar Markdown = require(\'react-markdown\');',
                '\n\nReact.render(\n    <Markdown source="# Your markdown here" />,\n    document.',
                'getElementById(\'content\')\n);\n```\n\nPretty neat, eh?\n\n', '## More info?\n\n',
                'Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)\n\n',
                '---------------\n\n',
                'A component by [VaffelNinja](http://vaffel.ninja) / Espen Hovlandsdal'
            ].join(''),

            htmlMode: 'raw'
	  };
	}

	onMarkdownChange(md) {
        this.setState({
            markdownSrc: md
        });
    }

    onControlsChange(mode) {
        this.setState({ htmlMode: mode });
    }

    fn(){
    	return assign({}, Markdown.renderers, {
                            CodeBlock: CodeBlock
                        })
    }

	render() {
        return (
        		<div>
        			<Nav/>
        			<div className='content1'>
	        			<div className='content2'>
			        		<div className='result-pane'>
			        			<Markdown source={ this.props.item.content} renderers={this.fn()} className='result'/>

			        		</div>
		        		</div>
	        		</div>
                </div>
           
        );
    }
}


function map(state) {
  return {
    item: state.home.fetchItem
  }
}

export default connect(map)(List)

const Styles = {
  content:{

  }
}