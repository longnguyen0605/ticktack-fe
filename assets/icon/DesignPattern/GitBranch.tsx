import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const GitBranch = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M18 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4M6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4M6 16V3" />
        <Path d="M8 18h1c3.5 0 9-2.1 9-8.5V8" />
      </G>
    </Svg>
  );
};
