import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const LongArrowLeftUp = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M4.5 10.5 8 7l3.5 3.5" />
        <Path d="M8 7v6a4 4 0 0 0 4 4h7" />
      </G>
    </Svg>
  );
};
