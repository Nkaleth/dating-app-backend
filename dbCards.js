import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
  name: String,
  ImageUrl: String,
});

export default mongoose.model('cards', cardSchema);
