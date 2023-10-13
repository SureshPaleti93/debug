import {Component} from 'react'
import HistoryItem from '../historyItem'
import './index.css'

class DisplaySearchHistory extends Component {
  state = {searchHistory: '', searchInput: ''}

  deleteHistory = id => {
    const {searchHistory} = this.state
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {initialHistoryList} = this.props
    const {searchHistory, searchInput} = this.state

    const searchResults = initialHistoryList.filter(each =>
      each.domainUrl.includes(searchInput),
    )

    return (
      <div className="bg-container">
        <div className="content-container">
          <div className="search-bar-container">
            <div className="logo-container">
              <img
                className="app-logo"
                src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
                alt="app logo"
              />
            </div>
            <div className="search-container">
              <div className="logo">
                <img
                  className="search-logo"
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                  alt="search"
                />
              </div>
              <input
                className="input-element"
                type="search"
                placeholder="Search history"
                onChange={this.onChangeInput}
                value={searchInput}
              />
            </div>
          </div>
          <ul className="search-history-container">
            {searchResults.map(each => (
              <HistoryItem
                key={each.id}
                historyItem={each}
                deleteHistory={this.deleteHistory}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default DisplaySearchHistory
