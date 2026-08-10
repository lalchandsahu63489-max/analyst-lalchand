import { useState, useMemo } from "react";
import { caseStudiesData, caseStudyFilters } from "../../constants/caseStudies";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import CaseStudyCard from "./components/CaseStudyCard";
import SectionHeader from "../../components/common/SectionHeader";

const CaseStudies = ({
  onReadCaseStudy = (id) => console.log("open modal:", id),
}) => {
  return (
    <section id="case-studies" data-reveal>
      <Container>
        <SectionHeader
          eyebrow=" // Business Impact"
          title="Case Studies"
          subtitle="Real-world business problems analyzed using data-driven approaches."
          className="mb-14"
        />

        <div className="mb-5 grid grid-cols-1 gap-5.5 md:grid-cols-2 lg:grid-cols-3">
          {caseStudiesData.map((caseStudy) => (
            <CaseStudyCard
              key={caseStudy.id}
              caseStudy={caseStudy}
              onReadCaseStudy={onReadCaseStudy}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CaseStudies;
