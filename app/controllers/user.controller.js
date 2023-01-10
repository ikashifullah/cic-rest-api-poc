import Account from '../models/account';
import BaseController from './base.controller';
import { getEpoch } from '../utils';


class UsersController extends BaseController {
	whitelist = [];

	transactions = async (req, res, next) => {
		try {
			const {startDate, endDate} = req.query;
			const accounts = await Account.aggregate(
				[{ $match : { date: {
					$gte: getEpoch(startDate, 'start'),
					$lte: getEpoch(endDate, 'end')
				} } }, 
				{ "$project": {
					"_id": 1,
					"id": 1,
					"date": 1,
					"Comments": 1,
				}},
				{ "$sort": { "date": 1 } }
				]
			);
            res.status(200).json(accounts)			
		} catch (err) {
			err.status = 400;
			next(err);
		}
	}

	transaction = async (req, res, next) => {
		try {
			const account = await Account.findOne({ id: req.params.id }).exec();
            res.status(200).json(account)
			
		} catch (err) {
			err.status = 400;
			next(err);
		}
	}
	
	updateTransaction = async (req, res, next) => {
		try {

			const { id, comments} = req.body;
			Account.findOne({id: id}, function(err, transaction) {
				if(!err) {
					console.log(transaction);
					
					transaction.Comments = comments;
					transaction.save(function(err) {
						if(!err) {
							res.status(200).json({
								message: 'Comment updated successfully!'
							})
						}
						else {
							res.status(200).json({
								message: 'Comment not updated successfully!'
							})
						}
					});
				}
			});
			
		} catch (err) {
			err.status = 400;
			next(err);
		}
	}

}

export default new UsersController();
