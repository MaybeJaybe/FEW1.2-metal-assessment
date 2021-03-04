import React from 'react';

class Like extends React.Component {
    state = {count: 0}
    componentDidMount() {
        this.setState({})
    }
    incrementCounter() {
        this.setState({count: this.state.count +1})
    }
    decrementCounter() {
        this.setState({count: this.state.count -1})
    }
    render() {
        return (
            <div>
                <div>Likes: {this.state.count}</div>
                <button onClick={this.incrementCounter.bind(this)}><g-emoji class="g-emoji" alias="thumbsup" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f44d.png">👍</g-emoji></button>
                <button onClick={this.decrementCounter.bind(this)}><g-emoji class="g-emoji" alias="thumbsdown" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f44e.png">👎</g-emoji></button>
            </div>
        )
    }
}
export default Like;