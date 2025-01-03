import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const FingerprintErrorCircle = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M7 16v-4.639c0-.51.1-.999.285-1.453M17 14v-1.185m-7.778-5.08A5.5 5.5 0 0 1 12 7c2.28 0 4.203 1.33 4.805 3.15M10 17v-2.177M14 17v-5.147C14 10.83 13.105 10 12 10s-2 .83-2 1.853v.794" />
        <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 1.045-.16 2.053-.458 3M17.121 22.364l2.121-2.121m0 0 2.122-2.122m-2.122 2.122-2.12-2.122m2.12 2.122 2.122 2.121" />
      </G>
    </Svg>
  );
};
