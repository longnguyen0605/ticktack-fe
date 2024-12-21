import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const DRectThreePts = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Path d="M3 21V3.6a.6.6 0 0 1 .6-.6H21" />
        <Path
          d="M17 21h3.4a.6.6 0 0 0 .6-.6V17M21 7v2M21 12v2M7 21h2M12 21h2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          fill="#131927"
          d="M3 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2M3 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2M21 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
