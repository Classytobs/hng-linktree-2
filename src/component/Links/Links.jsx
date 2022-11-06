import React from 'react'
import './Links.css'
import { Data } from '../Data/Data'
import { Link } from 'react-router-dom';

export default function Links() {
  return (
    <div className="Links">
      {Data.map((data, key) => (
        <div className="frame" key={key}>
          <a href={data.url} id={data.id} target="_blank" rel="none">
            {data.name}
          </a>
          
        </div>
      ))}
      <button id='contact'><Link to ='/contact'>Contact Me</Link></button>
    </div>
  )
}
