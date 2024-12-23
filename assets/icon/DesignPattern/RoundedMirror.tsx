import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const RoundedMirror = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M20 10v4a8 8 0 1 1-16 0v-4a8 8 0 1 1 16 0M17.5 4.5 13 8M19 7l-7.5 6" />
      </G>
    </Svg>
  );
};
