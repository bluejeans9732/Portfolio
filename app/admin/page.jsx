"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react"
import { useState } from "react"

const Admin = () => {
  const [img, setImg] = useState("")

  const imagebase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (err) => reject(err)
    })
  }

  const handleUploadImage = async (e) => {
    const file = e.target.files[0]
    if (file) {
      const image = await imagebase64(file)
      setImg(image)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const form = e.target
    const formData = new FormData(form)
    formData.set("image", img)

    const data = {}
    formData.forEach((value, key) => {
      data[key] = value
    })

    const response = await fetch("/api/post/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      window.location.href = "/projects"
    } else {
      console.error("Form submission failed")
    }
  }

  return (
    <section className="container w-[50%] mx-auto mb-32">
      <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto mt-36">
        DB에 Project 데이터 올리기
      </h2>
      <div>
        <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
          <div className="relative flex items-center">
            <Input
              type="text"
              id="category"
              name="category"
              placeholder="category"
            />
            <User className="absolute right-6" size={20} />
          </div>
          <div className="relative flex items-center">
            <Input type="name" id="name" name="name" placeholder="Name" />
            <User className="absolute right-6" size={20} />
          </div>
          <div className="relative flex items-center">
            <Textarea name="description" placeholder="Type Your description." />
            <MessageSquare className="absolute top-4 right-6" size={20} />
          </div>
          <div className="relative flex items-center">
            <Input type="text" id="github" name="github" placeholder="github" />
            <User className="absolute right-6" size={20} />
          </div>
          <div className="relative flex items-center">
            <Input type="text" id="link" name="link" placeholder="link" />
            <User className="absolute right-6" size={20} />
          </div>
          <Input
            className="p-3 pl-4"
            type="file"
            name="image"
            onChange={handleUploadImage}
          />
          <Button
            type="submit"
            className="flex items-center gap-x-1 max-w-[166px]"
          >
            Let's Talk
            <ArrowRightIcon size={20} />
          </Button>
        </form>
        {/* 미리보기 */}
        {img ? (
          <div className="flex">
            <img
              className="mt-32 mx-auto w-[50%] h-[50%]"
              src={img}
              alt="preview"
            />
          </div>
        ) : (
          <div className="flex">
            <p className="mt-32 mx-auto">파일 미리보기 위치</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Admin
