import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Farm = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M5 20H2V8l6-3 6 3v12h-3m-6 0v-7h6v7m-6 0h6M18 14v6M14 17h8M14 14h8" />
      </G>
    </Svg>
  );
};
