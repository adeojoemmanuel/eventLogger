import makeEvent from '../entity';

export default function makeAddEvent({ eventDb }) {
  return async function addEvent (eventInfo) {
    const event = makeEvent(eventInfo)
    return eventDb.create({...event})
  }
}