import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Wristwatch = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M16 16.472V20a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-3.528M8 7.528V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3.528" />
        <Path d="M18 12a6 6 0 1 0-12 0 6 6 0 0 0 12 0" />
        <Path d="M14 12h-2v-2" />
      </G>
    </Svg>
  );
};
