import { ReactNode } from "react";
import { CONTAINER_MAX_WIDTH } from "@/config/layout";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-4 sm:px-6 lg:px-0 ${className}`}
      style={{
        maxWidth: CONTAINER_MAX_WIDTH,
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      {children}
    </div>
  );
}
