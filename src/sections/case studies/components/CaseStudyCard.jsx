import Button from "../../../components/ui/Button";

const CaseStudyCard = ({ caseStudy, onReadCaseStudy }) => {
  return (
    <div className="border-border bg-surface hover:border-primary-light flex flex-col overflow-hidden rounded-2xl border transition-transform duration-200 hover:-translate-y-1.5">
      <div className="border-border bg-background-elevated relative flex h-32.5 items-end gap-1.5 overflow-hidden border-b p-4">
        <span className="bg-warning/12 text-warning absolute top-2.5 right-2.5 rounded-full px-2.5 py-0.5 font-mono text-[10px]">
          {caseStudy.badge}
        </span>
        {caseStudy.bars.map((height, i) => (
          <div
            key={i}
            className="from-primary to-accent flex-1 rounded-t-[3px] bg-linear-to-b opacity-55"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-text mb-2 text-[17px]">
          {caseStudy.title}
        </h3>
        <p className="text-text-muted mb-3.5 flex-1 text-[13.5px]">
          {caseStudy.desc}
        </p>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {caseStudy.tags.map((tag) => (
            <span
              key={tag}
              className="bg-primary/14 text-accent rounded-md px-2.5 py-0.5 font-mono text-[10.5px]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div>
          <Button
            variant="primary"
            size="sm"
            onClick={() => onReadCaseStudy(caseStudy.id)}
          >
            Read Case Study
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
