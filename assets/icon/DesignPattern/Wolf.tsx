import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Wolf = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M5.812 7s-.453.628-.996 1.667M18.188 7s.453.628.997 1.667m-14.37 0C4.008 10.214 3 12.674 3 15.333 5.813 15.333 7.5 17 7.5 17s1.125 5 4.5 5 4.5-5 4.5-5 1.688-1.667 4.5-1.667c0-2.659-1.007-5.119-1.815-6.666m-14.37 0s-2.94-2.223 0-6.667c.997.556 3.81 2.778 3.81 2.778S10.313 3.667 12 3.667s3.375 1.11 3.375 1.11S18.188 2.557 19.313 2c2.812 4.445-.128 6.667-.128 6.667M11 18h1m1 0h-1m0 0v1M8.5 12.5 10 14M15.5 12.5 14 14" />
      </G>
    </Svg>
  );
};
