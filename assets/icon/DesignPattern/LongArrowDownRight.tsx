import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const LongArrowDownRight = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m13.25 19.25 3.5-3.5-3.5-3.5" />
        <Path d="M16.75 15.75h-6a4 4 0 0 1-4-4v-7" />
      </G>
    </Svg>
  );
};