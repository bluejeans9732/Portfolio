import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react"

const admin = () => {
  return (
    <section className="container w-[50%] mx-auto mb-32">
      <div className="mb-12">DB에 Project 데이터 올리기</div>
      <div>
        <form
          action="/api/post/new"
          method="POST"
          className="flex flex-col gap-y-4"
        >
          {/* input */}
          <div className="relative flex items-center">
            <Input type="name" id="name" name="name" placeholder="Name" />
            <User className="absolute right-6" size={20} />
          </div>
          {/* input */}
          <div className="relative flex items-center">
            <Input type="email" id="email" name="email" placeholder="Email" />
            <MailIcon className="absolute right-6" size={20} />
          </div>
          {/* textarea */}
          <div className="relative flex items-center">
            <Textarea name="text" placeholder="Type Your Message Here." />
            <MessageSquare className="absolute top-4 right-6" size={20} />
          </div>
          <Button className="flex items-center gap-x-1 max-w-[166px]">
            Let's Talk
            <ArrowRightIcon size={20} />
          </Button>
        </form>
      </div>
    </section>
  )
}

export default admin
