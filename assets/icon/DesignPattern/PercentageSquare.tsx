import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const PercentageSquare = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Path d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z" />
        <Path
          fill="#131927"
          d="M15.5 16a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M8.5 9a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="m16 8-8 8" strokeLinecap="round" strokeLinejoin="round" />
      </G>
    </Svg>
  );
};
