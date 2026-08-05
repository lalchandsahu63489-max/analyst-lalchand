import SectionHeader from "../../../components/common/SectionHeader";
import { timelineData } from "../../../constants/about";

const MyJourney = () => {
  return (
    <>
      <div className="mb-20">
        <SectionHeader
          eyebrow="// Growth"
          title="My Learning Journey"
          className="mb-10"
          titleClassName="text-[26px]"
        />
        <div className="border--border mx-auto ml-2 flex max-w-175 flex-col gap-8.5 border-l-2 pl-8">
          {timelineData.map(({ tag, title, desc }) => (
            <div key={tag + title} className="relative">
              <span className="border-accent bg-background absolute top-1 -left-10 h-3.25 w-3.25 rounded-full border-2" />
              <span className="text-warning mb-1 block font-mono text-[11px]">
                {tag}
              </span>
              <div className="font-display text-text mb-1 text-[17px] font-semibold">
                {title}
              </div>
              <div className="text-text-muted text-sm">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyJourney;
