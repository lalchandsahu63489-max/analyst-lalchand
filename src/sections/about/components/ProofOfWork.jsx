import CardWrapper from "../../../components/cards/CardWrapper";
import SectionHeader from "../../../components/common/SectionHeader";
import Button from "../../../components/ui/Button";
import { CertIcon, certificatesData } from "../../../constants/about";

const ProofOfWork = () => {
  return (
    <>
      <SectionHeader
        eyebrow="// Proof of Work"
        title="Certificates & Achievements"
        className="mb-8"
        titleClassName="text-[26px]"
      />
      <div className="mb-20 grid grid-cols-1 gap-4.5 sm:grid-cols-2 md:grid-cols-3">
        {certificatesData.map(({ title, platform }) => (
          <CardWrapper
            key={title}
            className="hover:border-accent overflow-hidden transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="bg-lineear-to-br from--primary/18 to--accent/10 text-primary-light flex h-27.5 items-center justify-center">
              <CertIcon size={30} />
            </div>
            <div className="p-4">
              <h5 className="font-display text-text mb-1 text-[14.5px]">
                {title}
              </h5>
              <p className="text-text-muted mb-2.5 text-xs">{platform}</p>
              <Button variant="outline" size="sm">
                View Certificate
              </Button>
            </div>
          </CardWrapper>
        ))}
      </div>
    </>
  );
};

export default ProofOfWork;
