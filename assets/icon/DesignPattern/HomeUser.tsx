import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const HomeUser = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path
          d="M2.5 9.5 12 4l9.5 5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M7 21v-1a5 5 0 0 1 10 0v1" />
        <Path
          d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
