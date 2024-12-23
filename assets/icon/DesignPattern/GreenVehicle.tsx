import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const GreenVehicle = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeLinecap="round" strokeWidth="1.5">
        <Path d="M7 10h8M6 14h1M15 14h1" strokeLinejoin="round" />
        <Path d="M6 18H2v2.4a.6.6 0 0 0 .6.6h2.8a.6.6 0 0 0 .6-.6zm0 0h7M2 18v-6.59a2 2 0 0 1 .162-.787l2.319-5.41A2 2 0 0 1 6.319 4h9.362a2 2 0 0 1 1.839 1.212l2.318 5.41a2 2 0 0 1 .162.789V12.5" />
        <Path d="M17 23s.9-3.118 3-5" strokeLinejoin="round" />
        <Path
          d="m19.802 21.425-.134.012a3.094 3.094 0 0 1-3.366-2.774 3.06 3.06 0 0 1 2.761-3.35l2.986-.28a.35.35 0 0 1 .381.314l.255 2.58a3.194 3.194 0 0 1-2.883 3.497"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
