
const mongoose = require("mongoose");
const {Schema} = mongoose;

const querySchema = new Schema({
    description: {type: String, required: true},
    product: { type: Schema.Types.ObjectId, ref: 'ProductModel'},
    queryResolvedDate: {type: Date},
    user: {type: Schema.Types.ObjectId, ref: 'UserModel', required: true},
}, {timestamps: true});

exports.QueryModel = mongoose.model('Query',querySchema);
