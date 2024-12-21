import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Clutery = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M6 20h3m3 0H9m0 0v-5M17 20v-8s2.5-1 2.5-3V4.5M17 8.5v-4M4.5 11c1 2.128 4.5 4 4.5 4s3.5-1.872 4.5-4c1.079-2.297 0-6.5 0-6.5h-9s-1.08 4.203 0 6.5" />
      </G>
    </Svg>
  );
};
