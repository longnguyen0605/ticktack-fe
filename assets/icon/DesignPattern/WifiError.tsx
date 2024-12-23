import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const WifiError = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m12 18.51.01-.011M2 7c6-4.5 14-4.5 20 0M5 11c4-3 10-3 14 0M8.5 14.5c2.25-1.4 4.75-1.4 7 0M17.121 21.364l2.122-2.121m2.121-2.122-2.121 2.122m0 0L17.12 17.12m2.122 2.122 2.121 2.121" />
      </G>
    </Svg>
  );
};
