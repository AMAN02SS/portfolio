import connectDB from "@/lib/db";
import Project from "@/models/Project";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";


export async function GET() {
    await connectDB();
    const projects = await Project.find().sort({ createdAt: -1 });
    return NextResponse.json(projects);
}

export async function POST(req) {
    await connectDB();
    const formData = await req.formData();

    const heading = formData.get("heading");
    const description = formData.get("description");
    const skills = JSON.parse(formData.get("skills") || "[]");
    const file = formData.get("image");
    const link = formData.get("link");

    let imagePath = "";
    if (file && file.name) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const uploadDir = path.join(process.cwd(), "public/uploads");
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        const filePath = path.join(uploadDir, file.name);
        fs.writeFileSync(filePath, buffer);

        imagePath = `/uploads/${file.name}`;
    }

    const project = await Project.create({
        heading,
        description,
        skills,
        image: imagePath,
        link,
    });
    return NextResponse.json(project);
}

export async function PUT(req) {
  await connectDB();
  const formData = await req.formData();

  const _id = formData.get("_id");
  const heading = formData.get("heading");
  const description = formData.get("description");
  const skills = JSON.parse(formData.get("skills") || "[]");
  const file = formData.get("image");
  const link = formData.get("link")

  const updateData = { heading, description, skills, link };

  if (file && file.name) {
    const bytes = await file.arrayBuffer();  
    const buffer = Buffer.from(bytes);

    const uploadDir = path.join(process.cwd(), "public/uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    fs.writeFileSync(path.join(uploadDir, file.name), buffer);

    updateData.image = `/uploads/${file.name}`;  
  }

  const updated = await Project.findByIdAndUpdate(
    _id,               
    updateData,
    { new: true }
  );

  return NextResponse.json(updated);
}

export async function DELETE(req) {
    try {
        const { id } = await req.json();
        await Project.findByIdAndDelete(id);
        return Response.json({ success: true });
    }
    catch (error) {
        return Response.json({ error: "Delete failed" }, { status: 500 });
    }
}