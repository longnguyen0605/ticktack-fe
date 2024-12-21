import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Inclination = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M22 19H3.41a.6.6 0 0 1-.431-1.016L16.444 4" />
        <Path d="M20 16c-.5-3.5-1-5-3-8" />
      </G>
    </Svg>
  );
};
