import Message from "../components/Message"
import { useState, useEffect } from "react"

const Admin = () => {
  //states
  const [messages, setMessages] = useState([])
  const [associations, setAssociations] = useState([])
  const [selectedAssociation, setSelectedAssociation] = useState("")

  //didMount, didUpdate
  useEffect(() => {
    fetchMessages()
    fetchAssociations()
  }, [])

  useEffect(() => {
    fetchMessages(selectedAssociation)
  }, [selectedAssociation])

  //methodes
  const fetchMessages = async (slug) => {
    const request = await fetch(`http://localhost:5000/messages/${slug}`)
    const response = await request.json()
    setMessages(response)
  }

  const fetchAssociations = async () => {
    const request = await fetch(`http://localhost:5000/associations/`)
    const response = await request.json()
    setAssociations(response)
  }

  const handleFilterChange = (e) => {
    setSelectedAssociation(e.target.value)
  }
  // Une page `/admin` qui liste tous les messages
  // Faire un filtre pour filtrer par associations
  return (
    <main>
      <select name="filter" onChange={handleFilterChange}>
        <option value="">All</option>
        {associations.map((association) => {
          return (
            <option key={association.slug} value={association.slug}>
              {association.name}
            </option>
          )
        })}
      </select>
      <section>
        <ul>
          {messages.map((message) => {
            return (
              <li key={message.date}>
                <Message message={message} />
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  )
}

export default Admin
