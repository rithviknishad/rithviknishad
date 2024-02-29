import { BsGithub, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { FaHackerrank } from "react-icons/fa";
import Link from "next/link";

export function SocialLink(props: {
  platform: string;
  href: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-primary text-2xl cursor-pointer"
      title={`${props.platform} - ${props.title}`}
    >
      {props.children}
    </Link>
  );
}

export function GitHub({ username }: { username: string }) {
  return (
    <SocialLink
      href={`https://github.com/${username}`}
      title={username}
      platform="GitHub"
    >
      <BsGithub />
    </SocialLink>
  );
}

export function LinkedIn({ username }: { username: string }) {
  return (
    <SocialLink
      href={`https://linkedin.com/in/${username}`}
      title={username}
      platform="LinkedIn"
    >
      <BsLinkedin />
    </SocialLink>
  );
}

export function Email({ mailId }: { mailId: string }) {
  return (
    <SocialLink href={`mailto:${mailId}`} title={mailId} platform="Email">
      <MdMail />
    </SocialLink>
  );
}

export function YouTube({ channel }: { channel: string }) {
  return (
    <SocialLink
      href={`https://youtube.com/channel/${channel}`}
      title="YouTube"
      platform={"YouTube"}
    >
      <BsYoutube />
    </SocialLink>
  );
}

export function Twitter({ username }: { username: string }) {
  return (
    <SocialLink
      href={`https://twitter.com/${username}`}
      title={username}
      platform="Twitter"
    >
      <BsTwitter />
    </SocialLink>
  );
}

export function HackerRank({ username }: { username: string }) {
  return (
    <SocialLink
      href={`https://hackerrank.com/${username}`}
      title={username}
      platform="HackerRank"
    >
      <FaHackerrank />
    </SocialLink>
  );
}
