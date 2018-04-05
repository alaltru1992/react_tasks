import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import {findDOMNode} from 'react-dom'
import Article from '../article'
import accordion from '../../decorators/accordion'

export class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        openItemId: PropTypes.string,
        toggleItem: PropTypes.func,
        toggleClose: PropTypes.func,
        isClose: PropTypes.bool
    };

    componentDidMount() {
        const { fetchData } = this.props;
        if (fetchData) fetchData()
    }

    render() {
        return (
            <ul>
                {this.getArticles()}
            </ul>
        )
    }

    getArticles() {
        const { articles, openItemId, toggleItem, toggleClose, isClose } = this.props;
        return articles.map(article => (
            <li key = {article.id} className = "test--article-list__item">
                <Article article = {article}
                         isOpen = {article.id === openItemId && !isClose}
                         toggleOpen = {toggleItem}
                         toggleClose = {toggleClose}
                         isClose = {isClose}
                         ref = {this.setListElementRef}
                />
            </li>
        ))
    }

    setListElementRef = _ => {
        //console.log('---', listElement, findDOMNode(listElement))
    }
}

export default accordion(ArticleList)