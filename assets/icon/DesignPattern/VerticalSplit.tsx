import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const VerticalSplit = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M12 14v8m0 0 3.5-3.5M12 22l-3.5-3.5M12 10V2m0 0 3.5 3.5M12 2 8.5 5.5M3 14h18M3 10h18" />
      </G>
    </Svg>
  );
};
