import './App.css'
import History from './components/History'

const App = () => <History />

export default App

// import {Component} from 'react'
// import './App.css'
// import HistoryList from './components/index'

// // These are the list used in the application. You can move them to any component needed.

// // Replace your code here
// class App extends Component {
//   state = {searchInput: '', onlinePlatforms: initialHistoryList}

//   onChangeInput = event =>
//     this.setState({
//       searchInput: event.target.value,
//     })

//   getDeleteId = id => {
//     const {onlinePlatforms} = this.state
//     const filteredData = onlinePlatforms.filter(eachApp => eachApp.id !== id)
//     this.setState({onlinePlatforms: filteredData})
//     // console.log(onlinePlatforms.length)
//   }

//   render() {
//     const {searchInput, onlinePlatforms} = this.state
//     const filteredData = onlinePlatforms.filter(each =>
//       each.title.toLowerCase().includes(searchInput.toLowerCase()),
//     )
//     let emptyText
//     let emptyStyle
//     if (filteredData.length === 0 || onlinePlatforms.length === 0) {
//       emptyText = 'There is no history to show'
//       emptyStyle = 'empty'
//     }

//     return (
//       <div className="background">
//         <nav className="nav-bar">
//           <img
//             className="title"
//             alt="app logo"
//             src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
//           />
//           <div className="search-div">
//             <img
//               className="search-img"
//               alt="search"
//               src="https://assets.ccbp.in/frontend/react-js/search-img.png"
//             />
//             <input
//               onChange={this.onChangeInput}
//               className="input-element"
//               placeholder="Search History"
//               type="search"
//             />
//           </div>
//         </nav>
//         <div>
//           <ul className="list-item">
//             {filteredData.map(each => (
//               <HistoryList
//                 getDeleteId={this.getDeleteId}
//                 item={each}
//                 key={each.id}
//               />
//             ))}
//           </ul>
//         </div>
//         <div className={emptyStyle}>
//           <p>{emptyText}</p>
//         </div>
//       </div>
//     )
//   }
// }

// export default App
