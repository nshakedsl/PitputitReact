const messageService = require('../services/message');

const getMessage = async (req, res) => {
    const message = await messageService.getMessageById(req.params.id);
    if (!message) {
        return res.status(404).json({ errors: ['Message not found'] });
    }
    res.json(message);
};
//...
module.exports = { getMessage };