import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const HomeTemperatureOut = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M14 8 4.311 3.156a.6.6 0 0 0-.6.037L2.5 4M12 11v8a2 2 0 0 1-2 2H7m0 0H3.6a.6.6 0 0 1-.6-.6v-4.8a.6.6 0 0 1 .6-.6h2.8a.6.6 0 0 1 .6.6zM19 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4M19 7.5V14M19 12h2M19 9h2" />
      </G>
    </Svg>
  );
};
