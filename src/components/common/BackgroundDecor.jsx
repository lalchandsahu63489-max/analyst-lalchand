import { FiBarChart2, FiDatabase, FiTrendingUp } from "react-icons/fi";

const BackgroundDecor = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-[-10%] animate-[gridDrift_40s_linear_infinite] bg-[linear-gradient(rgba(96,165,250,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.6)_1px,transparent_1px)] bg-size-[52px_52px] opacity-5" />

      <div className="bg-primary/16 absolute -top-30 -left-30 h-160 w-160 animate-[pulseGlow_8s_ease-in-out_infinite] rounded-full blur-3xl" />
      <div className="bg-accent/12 absolute -right-40 -bottom-40 h-160 w-160 animate-[pulseGlow_8s_ease-in-out_infinite] rounded-full blur-3xl [animation-delay:2s]" />

      <FiBarChart2
        className="text-primary-light animate-float absolute opacity-7"
        style={{ top: "18%", left: "6%", width: "60px", height: "60px" }}
      />
      <FiDatabase
        className="text-primary-light animate-float absolute opacity-7 [animation-delay:2s]"
        style={{ top: "55%", right: "8%", width: "70px", height: "70px" }}
      />
      <FiTrendingUp
        className="text-primary-light animate-float absolute opacity-7 [animation-delay:4s]"
        style={{ top: "80%", left: "15%", width: "50px", height: "50px" }}
      />
    </div>
  );
};

export default BackgroundDecor;
