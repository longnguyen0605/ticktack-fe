import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const HorizontalMerge = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M22 12h-8m0 0 3.5-3.5M14 12l3.5 3.5M2 12h8m0 0L6.5 8.5M10 12l-3.5 3.5M10 21V3M14 21V3" />
      </G>
    </Svg>
  );
};
