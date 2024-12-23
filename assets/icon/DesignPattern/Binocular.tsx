import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Binocular = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M21.5 14 20 9s-.5-2-2.5-2c0 0 0-2-2-2s-2 2-2 2h-3s0-2-2-2-2 2-2 2C4.5 7 4 9 4 9l-1.5 5" />
        <Path d="M6 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8M18 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
        <Path d="M12 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
      </G>
    </Svg>
  );
};
