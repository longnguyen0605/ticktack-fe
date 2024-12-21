import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const CutAlt = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M6.236 8a3 3 0 1 0-4.472-4 3 3 0 0 0 4.472 4m0 0L16 16M17 12h1M22 12h1M6.236 16a3 3 0 1 1-4.472 4 3 3 0 0 1 4.472-4m0 0L16 8" />
      </G>
    </Svg>
  );
};
