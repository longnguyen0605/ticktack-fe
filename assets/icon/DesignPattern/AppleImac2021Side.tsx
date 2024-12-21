import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const AppleImac2021Side = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M6 22h2m6 0H8m0 0 2-8.5m0 0L7 2m3 11.5 1.5 5.5M17 22h1" />
      </G>
    </Svg>
  );
};
