import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
    {
        heading: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        skills: {
            type: [String],
            default: [],
        },
        image:{
            type: String,
            default: "",
        },
        link: {
            type: String,
            default: "",
        },
    },
    { timestamps: true }
)
export default mongoose.models.Project || mongoose.model("Project", ProjectSchema);