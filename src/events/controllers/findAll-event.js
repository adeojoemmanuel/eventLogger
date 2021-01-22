export default function makeFindAllEvent ({ findAllEvent }) {
  return async function FindAllEvent(_, res) {
    try {
      const allEvent = await findAllEvent()

      return res.status(200).json({
        status: "success",
        company: allEvent
      });

    } catch (error) {
      return res.status(400).json({
        status: "error",
        message: error.message
      });
    }
  }
}