import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Developer = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M6.82 22v-2.857C6.664 17.592 5.634 16.416 4.684 15m9.772 7v-1.714c4.909 0 4.364-5.714 4.364-5.714s2.181 0 2.181-2.286L18.82 8.858c0-4.572-3.71-6.816-7.637-6.857-2.2-.023-3.957.53-5.27 1.499" />
        <Path d="m13 7 2 2.5-2 2.5M5 7 3 9.5 5 12M10 6l-2 7" />
      </G>
    </Svg>
  );
};
