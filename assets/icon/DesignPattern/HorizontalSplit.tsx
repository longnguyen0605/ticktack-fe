import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const HorizontalSplit = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M10 12H2m0 0 3.5-3.5M2 12l3.5 3.5M14 12h8m0 0-3.5-3.5M22 12l-3.5 3.5M10 21V3M14 21V3" />
      </G>
    </Svg>
  );
};
