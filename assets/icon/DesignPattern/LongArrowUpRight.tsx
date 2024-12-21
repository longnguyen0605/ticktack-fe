import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const LongArrowUpRight = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m13.25 4.75 3.5 3.5-3.5 3.5" />
        <Path d="M16.75 8.25h-6a4 4 0 0 0-4 4v7" />
      </G>
    </Svg>
  );
};
