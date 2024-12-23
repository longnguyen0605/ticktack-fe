import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ReceiveEuros = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M21 12h-8m0 0 3.84-4M13 12l3.84 4M11 7.503A4.75 4.75 0 0 0 8.87 7C6.18 7 4 9.239 4 12s2.18 5 4.87 5c.764 0 1.487-.18 2.13-.503M3 11h6M3 13h6" />
      </G>
    </Svg>
  );
};
