import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const OrthogonalView = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M3 21V3h18v18zM3 16.5h18M3 12h18M3 7.5h18M16.5 3v18M12 3v18M7.5 3v18" />
      </G>
    </Svg>
  );
};
