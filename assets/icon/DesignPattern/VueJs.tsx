import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const VueJs = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M12 20.5 22.5 4h-4L12 14 5.5 4h-4z" />
        <Path d="M18.5 4h-4L12 7.5 9.5 4h-4" />
      </G>
    </Svg>
  );
};
