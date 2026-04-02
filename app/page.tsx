import { getAllPosts } from "@/lib/posts"
import HomeClient from "./home-client"

export default async function HomePage() {
  const posts = getAllPosts()
  
  return <HomeClient posts={posts} />
}