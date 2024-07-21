import { SignedIn } from "@clerk/nextjs";
import Link from "next/link";

export async function MenuItem() {
  return (
    <ul
      role="navigation"
      className="flex flex-col space-y-4  lg:flex-row lg:items-center lg:space-x-4"
    >
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/stream">Stream</Link>
      </li>
      <li>
        <Link href="/listen">Listen</Link>
      </li>
      <li>
        <Link href="/explore">Explore</Link>
      </li>
      <li>
        <Link href="/playlists">Playlists</Link>
      </li>
      <li>
        <Link href="/top-charts">Top Charts</Link>
      </li>
      <SignedIn>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
      </SignedIn>
    </ul>
  );
}
