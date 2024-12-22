import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const GoogleOne = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M11 5v14a2 2 0 1 0 4 0V5a2 2 0 1 0-4 0" />
        <Path d="M11.64 3.53 6.748 8.171a2 2 0 1 0 2.754 2.901l4.892-4.642a2 2 0 0 0-2.754-2.902" />
      </G>
    </Svg>
  );
};
