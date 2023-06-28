import { Schema, model, PaginateModel } from 'mongoose'
import paginate from 'mongoose-paginate-v2';

interface IBenefits extends Document {
    province: string;
    city: string;
    name: string;
    target: string;
    description: string;
    condition: string;
    document: string;
    size: string;
    contact: string;
}

const schema = new Schema({
    province: { type: String, required: true },
    city: { type: String, required: true },
    name: { type: String, required: true },
    target: { type: String },
    description: { type: String },
    condition: { type: String },
    document: { type: String },
    size: { type: String },
    contact: { type: String },
})

schema.plugin(paginate);

interface BenefitModel<T extends Document> extends PaginateModel<T> {}

export const Benefit: BenefitModel<IBenefits> = model<IBenefits>('Benefits', schema) as BenefitModel<IBenefits>
