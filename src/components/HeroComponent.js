import React from 'react'
import { Link } from 'react-router-dom';

function HeroComponent({ githubUserData }) {
  console.log(githubUserData);
  return (
    <div className="row">
      <div className="leftcolumn">
      </div>
      {  githubUserData.length ?  (githubUserData.map((ele, index) => {
        return <>
          <div className="card" key={index}>
            <h2>{ele.login}</h2>
            <img src={ele.avatar_url} height='200px' />
            <div>
            <a className='gitProfile' href={`/user/${ele.login}`}>Git Profile</a>
            </div> 
          </div>
        </>
      })) : <p>No User Found</p>}
      
      
    </div>
  )
}

export default HeroComponent