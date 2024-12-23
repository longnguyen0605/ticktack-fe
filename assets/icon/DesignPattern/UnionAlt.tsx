import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const UnionAlt = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M9 22A7 7 0 1 0 9 8a7 7 0 0 0 0 14" />
        <Path d="M15 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14" />
      </G>
    </Svg>
  );
};
