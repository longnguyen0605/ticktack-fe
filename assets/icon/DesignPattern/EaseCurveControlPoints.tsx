import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const EaseCurveControlPoints = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M17 20a2 2 0 1 0 4 0 2 2 0 0 0-4 0m0 0h-2M7 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 0h2M14 4h-2M12 20h-2M3 20c8 0 10-16 18-16" />
      </G>
    </Svg>
  );
};
