import {Component} from 'react'
import './index.css'
import HistoryItem from '../HistoryItem'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class History extends Component {
  state = {searchInput: '', updatedList: initialHistoryList}

  getListedItem = filteredList =>
    filteredList.map(eachItem => (
      <HistoryItem
        key={eachItem.id}
        eachItem={eachItem}
        onDelete={this.onDelete}
      />
    ))

  inputReader = event => {
    this.setState({searchInput: event.target.value})
  }

  onDelete = id => {
    this.setState(prevState => ({
      updatedList: prevState.updatedList.filter(eachItem => eachItem.id !== id),
    }))
  }

  noResult = () => (
    <div className="no-history-container">
      <p>There is no history to show</p>
    </div>
  )

  render() {
    const {searchInput, updatedList} = this.state
    const filteredList = updatedList.filter(eachList =>
      eachList.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div>
        <div className="navbar-container">
          <div className="logo-container">
            <img
              className="logo"
              alt="app logo"
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
            />
          </div>
          <div className="nav-search-container">
            <div className="search-container">
              <div className="search-image-container">
                <img
                  className="search-image"
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                  alt="search"
                />
              </div>
              <input
                type="search"
                value={searchInput}
                onChange={this.inputReader}
                className="input"
                placeholder="Search History"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <ul className="history-items-container">
            {filteredList.length === 0 && this.noResult()}
            {filteredList.length !== 0 && this.getListedItem(filteredList)}
          </ul>
        </div>
      </div>
    )
  }
}

export default History

// class HistoryList extends Component {
//   render() {
//     const {item, getDeleteId} = this.props

//     const {timeAccessed, logoUrl, title, domainUrl, id} = item

//     const onDelete = () => {
//       getDeleteId(id)
//     }

//     return (
//       <li className="background-container">
//         <div className="container">
//           <p className="time">{timeAccessed}</p>
//           <img className="logo" alt="domain logo" src={logoUrl} />
//           <p className="heading">{title}</p>
//           <p className="link">{domainUrl}</p>
//         </div>
//         <div>
//           <button onClick={onDelete} className="delete-btn" type="button">
//             <img
//               alt="delete"
//               src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
//             />
//           </button>
//         </div>
//       </li>
//     )
//   }
// }

// export default HistoryList
