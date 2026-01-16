import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
    {
        heading: String,
        description: String,
        subheading: String,
        content: String,
        date: String,
        readTime: String,
    },
    { timestamps: true }
)
export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);