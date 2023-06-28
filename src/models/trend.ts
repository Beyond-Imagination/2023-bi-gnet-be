import {model, Schema} from 'mongoose'

interface ITrends extends Document {
    trends: object[];
}

const schema = new Schema({
    age: {type: Number, required: true},
    gender: {type: String, required: true},
    title: {type: String, required: true},
    list: {type: [{key: String, value: Number}], required: true}
})

export const Trend = model<ITrends>('Trends', schema)
