import { BsGithub, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { FaHackerrank } from "react-icons/fa";

export function SocialLink({ Icon, uri, extended = false, label, ariaLabel }) {
  return (
    <a href={uri} target="_blank" rel="noopener noreferrer">
      <Icon className="text-white hover:text-primary text-2xl cursor-pointer" />
    </a>
  );
}

export function GitHub({ username }) {
  return (
    <SocialLink
      Icon={BsGithub}
      uri={`https://github.com/${username}`}
      label={username}
      ariaLabel="GitHub"
    />
  );
}

export function LinkedIn({ username }) {
  return (
    <SocialLink
      Icon={BsLinkedin}
      uri={`https://linkedin.com/in/${username}`}
      label={username}
      ariaLabel="LinkedIn"
    />
  );
}

export function Email({ mailId }) {
  return (
    <SocialLink
      Icon={MdMail}
      uri={`mailto:${mailId}`}
      label={mailId}
      ariaLabel="Email"
    />
  );
}

export function YouTube({ channel }) {
  return (
    <SocialLink
      Icon={BsYoutube}
      uri={`https://youtube.com/channel/${channel}`}
      label="YouTube"
      ariaLabel={"YouTube"}
    />
  );
}

export function Twitter({ username }) {
  return (
    <SocialLink
      Icon={BsTwitter}
      uri={`https://twitter.com/${username}`}
      label={username}
      ariaLabel="Twitter"
    />
  );
}

export function HackerRank({ username }) {
  return (
    <SocialLink
      Icon={FaHackerrank}
      uri={`https://hackerrank.com/${username}`}
      label={username}
      ariaLabel="HackerRank"
    />
  );
}
