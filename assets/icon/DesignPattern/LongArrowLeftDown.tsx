import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const LongArrowLeftDown = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M4.5 13.5 8 17l3.5-3.5" />
        <Path d="M8 17v-6a4 4 0 0 1 4-4h7" />
      </G>
    </Svg>
  );
};
