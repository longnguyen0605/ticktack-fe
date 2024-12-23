import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Shuffle = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M22 7c-3 0-8.5 0-10.5 5.5S5 18 2 18" />
        <Path d="m20 5 2 2-2 2M22 18c-3 0-8.5 0-10.5-5.5S5 7 2 7" />
        <Path d="m20 20 2-2-2-2" />
      </G>
    </Svg>
  );
};
