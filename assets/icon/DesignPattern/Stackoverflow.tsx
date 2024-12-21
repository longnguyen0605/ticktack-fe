import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Stackoverflow = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M19 15v6H5v-6M16 17H8M15.913 14.663 8.088 13M16.713 12.38 9.463 9M18.173 10.642 12.045 5.5M20.035 8.804 15.109 2.5" />
      </G>
    </Svg>
  );
};
