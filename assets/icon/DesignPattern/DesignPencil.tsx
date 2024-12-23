import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const DesignPencil = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2" />
        <Path d="M8 21.168V14l4-7 4 7v7.168" />
        <Path d="M8 14s1.127 1 2 1 2-1 2-1 1.127 1 2 1 2-1 2-1" />
      </G>
    </Svg>
  );
};
