import React from 'react'
import Pizza from './Pizza'
import pizzaData from '../data'

const numberPizza  = pizzaData.length;
function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
  {numberPizza > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}

      </main>
  )
}

export default Menu