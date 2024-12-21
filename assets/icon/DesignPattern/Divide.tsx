import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Divide = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M12 21v-9a5 5 0 0 0-5-5H3M12 21v-9a5 5 0 0 1 5-5h4" />
        <Path d="M7 3 3 7l4 4M17 3l4 4-4 4" />
      </G>
    </Svg>
  );
};
