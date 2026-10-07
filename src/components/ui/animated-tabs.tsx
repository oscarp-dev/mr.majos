"use client";

// Animated Tabs — 21st.dev (@ibelick/animated-tabs). A shared-layout pill that
// slides behind whichever child is active. Children need a `data-id`.

import { cn } from "@/lib/utils";
import { AnimatePresence, type Transition, motion } from "framer-motion";
import {
  Children,
  cloneElement,
  type ReactElement,
  type ReactNode,
  isValidElement,
  useId,
  useState,
} from "react";

type ChildProps = {
  "data-id": string;
  className?: string;
  children?: ReactNode;
};

type AnimatedBackgroundProps = {
  children: ReactElement<ChildProps>[] | ReactElement<ChildProps>;
  /** Controlled active id; follows external changes (e.g. scroll-spy). */
  defaultValue?: string;
  onValueChange?: (newActiveId: string | null) => void;
  className?: string;
  transition?: Transition;
  enableHover?: boolean;
};

export default function AnimatedBackground({
  children,
  defaultValue,
  onValueChange,
  className,
  transition,
  enableHover = false,
}: AnimatedBackgroundProps) {
  const [activeId, setActiveId] = useState<string | null>(defaultValue ?? null);
  const [prevDefault, setPrevDefault] = useState(defaultValue);
  const uniqueId = useId();

  // Follow external changes to `defaultValue` (adjusting state during render
  // rather than in an effect, so there's no extra paint with the stale pill).
  if (defaultValue !== prevDefault) {
    setPrevDefault(defaultValue);
    if (defaultValue !== undefined) setActiveId(defaultValue);
  }

  const handleSetActiveId = (id: string | null) => {
    setActiveId(id);
    onValueChange?.(id);
  };

  return Children.map(children, (child) => {
    if (!isValidElement<ChildProps>(child)) return child;
    const id = child.props["data-id"];

    const interactionProps = enableHover
      ? {
          onMouseEnter: () => handleSetActiveId(id),
          onMouseLeave: () => handleSetActiveId(null),
        }
      : {
          onClick: () => handleSetActiveId(id),
        };

    return cloneElement(
      child as ReactElement<Record<string, unknown>>,
      {
        className: cn("relative inline-flex", child.props.className),
        "aria-selected": activeId === id,
        "data-checked": activeId === id ? "true" : "false",
        ...interactionProps,
      },
      <>
        <AnimatePresence initial={false}>
          {activeId === id && (
            <motion.div
              layoutId={`background-${uniqueId}`}
              className={cn("absolute inset-0", className)}
              transition={transition}
              initial={{ opacity: defaultValue ? 1 : 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </AnimatePresence>
        <span className="z-10">{child.props.children}</span>
      </>
    );
  });
}
