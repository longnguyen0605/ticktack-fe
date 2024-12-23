import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const TemperatureLow = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M6 12a5 5 0 1 0 6 0M6 12V3h6v9M12 3h2M12 6h2M12 9h2M19 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
        <Path d="M9 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 0v-3" />
      </G>
    </Svg>
  );
};
