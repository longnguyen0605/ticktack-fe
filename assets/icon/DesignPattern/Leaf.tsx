import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Leaf = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M7 21s.5-4.5 4-8.5" />
        <Path d="m19.13 4.242.594 6.175c.374 3.886-2.54 7.346-6.425 7.72-3.813.367-7.267-2.42-7.634-6.233a6.936 6.936 0 0 1 6.239-7.569l6.571-.632a.6.6 0 0 1 .655.54" />
      </G>
    </Svg>
  );
};
