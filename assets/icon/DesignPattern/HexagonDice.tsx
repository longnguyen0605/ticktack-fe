import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const HexagonDice = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeLinejoin="round" strokeWidth="1.5">
        <Path
          d="M11.7 1.173a.6.6 0 0 1 .6 0l8.926 5.154a.6.6 0 0 1 .3.52v10.307a.6.6 0 0 1-.3.52L12.3 22.826a.6.6 0 0 1-.6 0l-8.926-5.154a.6.6 0 0 1-.3-.52V6.847a.6.6 0 0 1 .3-.52z"
          strokeLinecap="round"
        />
        <Path d="M17 15H7l5-8z" strokeLinecap="round" />
        <Path d="M2.5 6.5 12 7M2.5 6.5 7 15M21.5 6.5 17 15M21.5 6.5 12 7V1M21.5 17.5 17 15M2.5 17.5 7 15M7 15l5 8 5-8" />
      </G>
    </Svg>
  );
};
