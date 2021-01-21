/**
 * Dependencies (depends on use-cases)
 */
import { addEvent, findAllEvent } from '../use_cases';

/**
 * controllers
 */
import makeAddEvent from './post-event';
import makeFindAllEvent from './findAll-event';

const postEvent = makeAddEvent({ addEvent })
const findAllEvent = makeFindAllEvent({ findAllEvent })

const eventController = Object.freeze({
  postEvent,
  findAllEvent,
})

export default eventController
export { postEvent, findAllEvent }