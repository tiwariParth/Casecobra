import { cn } from "@/lib/utils";
import { Chilanka } from "next/font/google";

interface MaxWidthWrapperProps {
  className?: string;
  children?: React.ReactNode;
}

const MaxWidthWrapper = ({ className, children }: MaxWidthWrapperProps) => {
  return (
    <div
      className={cn(
        "h-full w-full mx-auto max-w-screen-xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
