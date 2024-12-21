import Svg, { Circle, Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const PlanetAlt = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Circle cx="12" cy="12" r="8" />
        <Path d="M19.812 12.99c1.813 1.51 2.755 2.863 2.362 3.651-.731 1.466-5.805.42-11.333-2.336S1.423 8.126 2.154 6.66c.392-.786 2.033-.85 4.322-.316" />
      </G>
    </Svg>
  );
};
