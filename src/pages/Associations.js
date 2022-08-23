import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Associations = () => {
  // Faire une page qui liste les associations
  // states
  const [associations, setAssociations] = useState([])

  // didMount, didUpdate
  useEffect(() => {
    fetchAssociations()
  }, [])

  // methodes
  const fetchAssociations = async () => {
    const request = await fetch("http://localhost:5000/associations")
    const response = await request.json()
    setAssociations(response)
  }
  return (
    <main>
      <h1>Associations</h1>
      <ul>
        {associations.map((association) => {
          return (
            <li key={association.slug}>
              <Link to={`/associations/${association.slug}`}>
                {association.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export default Associations
