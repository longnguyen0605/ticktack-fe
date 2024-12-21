import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const AntennaOff = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m7 23 1.111-4M17 23l-1.111-4M9.5 14l-1.389 5M9.5 14h4m-4 0 .8-2.88M8.11 19h7.778m0 0-1.184-4.264M11.445 7 12 5l1.047 3.768M3 3l18 18" />
        <Path fill="#131927" d="M12 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
      </G>
    </Svg>
  );
};
