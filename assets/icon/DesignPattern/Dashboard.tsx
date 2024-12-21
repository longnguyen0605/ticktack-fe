import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Dashboard = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Path d="M15 15.8c0-1.767-3-4.8-3-4.8s-3 3.033-3 4.8 1.343 3.2 3 3.2 3-1.433 3-3.2Z" />
        <Path
          d="M12 4v4M3.5 7.5l3 3M17.5 10.5l3-3M2 17h4M18 17h4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
