import { ReactNode } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { StyledContent, StyledArrow } from "./styles";

export const TooltipRoot = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;

interface TooltipProps {
  children: ReactNode;
  content: string;
  side: "top" | "bottom" | "left" | "right";
}

export function Tooltip({ children, content, side }: TooltipProps) {
  return (
    <TooltipRoot>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <StyledContent sideOffset={5} side={side}>
        {content}
        <StyledArrow />
      </StyledContent>
    </TooltipRoot>
  );
}
