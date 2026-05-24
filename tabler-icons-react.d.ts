// Declaration file for @tabler/icons-react
// This tells TypeScript that the module exists and that each exported icon is a React component.
// For a portfolio project, we keep the types simple (any) – you can refine later if needed.

declare module "@tabler/icons-react" {
  import * as React from "react";
  type IconProps = React.SVGProps<SVGSVGElement> & { size?: number | string };

  export const IconTerminal: React.FC<IconProps>;
  export const IconCpu: React.FC<IconProps>;
  export const IconDatabase: React.FC<IconProps>;
  export const IconServer: React.FC<IconProps>;
  export const IconCheck: React.FC<IconProps>;
  export const IconPlayerPlay: React.FC<IconProps>;
  export const IconHeart: React.FC<IconProps>;
  export const IconMapPin: React.FC<IconProps>;
  export const IconVolume: React.FC<IconProps>;
}
