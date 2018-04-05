import React, {Component} from 'react'
import ArticleList from './components/article-list'
import Chart from './components/chart'
import UserForm from './components/user-form'
import Filters from './components/filters'
import PropTypes from 'prop-types'

class App extends Component {
    static propTypes  ={
        articles: PropTypes.array.isRequired
    };

    render() {

        const { articles } = this.props;

        return (
            <div className="App">
                <UserForm />
                <Filters articles = {articles} />
                <Chart articles = {articles} />
                <ArticleList articles = {articles}/>
            </div>
        )
    }
}

export default App
