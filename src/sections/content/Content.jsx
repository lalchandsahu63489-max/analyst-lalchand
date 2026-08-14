import { useState, useMemo } from "react";
import Container from "../../components/ui/Container";
import {
  contentFilters,
  contentData,
  platformLinks,
} from "../../constants/content";
import ContentCard from "./components/ContentCard";
import SectionHeader from "../../components/common/SectionHeader";
import { getContent } from "../../services/getMethods";
import { useQuery } from "@tanstack/react-query";

const Content = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["content"],
    queryFn: getContent,
  });

  return (
    <section id="content" data-reveal>
      <Container>
        <SectionHeader
          eyebrow="// Knowledge Hub"
          title="Content"
          subtitle="Sharing my learning journey, data analytics knowledge and practical insights."
          className="mb-14"
        />

        <div className="mb-10 grid grid-cols-1 gap-5.5 md:grid-cols-2 lg:grid-cols-3">
          {data?.map((item) => (
            <ContentCard
              key={item.id}
              title={item.title}
              description={item.shortDescription}
              image={item.imgUrl}
              githubUrl={item.githubUrl}
            />
          ))}
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-3.5">
          {platformLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="bg-surface border-border hover:border-accent hover:text-accent text-text flex items-center gap-2 rounded-full border px-5 py-2.5 font-mono text-[13px] transition-all duration-150 hover:-translate-y-0.5"
            >
              {label}
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Content;
