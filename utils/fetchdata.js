import { connectDB } from "@/utils/database"

export const fetchPosts = async () => {
  const client = await connectDB()
  const db = client.db("portfolio")
  const result = await db.collection("portfolio").find().toArray()
  return result
}
