import React from 'react';
import './Image.css';
import image from './Lackadaisy_(panel).jpg'

export default function Image() {
  return(
    <div className="image">
        <img alt="Lackadaisy strip #19, Lackadaisy Bedlamite" src={image} />
        <p>By Tracy J. Butler - Transferred from en.wikipedia;
          transferred to Commons by User:Esurnir using CommonsHelper.,
          CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=6653062</p>
    </div>
  )
}