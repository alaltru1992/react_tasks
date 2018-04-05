//decorator === Higher Order Component
import React from 'react'

export default OriginalComponent => class DecoratedComponent extends React.Component {
    state = {
        openItemId: null,
        isAlready: true
    };

    toggleItem = openItemId => this.setState({ openItemId });
    toggleClose = (id) => this.setState({isAlready: !this.state.isAlready && this.state.openItemId === id});

    render() {
        return <OriginalComponent {...this.props}
                                  openItemId = {this.state.openItemId}
                                  toggleItem = {this.toggleItem}
                                  toggleClose = {this.toggleClose}
                                  isClose = {this.state.isAlready}
        />
    }
}