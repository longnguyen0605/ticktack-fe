import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const FontSize = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M18 21V11m0 10-2-2.5m2 2.5 2-2.5M18 11l-2 2m2-2 2 2M9 5v12m0 0H7m2 0h2M15 7V5H3v2" />
      </G>
    </Svg>
  );
};
