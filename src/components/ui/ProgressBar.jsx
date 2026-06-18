import { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const ProgressBar = forwardRef(
  (
    {
      className,
      progress,
      colorClass = "bg-[#04376C]",
      showLabel = false,
      ...props
    },
    ref,
  ) => {
    // Ensure progress is between 0 and 100
    const clampedProgress = Math.min(Math.max(progress, 0), 100);

    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        {showLabel && (
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="text-sm font-medium text-gray-700">
              {clampedProgress}%
            </span>
          </div>
        )}
        <div className="w-full h-2.5 bg-[#F5F7FA] rounded-full overflow-hidden border border-[#E5E7EB]">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${clampedProgress}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={cn("h-full rounded-full", colorClass)}
          />
        </div>
      </div>
    );
  },
);
ProgressBar.displayName = "ProgressBar";
