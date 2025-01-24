const { check, validationResult, checkExact } = require('express-validator');
const validations = {
    titleValidation: [
        check('title')
            .not().isEmpty().withMessage('Title is required')
            .isString().withMessage('Title must be a string'),
    ]
}
const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}

module.exports = {
    validations,
    handleValidationErrors
};