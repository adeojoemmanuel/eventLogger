import makeAddEvent from './add-event';
import makeFindAllEvent from './find-event';
import companyDb from '../data-access';

const addEvent = makeAddEvent({ companyDb })
const findAllEvent = makeFindAllEvent({ companyDb })

const eventService = Object.freeze({
  addEvent,
  findAllEvent,
})

export default eventService;
export {addEvent, findAllEvent}