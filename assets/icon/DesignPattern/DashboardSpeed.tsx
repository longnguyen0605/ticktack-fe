import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const DashboardSpeed = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M12 4v4M4 8l2.5 2.5M17.5 10.5 20 8M3 17h3M12 17l1-6M18 17h3M8.5 20.001H4A9.96 9.96 0 0 1 2 14C2 8.477 6.477 4 12 4s10 4.477 10 10c0 2.252-.744 4.33-2 6.001L15.5 20" />
        <Path d="M12 23a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
      </G>
    </Svg>
  );
};
