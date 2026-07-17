import { Suspense } from "react"
import TestClient from "./test-client"

export default function TestPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-900 flex items-center justify-center"><div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div></div>}>
      <TestClient />
    </Suspense>
  )
}