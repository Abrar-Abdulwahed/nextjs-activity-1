import Link from "next/link"
const Navbar = () => {
  return (
    <div>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/posts/">Posts</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar