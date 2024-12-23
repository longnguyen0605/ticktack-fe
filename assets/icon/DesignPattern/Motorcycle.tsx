import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Motorcycle = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M5 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8M19 15l-3-9 1-1" />
        <Path d="M16 8.5h-4.5l-4.5 3M5.5 15.5H12l1-2.5 3.5-4.5M8.5 10c-2-1.5-5-1.5-7 0M19 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
      </G>
    </Svg>
  );
};
