import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const CinemaOld = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M7 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4M17 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4M12 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4M12 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
        <Path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12m0 0v10" />
      </G>
    </Svg>
  );
};
