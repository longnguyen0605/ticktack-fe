import Svg, { Rect, Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const NetworkAlt = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Rect width="7" height="5" rx=".6" transform="matrix(1 0 0 -1 3 22)" />
        <Rect width="7" height="5" rx=".6" transform="matrix(1 0 0 -1 8.5 7)" />
        <Rect width="7" height="5" rx=".6" transform="matrix(1 0 0 -1 14 22)" />
        <Path d="M6.5 17v-3.5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2V17M12 11.5V7" />
      </G>
    </Svg>
  );
};
