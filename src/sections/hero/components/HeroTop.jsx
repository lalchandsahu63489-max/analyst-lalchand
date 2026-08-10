import useTypingEffect from "../../../hooks/useTypingEffect";
import {
  HiMiniChartBar,
  HiCircleStack,
  HiArrowRight,
  HiArrowDownTray,
  HiBookOpen,
} from "react-icons/hi2";
import { HERO_CONTENT } from "../../../constants/hero";
import Button from "../../../components/ui/Button";

const HeroTop = () => {
  const text = useTypingEffect();

  const handleResumeClick = (e) => {
    e.preventDefault();
    alert(
      'Add your resume PDF to this folder as "resume.pdf" and update the button href to "resume.pdf".',
    );
  };
  return (
    <>
      <span className="text-warning mb-3.5 block font-mono text-base">
        {HERO_CONTENT.greeting}
      </span>

      <div className="relative mx-auto mb-7 h-37.5 w-37.5">
        <div className="absolute -inset-4.5 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.35),transparent_70%)] blur-[18px]" />
        <div className="from-primary to-accent relative flex h-37.5 w-37.5 items-center justify-center overflow-hidden rounded-full border-[3px] border-white/15 bg-linear-to-br">
          <img
            src={HERO_CONTENT.image.src}
            alt={HERO_CONTENT.image.alt}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="border-border bg-surface text-accent absolute -top-2 -right-3.5 flex h-8.5 w-8.5 animate-[floatY_5s_ease-in-out_infinite] items-center justify-center rounded-[9px] border">
          <HiMiniChartBar className="h-4 w-4" />
        </div>
        <div className="border-border bg-surface text-warning absolute -bottom-1 -left-4.5 flex h-8.5 w-8.5 animate-[floatY_7s_ease-in-out_infinite_reverse] items-center justify-center rounded-[9px] border">
          <HiCircleStack className="h-4 w-4" />
        </div>
      </div>

      <h1 className="font-display mb-3 text-[46px] font-bold">
        {HERO_CONTENT.name}
      </h1>

      <div className="text-primary-light mb-5 h-7 font-mono text-[19px]">
        <span>{text}</span>
        <span className="animate-[blink_0.9s_step-end_infinite]">|</span>
      </div>

      <p className="text-text-muted mx-auto mb-8 max-w-140 text-base">
        {HERO_CONTENT.bio}
      </p>

      <div className="mb-9 flex flex-wrap items-center justify-center gap-4">
        {HERO_CONTENT.actions.map((action) => {
          const Icon = action.icon;
          return (
            <a
              href={action.href}
              key={action.label}
              download={action.download && action.href}
            >
              <Button
                onClick={() => console.log("clicked")}
                variant={action.type}
              >
                <span>{action.label}</span>
                <Icon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default HeroTop;
