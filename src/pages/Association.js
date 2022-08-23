import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Message from "../components/Message"

const Association = () => {
  const params = useParams()
  //Faire une page par association avec les infos de l’association et les messages concernant l’association
  // states
  const [association, setAssociation] = useState({})
  const [messages, setMessages] = useState([])

  //didMount, didUpdate
  useEffect(() => {
    fetchAssociation()
    fetchMessages()
    // eslint-disable-next-line
  }, [])

  //methodes
  const fetchAssociation = async () => {
    const request = await fetch(
      `http://localhost:5000/associations/${params.slug}`
    )
    const response = await request.json()
    setAssociation(response)
  }

  const fetchMessages = async () => {
    const request = await fetch(`http://localhost:5000/messages/${params.slug}`)
    const response = await request.json()
    setMessages(response)
  }

  return (
    <main>
      <h1>{association.name}</h1>
      <p>{association.slogan}</p>
      <p>{association.description}</p>
      <img src={association.image} alt={association.name} />
      <ul>
        {messages.map((message) => {
          return (
            <li key={message.date}>
              <Message message={message} />
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export default Association
