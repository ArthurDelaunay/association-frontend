import { useState, useEffect } from "react"

const Contact = () => {
  //states
  const [associations, setAssociations] = useState([])
  const [userName, setUserName] = useState("")
  const [userMessage, setUserMessage] = useState("")
  const [targetedAssociation, setTargetedAssociation] = useState("")

  //didMount
  useEffect(() => {
    fetchAssociations()
  }, [])

  //methodes
  const fetchAssociations = async () => {
    const request = await fetch(`http://localhost:5000/associations/`)
    const response = await request.json()
    setAssociations(response)
  }

  const handleNameChange = (e) => {
    setUserName(e.target.value)
  }
  const handleMessageChange = (e) => {
    setUserMessage(e.target.value)
  }
  const handleTargetedAssociationChange = (e) => {
    setTargetedAssociation(e.target.value)
  }
  const handleMessageSubmit = async (e) => {
    e.preventDefault()
    const newMessage = {
      name: userName,
      message: userMessage,
      slug: targetedAssociation,
    }
    await fetch("http://localhost:5000/messages/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMessage),
    })
  }

  //Faire une page avec un formulaire de contact qui va créer un message dans l'api
  return (
    <main>
      <form action="" onSubmit={handleMessageSubmit}>
        <input
          type="text"
          placeholder="Write your name here"
          onChange={handleNameChange}
        />
        <input
          type="text"
          placeholder="Write your message here"
          onChange={handleMessageChange}
        />
        <select name="filter" onChange={handleTargetedAssociationChange}>
          {associations.map((association) => {
            return (
              <option key={association.slug} value={association.slug}>
                {association.name}
              </option>
            )
          })}
        </select>
        <button type="submit">Send Your Message</button>
      </form>
    </main>
  )
}

export default Contact
