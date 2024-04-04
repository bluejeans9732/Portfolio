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
            <Tabs bs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualification"
                >
                  Qualification
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8 p-2">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">h3자리</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">p자리</p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoDate.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </TabsContent>
                {/* quilfication */}
                <TabsContent value="qualification">Qualification</TabsContent>
                {/* skills */}
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
