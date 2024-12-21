import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const GitCompare = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M18 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4M6 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4M18 17V7s0-2-2-2h-3M6 7v10s0 2 2 2h3" />
        <Path d="M15 7.5 12.5 5 15 2.5M8.5 16.5 11 19l-2.5 2.5" />
      </G>
    </Svg>
  );
};
