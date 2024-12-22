import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Puzzle = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M4 14v4.4a.6.6 0 0 0 .6.6H10M19 14v4.4a.6.6 0 0 1-.6.6H14M14 5h4.4a.6.6 0 0 1 .6.6V10M4 10V5.6a.6.6 0 0 1 .6-.6H10M14 19v1a2 2 0 1 1-4 0v-1M4 10h1a2 2 0 1 1 0 4H4M19 10h1a2 2 0 1 1 0 4h-1M14 5V4a2 2 0 1 0-4 0v1" />
      </G>
    </Svg>
  );
};
