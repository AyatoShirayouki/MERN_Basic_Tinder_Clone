import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    name: String,
    imhUrl: String
});

export default mongoose.model('cards', cardSchema);