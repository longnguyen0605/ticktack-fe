import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const AddKeyframeAlt = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m20.777 13.345-7.297 8.027a2 2 0 0 1-2.96 0l-7.297-8.027a2 2 0 0 1 0-2.69l7.297-8.027a2 2 0 0 1 2.96 0l7.297 8.027a2 2 0 0 1 0 2.69M9 12h3m3 0h-3m0 0V9m0 3v3" />
      </G>
    </Svg>
  );
};
