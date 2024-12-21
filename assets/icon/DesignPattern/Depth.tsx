import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Depth = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M2 20h20M5 4h14M3 16.01l.01-.011M21.01 16.01l-.01-.011M4 12.01l.01-.011M20.01 12.01l-.01-.011M5 8.01l.01-.011M19.01 8.01 19 7.999M12 7v10m0-10-1.5 1.5M12 7l1.5 1.5M12 17l-3-3m3 3 3-3" />
      </G>
    </Svg>
  );
};
