import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Dribbble = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12" />
        <Path d="M16.673 20.844C15.5 14 12.5 8 8.5 2.63" />
        <Path d="M2.067 10.84C6 11 15.283 10.5 19.142 5M21.967 12.81C15.343 10.84 7.499 14 5.23 19.361" />
      </G>
    </Svg>
  );
};
