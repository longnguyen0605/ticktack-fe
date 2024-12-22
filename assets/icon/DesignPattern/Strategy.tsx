import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Strategy = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M6 20.5C7 11 11.5 8 20 6" />
        <Path d="M15.909 3.81 20.395 5.9l-2.092 4.486M5 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4M16 20.243l2.121-2.122m0 0L20.243 16m-2.122 2.121L16 16m2.121 2.121 2.122 2.122" />
      </G>
    </Svg>
  );
};
