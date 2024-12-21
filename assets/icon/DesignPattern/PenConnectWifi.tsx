import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const PenConnectWifi = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m8 9.76.01-.011M3 6.25c2.5-3 7.5-3 10 0M5 8.25c1.5-2 4.5-2 6 0M17.5 6.5l1-1a2.12 2.12 0 0 1 3 0v0a2.12 2.12 0 0 1 0 3l-1 1m-3-3L6.696 17.304a1 1 0 0 0-.263.465L5.5 21.5l3.731-.933a1 1 0 0 0 .465-.263L20.5 9.5m-3-3 3 3" />
      </G>
    </Svg>
  );
};
