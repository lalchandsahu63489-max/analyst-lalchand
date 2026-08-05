import { SOCIAL_LINKS } from "../../constants/hero";

const SocialLinks = () => {
  return (
    <div className="mb-14 flex flex-wrap justify-center gap-3">
      {SOCIAL_LINKS.map(({ label, href, icon }) => {
        const Icon = icon;
        return (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="group border-border text-text-muted hover:border-accent hover:text-accent relative flex h-10.5 w-10.5 items-center justify-center rounded-full border transition-all duration-150 hover:-translate-y-0.75 hover:scale-105 hover:shadow-[0_6px_18px_rgba(34,211,238,0.2)]"
          >
            <span className="border-border bg-surface pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 rounded-[5px] border px-2 py-0.5 font-mono text-[10.5px] whitespace-nowrap opacity-0 transition-opacity duration-150 group-hover:opacity-100">
              {label}
            </span>
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
