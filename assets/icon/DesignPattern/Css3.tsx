import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Css3 = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m4 3 1.778 17.09L12 22l6.222-1.91L20 3z" />
        <Path d="M7 7h9.5l-1 10-3.5 1-3.5-1-.25-2.5M16 11.5H7.5" />
      </G>
    </Svg>
  );
};
