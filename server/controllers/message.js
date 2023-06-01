const messageService = require('../services/message');

// const getMessage = async (req, res) => {
//     if(!req.params.id || !Number.isInteger(req.params.id)){
//         return res.status(400).json({ errors: ['Bad Request of Message'] });
//     }
//     const message = await messageService.getMessageById(req.params.id);
//     if (!message) {
//         return res.status(404).json({ errors: ['Message not found'] });
//     }
//     res.json(message);
// };
//...
module.exports = { getMessage };