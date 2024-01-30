import React from 'react'
import Header from './Header'
import Footer from './Footer'
import HeroComponent from './HeroComponent';

function HomePage({githubUserData,searchGithubUser}) {
  return (
    <>
    <Header searchGithubUser ={searchGithubUser} />
      <div className="topnav">
        <a href="/contact">Contact</a>
      </div>

      <HeroComponent githubUserData={githubUserData} />
      <Footer />
      </>
)
}

export default HomePage