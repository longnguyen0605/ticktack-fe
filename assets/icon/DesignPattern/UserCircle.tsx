import Svg, { Path, Circle, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const UserCircle = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path
          d="M7 18v-1a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v1"
          strokeLinecap="round"
        />
        <Path
          d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Circle cx="12" cy="12" r="10" />
      </G>
    </Svg>
  );
};
