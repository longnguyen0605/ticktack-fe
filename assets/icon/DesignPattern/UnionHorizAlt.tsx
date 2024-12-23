import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const UnionHorizAlt = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M8 19A7 7 0 1 0 8 5a7 7 0 0 0 0 14" />
        <Path d="M16 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14" />
      </G>
    </Svg>
  );
};
