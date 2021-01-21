import bcrypt from 'bcrypt';
import modelEvent from './event';
import eventValidator from './validator';


function validate (event) {
  let value = eventValidator.validate(event);
 if (value.error) throw new Error(value.error.details[0].message)
  return value;
};

const makeEvent = modelEvent({ validate });

export default makeEvent;