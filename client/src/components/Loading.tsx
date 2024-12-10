import { Loader2Icon } from "lucide-react";

export const Loading = () => {
  return (
    <div className="loading">
      <Loader2Icon className="loading__spinner" />
      <span className="loading__text">Loading...</span>
    </div>
  );
};
