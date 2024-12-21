import Svg, { Circle, Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Planet = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Circle cx="12" cy="12" r="8" />
        <Path d="M17.5 6.348c2.297-.538 3.945-.476 4.338.312.73 1.466-3.158 4.889-8.686 7.645S2.549 18.107 1.818 16.641c-.392-.786.544-2.134 2.349-3.641" />
      </G>
    </Svg>
  );
};
