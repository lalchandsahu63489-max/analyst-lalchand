import CardWrapper from "../../../components/cards/CardWrapper";
import SectionHeader from "../../../components/common/SectionHeader";
import { valuesData } from "../../../constants/about";

const Personality = () => {
  return (
    <>
      
      <SectionHeader
        eyebrow="// Personality"
        title="What Defines Me"
        className="mb-8"
        titleClassName="text-[26px]"
      />
      <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {valuesData.map(({ icon: Icon, title, desc }) => (
          <CardWrapper
            key={title}
            className="p-5.5 text-center transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="bg-primary/14 text-primary-light mx-auto mb-3.5 flex h-10.5 w-10.5 items-center justify-center rounded-[10px]">
              <Icon size={20} />
            </div>
            <h5 className="font-display text-text mb-2 text-[14.5px]">
              {title}
            </h5>
            <p className="text-text-muted text-[12.5px]">{desc}</p>
          </CardWrapper>
        ))}
      </div>
    </>
  );
};

export default Personality;
