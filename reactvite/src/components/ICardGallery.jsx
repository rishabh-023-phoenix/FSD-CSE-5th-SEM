import React from 'react'
import ICard from './ICard'

function ICardGallery() {
  return (
    <div>
      <ICard college="ABES Engineering College" roll="12345" name="Krishna" branch="Computer Science" />
      <ICard college="ABES Engineering College" roll="67890" name="Jane Smith" branch="Mechanical Engineering" />
      <ICard college="ABES Engineering College" roll="54321" name="Bob Johnson" branch="Electrical Engineering" />
      <ICard college="ABES Engineering College" roll="98765" name="Alice Brown" branch="Civil Engineering" />
    </div>
  )
}

export default ICardGallery