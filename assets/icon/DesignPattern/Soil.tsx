import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Soil = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M2 4h20M3 8.01l.01-.011M3 16.01l.01-.011M6 12.01l.01-.011M6 20.01l.01-.011M9 8.01l.01-.011M9 16.01l.01-.011M12 12.01l.01-.011M12 20.01l.01-.011M15 8.01l.01-.011M15 16.01l.01-.011M18 12.01l.01-.011M18 20.01l.01-.011M21 8.01l.01-.011M21 16.01l.01-.011" />
      </G>
    </Svg>
  );
};
