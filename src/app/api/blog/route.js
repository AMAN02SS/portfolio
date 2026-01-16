import connectDB from "@/lib/db"
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";

export async function GET(req) {
    await connectDB();
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return NextResponse.json(blogs)
}

export async function POST(req) {
    await connectDB();
    const formData = await req.formData();
    const blog = await Blog.create({
        heading: formData.get("heading"),
        description: formData.get("description"),
        subheading: formData.get("subheading"),
        content: formData.get("content"),
        date: formData.get("date"),
        readTime: formData.get("readTime"),
    });
    return NextResponse.json(blog);
}

export async function PUT(req) {
    await connectDB();
    const formData = await req.formData();
    const _id = formData.get("_id");
    const updated = await Blog.findByIdAndUpdate(_id, {
        heading: formData.get("heading"),
        description: formData.get("description"),
        subheading: formData.get("subheading"),
        content: FormData.get("content"),
        date: formData.get("date"),
        readTime: formData.get("readTime"),
    }, { new: true });
    console.log("SERVER DATE 👉", FormData.get("date"));
    console.log("SERVER READ TIME 👉", FormData.get("readTime"));
    return NextResponse.json(updated);
}

export async function DELETE(req) {
    try {
        const { id } = await req.json();
        await Blog.findByIdAndDelete(id);
        return Response.json({ success: true });
    }
    catch (error) {
        return Response.json({ error: "Delete failed" }, { status: 500 });
    }
}