import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const DBridge = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M18 4h3" />
        <Path
          fill="#131927"
          d="M10 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2M14 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        />
        <Path d="M10 20s6.5-2.5 2-8 2-8 2-8M3 20h3" />
      </G>
    </Svg>
  );
};
