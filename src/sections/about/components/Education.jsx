import CardWrapper from "../../../components/cards/CardWrapper";
import SectionHeader from "../../../components/common/SectionHeader";
import { educationData } from "../../../constants/about";

const Education = () => {
  return (
    <>
      <SectionHeader
        eyebrow="// Background"
        title="Education"
        className="mb-8"
        titleClassName="text-[26px]"
      />
      <div className="mx-auto mb-20 grid max-w-205 grid-cols-1 gap-4.5 md:grid-cols-2">
        {educationData.map(({ title, institute, meta }) => (
          <CardWrapper key={title} className="p-5.5">
            <h4 className="font-display text-text mb-1.5 text-base">{title}</h4>
            <div className="text-primary-light mb-1 text-[13.5px]">
              {institute}
            </div>
            <div className="text-text-muted font-mono text-[11.5px]">
              {meta}
            </div>
          </CardWrapper>
        ))}
      </div>
    </>
  );
};

export default Education;
