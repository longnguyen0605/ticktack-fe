import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const StatsReport = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path
          d="M10 9H6M15.5 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5M6 6h3M18 18l-4.5-3-2.5 2-5-4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z" />
      </G>
    </Svg>
  );
};
