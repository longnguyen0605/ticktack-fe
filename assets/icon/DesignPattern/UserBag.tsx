import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const UserBag = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
        <Path d="M2 18a7 7 0 0 1 11.33-5.5M21.364 16.707l.296 2A2 2 0 0 1 19.682 21h-3.364a2 2 0 0 1-1.978-2.293l.296-2A2 2 0 0 1 16.614 15h2.772a2 2 0 0 1 1.978 1.707M17 13h2" />
      </G>
    </Svg>
  );
};
