import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const EyeOff = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m3 3 18 18M10.5 10.677a2 2 0 0 0 2.823 2.823" />
        <Path d="M7.362 7.561C5.68 8.74 4.279 10.419 3 12c1.889 2.99 5.282 6 9 6 1.55 0 3.043-.523 4.395-1.35M12 6c4.008 0 6.701 3.158 9 6a16 16 0 0 1-1.078 1.5" />
      </G>
    </Svg>
  );
};
