"use client"

import React, { useEffect, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProjectCard from "@/components/ProjectCard"

const Projects = () => {
  const [posts, setPosts] = useState([])
  const [category, setCategory] = useState("all projects")

  const uniqueCategories = [
    "all projects",
    ...new Set(posts.map((item) => item.category)),
  ]
  const [categories, setCategories] = useState(uniqueCategories)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/lists")
        if (response.ok) {
          const data = await response.json()
          setPosts(data.posts)
        } else {
          console.error("Error fetching posts:", response.status)
        }
      } catch (error) {
        console.error("Error fetching posts:", error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    setCategories([
      "all projects",
      ...new Set(posts.map((item) => item.category)),
    ])
  }, [posts])

  const filteredProjects = posts.filter((project) => {
    return category === "all projects" ? true : project.category === category
  })

  const reversedFilteredProjects = [...filteredProjects].reverse()

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              )
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {reversedFilteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects
