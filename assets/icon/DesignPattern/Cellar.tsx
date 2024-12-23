import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Cellar = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M3 21h18v-9a9 9 0 1 0-18 0zM3 17h18" />
        <Path d="M9 17v-4h12M13 13V9h7" />
      </G>
    </Svg>
  );
};
