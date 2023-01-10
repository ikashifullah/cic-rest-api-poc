const {check, validationResult} = require('express-validator');

exports.validateTransactions = [
    check('startDate')
      .trim()
      .escape()
      .not()
      .isEmpty()
      .withMessage('startDate can not be empty!')
      .isDate()
      .withMessage('startDate must be a valid date'),
    check('endDate')
      .trim()
      .escape()
      .not()
      .isEmpty()
      .withMessage('endDate can not be empty!')
      .isDate()
      .withMessage('endDate must be a valid date'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({errors: errors.array()});
    next();
  },
];