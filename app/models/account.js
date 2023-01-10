import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const accountSchema = new Schema({
    id: {
        type: String,
    },
    date: {
        type: Date,
    },
    sender: {
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        dateOfBirth: {
            type: String
        },
        IDNumber: {
            type: String
        },
    },
    recipient: {
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        email: {
            type: String
        },
        accountNumber: {
            type: String
        },
        bank: {
            type: String
        },
    },
    Amount: {
        type: Number
    },
    CurrencyCd: {
        type: String
    },
    Comments: {
        type: String
    },
    status: {
        type: String,
        enum: ["COMPLETED", "PENDING", "IN PROGRESS", "REJECTED"],
        default: "PENDING"
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Account = mongoose.model('accounts', accountSchema);
export default Account;
