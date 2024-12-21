import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const LightBulbOff = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M9 18h6M10 21h4M16.5 11.5c1-1 1.477-2.013 1.5-3.5.048-3.05-2-5-6-5-1.168 0-2.169.166-3 .477M9 15c.001-2-.499-2.5-1.5-3.5S6.025 9.487 6 8a5.6 5.6 0 0 1 .169-1.5M3 3l18 18" />
      </G>
    </Svg>
  );
};
