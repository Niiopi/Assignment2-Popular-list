import React from 'react'

function Members(props) {
  return (
    <div style={contentBox}>
      <img className="ava" src={props.bio.imageUrl}></img>
      <div style={memBox}>
  <button data-id={props.bio.id} onClick={e => props.voteChange(e.target.dataset.id)}>Upvote</button> : <span>{props.bio.vote}</span>
        <p>
          Codename: {props.bio.codename}
        </p>
        <p>
          Name: {props.bio.name}
        </p>
        <p>
          <a href={props.bio.url}>Character Bio</a>
        </p>
        <p style={submission}>
          Submitted by: <img className="subimg" src={props.bio.submitterAvatarUrl}></img> 
        </p>
      </div>
    </div>
  )
}

const memBox = {
  display: "inline-block",
  marginLeft: "20px",
}

const contentBox = {
  maxWidth: "35%",
  marginTop: "25 px",
  border: "3px solid darkgray",
  margin: "auto"
}

const submission = {
  marginTop: "25px"
}



export default Members