import { Schema, model, PaginateModel } from "mongoose";
import paginate from "mongoose-paginate-v2";

interface IWeekendFarms extends Document {
  province: string;
  city: string;
  address: string;
  name: string;
}

const schema = new Schema({
  province: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  name: { type: String, required: true },
});

schema.plugin(paginate);

interface WeekendFarmsModel<T extends Document> extends PaginateModel<T> {}

export const WeekendFarm: WeekendFarmsModel<IWeekendFarms> =
  model<IWeekendFarms>(
    "weekend-farms",
    schema
  ) as WeekendFarmsModel<IWeekendFarms>;
