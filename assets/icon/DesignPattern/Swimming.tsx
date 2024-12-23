import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Swimming = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M3 15c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3 4.965-3 4.965-3 2.483 3 4.345 3M3 20c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3 4.965-3 4.965-3 2.483 3 4.345 3M5 10.5 9 8 7.813 6.516a1.26 1.26 0 0 1 .228-1.797v0a1.26 1.26 0 0 1 1.726.202L14 10M16.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
      </G>
    </Svg>
  );
};
