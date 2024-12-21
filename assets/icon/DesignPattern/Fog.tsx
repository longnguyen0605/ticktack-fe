import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Fog = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M9 14h6M9 22h6M7 18h10M3.5 17.382C2.188 16.707 1 15.388 1 13c0-4 3.333-5 5-5 0-2 0-6 6-6s6 4 6 6c1.667 0 5 1 5 5 0 2.388-1.188 3.707-2.5 4.382" />
      </G>
    </Svg>
  );
};
