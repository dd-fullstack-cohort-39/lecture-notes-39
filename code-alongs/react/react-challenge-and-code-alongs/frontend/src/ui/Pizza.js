import React from 'react'
import { PizzaList } from './PizzaList'
import logo from '../images/logo512.png'
import { Image } from 'react-bootstrap'

export function Pizza () {
  return (
    <>
      <h1>Pizza Ingredients</h1>
      <ol>
        <PizzaList ingredient="Pepperoni" opinion='yummy'/>
        <PizzaList ingredient="Mushrooms" opinion='good with pepperoni'/>
        <PizzaList ingredient="Onions" opinion='favorite'/>
        <PizzaList ingredient="Olives" opinion='meh'/>
      </ol>
      <Image fluid src={logo}/>
    </>
  )
}