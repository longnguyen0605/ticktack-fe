import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const BounceLeft = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M6 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4M21 15.5c-3-1-5.5-.5-8 4.5-.5-3-2-7.5-3.5-10" />
      </G>
    </Svg>
  );
};
