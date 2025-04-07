import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import {cn} from "../lib/utils";
import Img from "./img";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({className, sideOffset = 4, ...props}, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 overflow-hidden bg-main-color-blue rounded-md px-3 py-1.5 text-xs text-primary-foreground",
        className
      )}
      {...props}
    />
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

type TooltipProps = {
  contentText: string;
  className?: string;
  svg?: string;
  onClick?: () => void;
};

export const CustomTooltip = ({
  contentText,
  svg,
  className,
  onClick,
}: TooltipProps) => {
  return (
    <div className={className}>
      <TooltipProvider skipDelayDuration={100} delayDuration={100}>
        <Tooltip>
          <TooltipTrigger>
            <Img
              src={`/assets/svg/${svg}.svg`}
              alt="tooltip"
              onClick={onClick}
              className="w-10"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-white">{contentText}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
