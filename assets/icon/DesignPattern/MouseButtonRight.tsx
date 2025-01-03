import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const MouseButtonRight = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeLinecap="round" strokeWidth="1.5">
        <Path d="M4 10v4a8 8 0 1 0 16 0V9a7 7 0 0 0-7-7h-1a8 8 0 0 0-8 8Z" />
        <Path d="M12 2v6.4a.6.6 0 0 0 .6.6H20" />
      </G>
    </Svg>
  );
};
