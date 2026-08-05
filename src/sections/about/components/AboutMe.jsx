import SectionHeader from "../../../components/common/SectionHeader";
import {
  aboutStats,
  miniChartBars,
  timelineData,
} from "../../../constants/about";

const AboutMe = () => {
  return (
    <>
      <SectionHeader
        eyebrow="// About Me"
        title="My journey, education & passion for data"
        subtitle="The story behind the dashboards — how I got here and what drives me."
        className="mb-14"
      />

      <div className="mb-20 grid grid-cols-1 items-center gap-14 md:grid-cols-2">
        <div>
          <h3 className="font-display text-text mb-4 text-[22px]">Who I Am</h3>
          <p className="text-text-muted mb-4 text-[15.5px]">
            I am Lalchand Sahu, a Data Analyst passionate about transforming raw
            data into meaningful insights. I work with SQL, Excel, Power BI and
            analytics techniques to solve business problems and create
            data-driven solutions.
          </p>
          <p className="text-text-muted text-[15.5px]">
            My approach blends technical precision with business context — I
            don't just build dashboards, I make sure every number tells a story
            that leads to a decision.
          </p>
        </div>

        <div className="border-border bg-surface flex aspect-[1/0.85] flex-col justify-center gap-3 rounded-[14px] border p-6.5">
          <div className="grid grid-cols-3 gap-2.5">
            {aboutStats.map(({ value, label }) => (
              <div
                key={label}
                className="border-border bg-background-elevated rounded-lg border p-3 text-center"
              >
                <b className="font-display text-accent block text-xl">
                  {value}
                </b>
                <span className="text-text-muted font-mono text-[10px]">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div className="border-border bg-background-elevated flex h-25 items-end gap-1.5 rounded-lg border p-4">
            {miniChartBars.map((height, i) => (
              <div
                key={i}
                className="from-primary to-accent flex-1 rounded-t-[3px] bg-linear-to-b opacity-85"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
