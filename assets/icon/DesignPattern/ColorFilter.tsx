import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ColorFilter = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M12 14.5a6 6 0 1 0 0-12 6 6 0 0 0 0 12" />
        <Path d="M16 21.5a6 6 0 1 0 0-12 6 6 0 0 0 0 12" />
        <Path d="M8 21.5a6 6 0 1 0 0-12 6 6 0 0 0 0 12" />
      </G>
    </Svg>
  );
};
