import React from 'react'

function Registration() {
  return (
    <div>Registration</div>
  )
}

function getData() {
  fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error('Error fetching data:', error));
}

export default Registration