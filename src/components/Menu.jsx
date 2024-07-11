import React from 'react'
import { Link } from 'react-router-dom'

export const Menu = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to="/encuesta/crear">Crear Encuesta</Link>
            </li>
        </ul>
    </nav>
  )
}
