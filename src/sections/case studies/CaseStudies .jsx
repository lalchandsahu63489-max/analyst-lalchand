import { useState, useMemo } from "react";
import { caseStudiesData, caseStudyFilters } from "../../constants/caseStudies";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import CaseStudyCard from "./components/CaseStudyCard";
import SectionHeader from "../../components/common/SectionHeader";
import { getCaseStudies } from "../../services/getMethods";
import { useQuery } from "@tanstack/react-query";

const CaseStudies = ({
  onReadCaseStudy = (id) => console.log("open modal:", id),
}) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["case-study"],
    queryFn: getCaseStudies,
  });

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
          {data?.map((caseStudy) => (
            <CaseStudyCard
              key={caseStudy.id}
              title={caseStudy.title}
              description={caseStudy.shortDescription}
              image={caseStudy.imgUrl}
              tags={caseStudy.tags}
              onReadCaseStudy={() => onReadCaseStudy(caseStudy.id)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CaseStudies;
