import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Stretching = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M16 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4M5 20l4.91-.524 2.726-5.238L13.727 9l-4.909 1.048 1.636 2.095M14.818 15.286H17V20" />
      </G>
    </Svg>
  );
};
