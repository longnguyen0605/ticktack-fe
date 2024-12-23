import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const LightBulb = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M9 18h6M10 21h4M9 15c.001-2-.499-2.5-1.5-3.5S6.025 9.487 6 8c-.047-3.05 2-5 6-5 4.001 0 6.049 1.95 6 5-.023 1.487-.5 2.5-1.5 3.5-.999 1-1.499 1.5-1.5 3.5" />
      </G>
    </Svg>
  );
};
