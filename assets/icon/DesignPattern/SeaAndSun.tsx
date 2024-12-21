import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const SeaAndSun = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M3 15c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3 4.965-3 4.965-3 2.483 3 4.345 3M3 20c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3 4.965-3 4.965-3 2.483 3 4.345 3M19 10a7 7 0 1 0-14 0" />
      </G>
    </Svg>
  );
};
