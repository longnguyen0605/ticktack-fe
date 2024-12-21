import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Bank = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M3 9.5 12 4l9 5.5M5 20h14M10 9h4M6 17v-5M10 17v-5M14 17v-5M18 17v-5" />
      </G>
    </Svg>
  );
};
