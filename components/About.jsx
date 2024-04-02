import DevImg from "./DevImg"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  Calendar,
  Briefcase,
} from "lucide-react"

const infoDate = [
  {
    icon: <User2 size={20} />,
    text: "Myeong Chan",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+82 010-8411-9732",
  },
  {
    icon: <MailIcon size={20} />,
    text: "dyd97wns@naver.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 11 Apr, 1991",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "SeongNam",
  },
]

const qualificationData = [
  {
    title: "education",
    data: [
      {
        qualification: "education",
        years: "2023.01 - 06",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "",
        qualification: "not yet",
        years: "",
      },
    ],
  },
]

const skillData = [
  {
    title: "skills",
    data: [{ name: "HTML, CSS" }, { name: "Front-end Development" }],
  },
  {
    title: "tools",
    data: [{ imgPath: "/about/vscode.svg" }, { imgPath: "/about/notion.svg" }],
  },
]

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title == title)
  }
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList>
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="qualification">Qualification</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div>
                <TabsContent value="personal">Personal Info</TabsContent>
                <TabsContent value="qualification">Qualification</TabsContent>
                <TabsContent value="skills">Skills</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
