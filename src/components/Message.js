import moment from "moment"

const Message = (props) => {
  const renderDate = moment(props.date).format("DD-MM-YYYY, HH:mm")

  return (
    <article>
      <p>{props.message.body}</p>
      <p>{`Posted the ${renderDate} by ${props.message.name}`}</p>
    </article>
  )
}

export default Message
