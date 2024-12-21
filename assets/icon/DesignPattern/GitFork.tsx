import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const GitFork = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M17 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4M7 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4M7 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4M7 7v10M17 7v1c0 2.5-2 3-2 3l-6 2s-2 .5-2 3v1" />
      </G>
    </Svg>
  );
};
