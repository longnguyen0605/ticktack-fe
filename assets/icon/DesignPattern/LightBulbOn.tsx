import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const LightBulbOn = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m21 2-1 1M3 2l1 1M21 16l-1-1M3 16l1-1M9 18h6M10 21h4M12 3C8 3 5.954 4.95 6 8c.024 1.487.5 2.5 1.5 3.5S9.002 13 9 15h6c.001-2 .5-2.5 1.5-3.5h0c1-1 1.477-2.013 1.5-3.5.049-3.05-1.999-5-6-5" />
      </G>
    </Svg>
  );
};
