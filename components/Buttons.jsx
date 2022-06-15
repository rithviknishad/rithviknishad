export function PrimaryButton({ children, Icon, onClick }) {
  return (
    <button
      className="btn-base group bg-primary hover:bg-primary-400 text-black"
      onClick={onClick}
    >
      {children}
      {Icon && (
        <Icon className="ml-4 group-hover:ml-7 transition-all ease-out text-xl" />
      )}
    </button>
  );
}

export function SecondaryButton({
  children,
  Icon,
  onClick,
  bounceIconOnHover = false,
}) {
  return (
    <button
      className="btn-base group text-white hover:text-primary border border-gray-600 hover:border-primary"
      onClick={onClick}
    >
      <span className="text-white">{children}</span>
      {Icon && (
        <Icon
          className={
            bounceIconOnHover
              ? "ml-4 group-hover:ml-7 transition-all ease-out text-xl group-hover:animate-bounce"
              : "ml-4 group-hover:ml-7 transition-all ease-out text-xl"
          }
        />
      )}
    </button>
  );
}

export function ProjectLinkButton({ label, icon, url, forceShrink = false }) {
  if (label === "") forceShrink = true;

  return (
    <a
      className="group flex text-xl gap-2 transition-all ease-out hover:text-white"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      {!forceShrink && (
        <span className="uppercase hidden lg:block text-sm transition-all ease-out tracking-wider">
          {label}
        </span>
      )}
    </a>
  );
}
