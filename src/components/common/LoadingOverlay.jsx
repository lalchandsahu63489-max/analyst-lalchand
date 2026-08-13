const LoadingOverlay = ({ label = "Loading...", inline = false }) => {
  if (inline) {
    return (
      <div className="flex items-center justify-center gap-3 py-10">
        <span className="border-border border-t-accent h-5 w-5 animate-spin rounded-full border-2" />
        {label && <span className="text-text-muted text-sm">{label}</span>}
      </div>
    );
  }

  return (
    <div className="bg-background/80 fixed inset-0 z-300 flex flex-col items-center justify-center gap-4 backdrop-blur-sm">
      <span className="border-border border-t-accent h-9 w-9 animate-spin rounded-full border-2" />
      {label && (
        <span className="text-text-muted font-mono text-sm">{label}</span>
      )}
    </div>
  );
};

export default LoadingOverlay;
