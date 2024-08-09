import mongoose from "mongoose";

const GloveSchema = new mongoose.Schema({
    url: String,
    image_url: String,
    title: String,
    price: Number,
    sizes: Array,
    purpose_scores: {
        bagwork: Number,
        sparring: Number
    },
    wrist_support: String
});

const Glove = mongoose.models.Glove || mongoose.model("Glove", GloveSchema);

export default Glove;