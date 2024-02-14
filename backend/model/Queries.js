
const mongoose = require("mongoose");
const {Schema} = mongoose;

const querySchema = new Schema({
    queryDescription: {type: String, required: true},
    product: { type: Schema.Types.ObjectId, ref: 'ProductModel', required: true},
    queryDate: { type: Date, default: Date.now },
    queryResolvedDate: {type: Date},
    user: {type: Schema.Types.ObjectId, ref: 'UserModel', required: true},
})

exports.QueryModel = mongoose.model('Query',querySchema);
