import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const PlugTypeL = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M10 3H5.6a.6.6 0 0 0-.6.6v16.8a.6.6 0 0 0 .6.6H10M11 7h2M11 12h2M11 17h2M14 3h4.4a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H14" />
      </G>
    </Svg>
  );
};
