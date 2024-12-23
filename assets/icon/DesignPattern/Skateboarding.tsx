import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Skateboarding = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m5 19 2.333 1h9.334L19 19M8 22.01l.01-.011M16 22.01l.01-.011M7 7.834l3-1.5c2-1 4.27.567 4.27.567l-4.308 3.135L14 13.334v4M9.549 13.345l-1.24.826H5M15.166 9.21h2.722M17 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
      </G>
    </Svg>
  );
};
