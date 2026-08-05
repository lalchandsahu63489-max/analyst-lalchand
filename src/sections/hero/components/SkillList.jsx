import Chip from "../../../components/ui/Chip";
import { SOFT_SKILLS, TECH_SKILLS } from "../../../constants/hero";

const SkillList = () => {
  return (
    <div className="mx-auto max-w-205">
      <span className="text-text-muted mb-3.5 block text-center font-mono text-xs tracking-[0.08em]">
        TECHNICAL SKILLS
      </span>
      <div className="mb-7 flex flex-wrap justify-center gap-2.5">
        {TECH_SKILLS.map((skill) => (
          <Chip key={skill}>{skill}</Chip>
        ))}
      </div>

      <span className="text-text-muted mb-3.5 block text-center font-mono text-xs tracking-[0.08em]">
        SOFT SKILLS
      </span>
      <div className="flex flex-wrap justify-center gap-2.5">
        {SOFT_SKILLS.map((skill) => (
          <Chip
            className="text-warning border-[rgba(251,191,36,0.3)]"
            key={skill}
          >
            {skill}
          </Chip>
        ))}
      </div>
    </div>
  );
};

export default SkillList;
