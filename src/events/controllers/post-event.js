export default function makeAddEvent ({ addEvent }) { //inject the use-case for adding company
  return async function PostEvent(req, res) {
    try {
      const { body } = req;

      const newEvent = await addEvent({...body})

      return res.status(201).json({
        status: "success",
        company: newEvent
      });

    } catch (error) {
      return res.status(422).json({
        status: "error",
        message: error.message
      });
    }
  }
}