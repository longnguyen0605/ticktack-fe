import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Medium = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M7 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8M15 16c1.105 0 2-1.79 2-4s-.895-4-2-4-2 1.79-2 4 .895 4 2 4M20 16c.552 0 1-1.79 1-4s-.448-4-1-4-1 1.79-1 4 .448 4 1 4" />
      </G>
    </Svg>
  );
};
