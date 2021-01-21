const modelEvent = ({ validate }) => {
  return function makeEvent ({
    event_id,
    action_creator,
    receiver,
    event_type,
    time,
    url_from,
    agent,
  } = {}) {

    validate({ event_id, action_creator, receiver, event_type, time, url_from, agent });

    

    return Object.freeze({
      event_id,
      action_creator,
      receiver,
      event_type,
      time,
      url_from,
      agent,
    })
  }
}

export default modelEvent;