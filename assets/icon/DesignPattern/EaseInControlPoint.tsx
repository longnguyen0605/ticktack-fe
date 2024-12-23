import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const EaseInControlPoint = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M3 20c8 0 18-16 18-16M17 20a2 2 0 1 0 4 0 2 2 0 0 0-4 0m0 0h-2M12 20h-2" />
      </G>
    </Svg>
  );
};
