import './index.css'

const HistoryItem = props => {
  const {historyItem, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem

  const onDeleteHistory = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-container">
      <p className="time-accessed">{timeAccessed}</p>
      <img className="logo-url" src={logoUrl} />
      <p className="title">
        {title} <span className="domain-url">{domainUrl}</span>
      </p>
      <img
        onClick={onDeleteHistory}
        className="delete-img"
        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        alt="delete"
      />
    </li>
  )
}
export default HistoryItem
