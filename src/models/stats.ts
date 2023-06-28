import { Schema, model } from 'mongoose'

interface IStats extends Document {
    province: string;
    age: object[];
    gender: object[];
    breed: object[];
    crop: object[];
}

const schema = new Schema({
    province: { type: String, required: true },
    age: { type: [{ key: String, value: Number }], required: true },
    gender: { type: [{ key: String, value: Number }], required: true },
    breed: { type: [{ key: String, value: Number }], required: true },
    crop: { type: [{ key: String, value: Number }], required: true },
})

export const Stat = model<IStats>('Stats', schema)
