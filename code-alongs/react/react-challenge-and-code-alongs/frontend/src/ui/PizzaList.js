import React from 'react'

export function PizzaList (props) {
  console.log(props)
  return (
    <>
        <li>{props.ingredient} are {props.opinion}</li>
    </>
  )
}