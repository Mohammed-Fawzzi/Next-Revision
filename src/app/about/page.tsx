import Link from "next/link";

export default function About() {
  return (
    <div className="mt-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">About Page</h1>
      <Link href={'/about/fawzzi'} className="p-3 bg-sky-500 text-white cursor-pointer rounded-lg">Nested Route</Link>
    </div>
  )
}
