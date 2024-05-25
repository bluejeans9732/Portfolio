import { connectDB } from "@/utils/database"

export default async function handler(요청, 응답) {
  // console.log(요청.body)
  if (요청.method === "POST") {
    const client = await connectDB()
    const db = client.db("portfolio")
    let result = await db.collection("portfolio").insertOne(요청.body)

    // 리디렉션을 클라이언트 측에서 처리하기 위해 200 상태 코드를 반환합니다.
    응답.status(200).json({ message: "Success" })
  } else {
    응답.status(405).json({ message: "Method Not Allowed" }) // 허용되지 않는 메소드 처리
  }
}
