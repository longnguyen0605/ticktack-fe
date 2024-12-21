import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const AntennaSignal = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M17.5 8S19 9.5 19 12s-1.5 4-1.5 4M20.5 5S23 7.5 23 12s-2.5 7-2.5 7M6.5 8S5 9.5 5 12s1.5 4 1.5 4M3.5 5S1 7.5 1 12s2.5 7 2.5 7" />
        <Path fill="#131927" d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
      </G>
    </Svg>
  );
};
