import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const PathArrow = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M18 16.5V3m0 0 3.5 3.5M18 3l-3.5 3.5M18 16.5a3.5 3.5 0 1 1-7 0v-9M11 7.5a3.5 3.5 0 1 0-7 0v12" />
      </G>
    </Svg>
  );
};
