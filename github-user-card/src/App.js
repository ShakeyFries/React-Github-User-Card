// import React from "react";
// import "./App.css";
// import axios from "axios";
// import 'semantic-ui-css/semantic.min.css';

// const card = [
//   'tetondan',
//   'dustinmyers',
//   'justsml',
//   'luishrd',
//   'bigknell',
//   'panamajake86'
// ];

// class App extends React.Component {
//   state = {
//     card: [],
//     cardText: ""
//   };

//   componentDidMount() {
//     axios
//       .get("https://api.github.com/users/ShakeyFries")
//       .then(res =>  {
//         this.setState({
//           card: res.data
//         });
//       })
//       .catch(err => console.log(err));
//   }

//   handleChanges = e => {
//     this.setState({
//       cardText: e.target.value
//     });
//   }

//   fetchCard = () => {
//     axios
//       .get('https://api.github.com/users/ShakeyFries')
//       .then(res => {
//         this.setState({
//           card: res.data.message
//         });
//       })
//       .catch(err => console.log(err));
//   }

//   render(){
//     return (
//       <div className="App">
//         <h1>Hello Friends</h1>
//         <input
//           type="text"
//           value={this.state.cardText}
//           onChange={this.handleChanges}
//         />
//         <button onClick={this.fetchCard}>Fetch Developers</button>
//         <div className="fetch">
//           {/* {this.state.card.map(card => (
//             <img width="200" src={card} key={card} alt={card} />
//           ))
//           } */}
//         </div>

//         <div className="App">
//             <div className="card">
//             <img src={this.state.avatar_url} alt={"picture of developer"} />  
//               <h1>Name: {this.state.name}</h1>
//               <h3>Username: {this.state.login}</h3>
//               <p>Location: {this.state.location}</p>
//               <p>Profile: {this.state.html_url}</p>
//               <p>Followers: {this.state.followers}</p>
//               <p>Following: {this.state.following}</p>
//               <p>Bio: {this.state.bio}</p>
//             </div>
//         </div>

//       </div>
//     );
//   }
// }

// export default App;

import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import UserCard from './components/UserCard.js';
import CardList from './components/CardList.js';
import "./App.css";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      userData: {},
      followersData: []
    };
  }

componentDidMount() {
  fetch("https://api.github.com/users/ShakeyFries")
    .then(res => res.json())
    // .then(res => console.log(res))
    .then(res => this.setState({ userData: res }))
    .catch(err => console.log(err));

  fetch("https://api.github.com/users/ShakeyFries/followers")
    .then(res => res.json())
    // .then(res => console.log(res))
    .then(res => this.setState({ followersData: res }))
    .catch(err => console.log(err));
}
  


render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub User Card</h1>
        <UserCard userData={this.state.userData} />
        <CardList followersData={this.state.followersData} />
      </header>
    </div>
  );
}
}

export default App;