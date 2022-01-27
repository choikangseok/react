import React, {Component} from 'react';

class Try extends Component {
    render() {
        return(
            <li>
                <b>{this.props.value.fruit}</b> - {this.props.index}
                <div>컨텐츠</div>
                <div>컨텐츠</div>
                <div>컨텐츠</div>
                <div>컨텐츠</div>
            </li>
        )
    }
}


export default Try;