export default function makeFindAllEvent({ eventDb }) {
  return async function findAllEvent () {
    return eventDb.findAll()
  }
}