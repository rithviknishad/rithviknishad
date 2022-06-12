import { BsGithub, BsLinkedin } from "react-icons/bs";

export function SocialLink({ Icon, uri, extended = false, label }) {
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
    />
  );
}

export function LinkedIn({ username }) {
  return (
    <SocialLink
      Icon={BsLinkedin}
      uri={`https://linkedin.com/in/${username}`}
      label={username}
    />
  );
}
