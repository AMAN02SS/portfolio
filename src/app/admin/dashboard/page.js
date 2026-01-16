"use client"
import React, { useEffect } from 'react'
import Dropdown from './dropdown'
import { useState } from 'react'




const page = () => {
  const [active, setActive] = useState(null);
  const [mode, setMode] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null)

  const [projects, setProjects] = useState([])
  const [blogs, setBlogs] = useState([])

  const [formData, setFormData] = useState({
    heading: "",
    description: "",
    skills: [],
    link: "",
    subheading: "",
    content: "",
    date: "",
    readTime: "",
  })

  useEffect(() => {
    if (selectedItem) {
      setFormData({
        heading: selectedItem.heading || "",
        description: selectedItem.description || "",
        skills: selectedItem.skills || [],
        link: selectedItem.link || "",
        subheading: selectedItem.subheading || "",
        content: selectedItem.content || "",
        date: selectedItem.date || "",
        readTime: selectedItem.readTime || "",
      });
    }
    else {
      resetForm();
    }

  }, [selectedItem])

  const resetForm = () => {
    setFormData({
      heading: "",
      description: "",
      skills: [],
      image: "",
      link: "",
      subheading: "",
      content: "",
      date: "",
      readTime: "",
    });
  };


  useEffect(() => {
    fetch("/api/project").then(res => res.json()).then(setProjects);
    fetch("/api/blog").then(res => res.json()).then(setBlogs);
  }, [])

  const handleSave = async () => {
    const url = active === "project" ? "/api/project/" : "/api/blog";
    const method = mode === "Edit" ? "PUT" : "POST";

    // const payload = mode === "Edit" ? { ...formData, _id: selectedItem._id } : formData;
    // // console.log("SENDING DATA 👉", formData);

    // await fetch(url, {
    //   method, headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(payload),

    // });

    const fd = new FormData();
    fd.append("heading", formData.heading);
    fd.append("description", formData.description);
    fd.append("subheading", formData.subheading);
    fd.append("content", formData.content);
    fd.append("link", formData.link);
    fd.append("skills", JSON.stringify(formData.skills));
    fd.append("date", formData.date);
    fd.append("readTime", formData.readTime);

    

    if (formData.image) {
      fd.append("image", formData.image);
    }

    if (mode === "Edit") {
      fd.append("_id", selectedItem._id);
    }

    await fetch(url, {
      method, body: fd,
    })

    console.log("SENDING BLOG DATA 👉", {
      date: formData.date,
      readTime: formData.readTime,
    });

    fetch("/api/project").then(r => r.json()).then(setProjects);
    fetch("/api/blog").then(r => r.json()).then(setBlogs);

    setActive(null);
    resetForm();
    setSelectedItem(null);
    setMode(null);
  };

  const handleDelete = async (type, id) => {
    const confirmDelete = confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    const url = type === "project" ? "/api/project" : "/api/blog";
    await fetch(url, {
      method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }),
    });
    fetch("/api/project").then(r => r.json()).then(setProjects);
    fetch("/api/blog").then(r => r.json()).then(setBlogs);
  }

  const ALL_Skills = ["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS", "MongoDB", "NextJS", "TailwindCSS", "Express",];

  const toggleSkill = (skill) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill) ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
  };


  return (
    <div className='w-screen h-screen text-white text-xl font-semibold '>
      <div className='flex justify-between px-10 py-10'>
        <div>
          <ul className='flex gap-10 justify-evenly items-center'>
            <img src="/vercel.svg" alt="" width={24} height={24} />
            <li className='inline-flex gap-2'><img src="/svg/Home.svg" alt="" /></li>
            <li className='inline-flex gap-1'><img src="/svg/plus.svg" alt="" /> New</li>
            <li><img src="/svg/message.svg" alt="" /></li>
          </ul>
        </div>
        <div className='flex gap-2 justify-evenly items-center'>
          <Dropdown />
        </div>
      </div>
      <div className='flex w-full gap-4 '>
        <div className='w-[10vw] h-208 bg-[#3d3d3d] rounded-r-4xl'>
          <ul className='w-full h-full flex flex-col gap-5 justify-between py-10'>
            <li className='flex justify-center items-center h-20 hover:text-green-400'>Dashboard</li>
            <li className='flex justify-center items-center h-20 hover:text-green-400'>Projects</li>
            <li className='flex justify-center items-center h-20 hover:text-green-400'>Blogs</li>
            <li className='flex justify-center items-center h-20 hover:text-green-400'>Gallary</li>
            <li className='flex justify-center items-center h-20 hover:text-green-400'>Analytics</li>
          </ul>
        </div>
        <div className='w-full h-208 bg-[#3d3d3d] rounded-l-4xl'>
          <div className='w-full h-full flex flex-col gap-5 py-10 px-10'>
            <div>
              <h1 className='text-3xl'>Dashboard</h1>
            </div>
            <div className='w-full h-[75vh] flex gap-5'>
              <div className='w-1/2 h-full flex flex-col gap-5'>
                <div className='border border-white rounded-l-2xl hover:border-dashed p-2 h-1/2 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600'>
                  {projects.map(project => (
                    <div key={project._id} className=' text-sm p-2'>
                      <div className='flex '>
                        <h1 className='text-2xl'>{project.heading}</h1>
                      </div>
                      <div className='flex flex-col gap-2 p-5 h-fit overflow-auto'>
                        <div>{project.description}</div>
                      </div>
                      <div className='flex flex-col gap-2 p-5 h-fit overflow-auto'>
                        <div>{project.skills.join(", ")}</div>
                      </div>
                      <div className='flex flex-col gap-2 p-5 h-fit overflow-auto'>
                        <div>{project.image}</div>
                      </div>
                      <div className='flex flex-col gap-2 p-5 h-fit overflow-auto'>
                        <div>{project.link}</div>
                      </div>
                      <div className='w-full h-1 bg-[#202020] my-2'></div>
                      <div className='flex justify-evenly w-full items-end text-green-400'>
                        <button onClick={() => { setActive("project"); setMode("Edit"); setSelectedItem(project); }} className='bg-gray-500 px-4 py-2 rounded-full'>Edit</button>
                        <button onClick={() => handleDelete("project", project._id)} className='bg-gray-500 px-4 py-2 rounded-full'>Delete</button>
                      </div>
                      <div className='w-full h-1 bg-[#202020] my-2'></div>
                    </div>
                  ))}
                </div>
                <div className='flex justify-evenly w-full items-end text-green-400'>
                  <button onClick={() => { setActive("project"); setMode("New"); setSelectedItem(null); resetForm(); }} className='bg-gray-500 px-4 py-2 rounded-full'>New Project</button>
                </div>
                <div className='border border-white rounded-l-2xl hover:border-dashed p-2 h-1/2 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600'>
                  {blogs.map(blog => (
                    <div key={blog._id} className='text-sm p-2'>
                      <div className='flex '>
                        <h1 className='text-2xl'>{blog.heading}</h1>
                      </div>
                      <div className='flex flex-col gap-2  p-5 h-fit overflow-auto'>
                        <div>{blog.description}</div>
                      </div>
                      <div className='flex flex-col gap-2  p-5 h-fit overflow-auto'>
                        <div>{blog.subheading}</div>
                      </div>
                      <div className='flex flex-col gap-2  p-5 h-fit overflow-auto'>
                        <div>{blog.content}</div>
                      </div>
                      <div className='flex flex-col gap-2  p-5 h-fit overflow-auto'>
                        <div>{blog.date}</div>
                      </div>
                      <div className='flex flex-col gap-2  p-5 h-fit overflow-auto'>
                        <div>{blog.readTime}</div>
                      </div>
                      <div className='w-full h-1 bg-[#202020] my-2'></div>
                      <div className='flex justify-evenly w-full items-end text-green-400'>
                        <button onClick={() => { setActive("blog"); setMode("Edit"); setSelectedItem(blog); }} className='bg-gray-500 px-4 py-2 rounded-full'>Edit</button>
                        <button onClick={() => handleDelete("blog", blog._id)} className='bg-gray-500 px-4 py-2 rounded-full'>Delete</button>
                      </div>
                      <div className='w-full h-1 bg-[#202020] my-2'></div>
                    </div>
                  ))}
                </div>
                <div className='flex justify-evenly w-full items-end text-green-400'>
                  <button onClick={() => { setActive("blog"); setMode("New"); setSelectedItem(null); resetForm(); }} className='bg-gray-500 px-4 py-2 rounded-full'>New Blog</button>
                </div>
              </div>
              <div className=' w-1/2 h-full grid grid-cols-1 '>
                <div className='border border-white h-[68vh] rounded-l-2xl hover:border-dashed overflow-y-auto'>
                  {active && (
                    <div className='p-5 flex flex-col'>
                      <div className='flex justify-center'>
                        <h1 className='text-3xl'>{mode} {active}</h1>
                      </div>
                      <form action="" className='flex flex-col gap-5'>
                        <div className='flex flex-col'>
                          <label htmlFor="">Heading:</label>
                          <textarea value={formData.heading} onChange={e => setFormData({ ...formData, heading: e.target.value })} placeholder='Enter Heading...' className='border font-normal border-white h-20' type="text" />
                        </div>
                        <div className='flex flex-col'>
                          <label htmlFor="">Description:</label>
                          <textarea value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} placeholder='Enter Description...' className='border font-normal border-white h-20' type="text" />
                        </div>
                        {
                          active === "project" && (
                            <>
                              <div className='flex flex-col'>
                                <label htmlFor="">Skills:</label>
                                <div className="flex flex-wrap gap-2">
                                  {ALL_Skills.map((skill) => (
                                    <button
                                      type="button"
                                      key={skill}
                                      onClick={() => toggleSkill(skill)}
                                      className={`px-3 py-1 rounded-full border text-sm transition ${formData.skills.includes(skill)
                                        ? "bg-black text-green-400 border-black"
                                        : "bg-white text-black border-gray-300 hover:bg-gray-100"
                                        }`}
                                    >
                                      {skill}
                                    </button>
                                  ))}
                                </div>
                              </div>
                              <div className="flex gap-2 items-center">
                                <label>Project Image:</label>
                                <input
                                  type="file"
                                  accept="image/*"
                                  onChange={(e) =>
                                    setFormData({ ...formData, image: e.target.files[0] })
                                  }
                                  className="text-sm border border-whte w-45"
                                />
                              </div>
                              <div className='flex flex-col'>
                                <label htmlFor="">Link:</label>
                                <textarea value={formData.link} onChange={e => setFormData({ ...formData, link: e.target.value })} placeholder='Enter Link...' className='border font-normal border-white h-20' type="text" />
                              </div>
                            </>

                          )}

                        {active === "blog" && (
                          <>
                            <div className='flex flex-col'>
                              <label>Sub Heading:</label>
                              <textarea
                                value={formData.subheading}
                                onChange={e => setFormData({ ...formData, subheading: e.target.value })}
                                className='border font-normal border-white h-20' placeholder='Enter syubheading...'
                              />
                            </div>
                            <div className='flex flex-col'>
                              <label>Content:</label>
                              <textarea
                                value={formData.content}
                                onChange={e => setFormData({ ...formData, content: e.target.value })}
                                className='border font-normal border-white h-20' placeholder='Enter Content...'
                              />
                            </div>
                            <div className='flex flex-col'>
                              <label>Date (Month, Year)</label>
                              <input
                                type="month"
                                className='border font-normal border-white h-10'
                                onChange={(e) => {
                                  const value = e.target.value; // "2026-01"
                                  const date = new Date(value);
                                  const formatted = date.toLocaleString("en-US", {
                                    month: "long",
                                    year: "numeric",
                                  });
                                  setFormData({ ...formData, date: formatted });
                                }}
                              />
                              <p className="text-sm text-gray-400">Example: January, 2026</p>
                            </div>

                            <div className='flex flex-col'>
                              <label>Read Time (minutes)</label>
                              <input
                                type="number"
                                placeholder="15"
                                className='border font-normal border-white h-10'
                                onChange={(e) =>
                                  setFormData({ ...formData, readTime: `${e.target.value} min` })
                                }
                              />
                            </div>
                          </>
                        )}
                      </form>
                    </div>
                  )}
                </div>
                <div className='flex justify-evenly w-full items-end pt-0 text-green-400'>
                  <button type="button" onClick={() => { handleSave() }} className='bg-gray-500 px-4 py-2 rounded-full'>Save</button>
                  <button type="button" onClick={() => { setActive(null); setMode(null); setSelectedItem(null); }} className='bg-gray-500 px-4 py-2 rounded-full'>cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default page
