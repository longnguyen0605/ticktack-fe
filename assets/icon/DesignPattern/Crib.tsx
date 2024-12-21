import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Crib = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeLinejoin="round" strokeWidth="1.5">
        <Path d="M3 5v16" strokeLinecap="round" />
        <Path d="M3 16h18M3 7h18M18 16V7M14 16V7M10 16V7M6 16V7M3 19h18" />
        <Path
          d="M21 5v16M21 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M3 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
          strokeLinecap="round"
        />
      </G>
    </Svg>
  );
};
