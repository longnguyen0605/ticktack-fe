import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const LongArrowUpLeft = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m10.25 4.75-3.5 3.5 3.5 3.5" />
        <Path d="M6.75 8.25h6a4 4 0 0 1 4 4v7" />
      </G>
    </Svg>
  );
};