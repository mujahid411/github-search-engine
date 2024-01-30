import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import HomePage from './components/HomePage';
import Contact from './components/Contact';
import SingleUser from './components/SingleUser';
// import New from './components/New';
function App() {
  let [githubUserData, setGithubUserData] = useState([]);
  let [singleUserData, setSingleUserData] = useState({});
  async function getGithubUsers() {
    try {
      let response = await axios.get(`https://api.github.com/users`);
      setGithubUserData(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  async function getSingleUserData(username) {
    try {
      let response = await axios.get(`https://api.github.com/users/${username}`);
      setSingleUserData(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  async function searchGithubUser(username){
    try {
      let response = await axios.get(`https://api.github.com/search/users?q=${username}`);
      console.log('coming from search --- ',response.data);
      setGithubUserData(response.data.items);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getGithubUsers();
  }, [])
  return (
    <>
      <Routes>
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<HomePage githubUserData={githubUserData} searchGithubUser={searchGithubUser} />} />
        <Route path='/user/:username' element={<SingleUser 
        getSingleUserData ={getSingleUserData}
        singleUserData = {singleUserData}
        />} />
      </Routes>
    </>
  );
}

export default App;