import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const TimeZone = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10" />
        <Path d="M13 2.05S16 6 16 12M11 21.95S8 18 8 12s3-9.95 3-9.95M2.629 15.5h9.37M2.629 8.5h18.74M19 17.5V19h1.5" />
        <Path d="M19 23a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
      </G>
    </Svg>
  );
};
