import Link from "next/link";
import { BsGithub } from "react-icons/bs";

export function SocialLink({ Icon, uri, extended = false, label }) {
  return (
    <Link href={uri}>
      <Icon className="text-zinc-300 hover:text-zinc-100 text-2xl cursor-pointer" />
    </Link>
  );
}

export function GitHub({ username }) {
  return (
    <SocialLink
      Icon={BsGithub}
      uri={`https://github.com/${username}`}
      label={username}
    />
  );
}
