import Button from "../../../components/ui/Button";
import { FiImage } from "react-icons/fi";

const CaseStudyCard = ({
  title,
  description,
  tags = [],
  image,
  badge,
  onReadCaseStudy,
}) => {
  return (
    <div className="border-border bg-surface hover:border-primary-light flex flex-col overflow-hidden rounded-2xl border transition-transform duration-200 hover:-translate-y-1.5">
      {/* Image */}
      <div className="border-border bg-background-elevated relative flex h-32.5 items-center justify-center overflow-hidden border-b">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover" />
        ) : (
          <FiImage size={26} className="text-text-muted" />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-text mb-2 text-[17px]">{title}</h3>

        {description && (
          <p className="text-text-muted mb-3.5 flex-1 text-[13.5px]">
            {description}
          </p>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-primary/14 text-accent rounded-md px-2.5 py-0.5 font-mono text-[10.5px]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action */}
        <div>
          <Button variant="primary" size="sm" onClick={onReadCaseStudy}>
            Read Case Study
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
