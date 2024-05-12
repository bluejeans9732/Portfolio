import { connectDB } from "@/utils/database"

export default async function handler(요청, 응답) {
  console.log(요청.body)
  if (요청.method == "POST") {
    const client = await connectDB()
    const db = client.db("portfolio")
    let result = await db.collection("portfolio").insertOne(요청.body)
    return 응답.redirect(302, "/projects")
  }
}
