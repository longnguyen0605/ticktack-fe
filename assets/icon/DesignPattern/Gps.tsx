import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Gps = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M22 8.5h-2.25A1.75 1.75 0 0 0 18 10.25v0c0 .966.784 1.75 1.75 1.75h1.5c.966 0 1.75.784 1.75 1.75v0a1.75 1.75 0 0 1-1.75 1.75H18M10.5 15.5v-2.8m0 0h2.857c.714 0 2.143 0 2.143-2.1s-1.429-2.1-2.143-2.1H10.5zM6.5 9.127a3.5 3.5 0 1 0-2 6.373C6.433 15.5 8 14 8 12H5" />
      </G>
    </Svg>
  );
};
