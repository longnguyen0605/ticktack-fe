import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Bicycle = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M5 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8.5 7.5h6M19 15l-4-7.5h-.5m0 0 2-3m0 0H14m2.5 0h2" />
        <Path d="m5 15 3.5-7.5L12 14h3M8.5 7.5c-.333-1-1.5-3-3.5-3" />
        <Path d="M19 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
      </G>
    </Svg>
  );
};
