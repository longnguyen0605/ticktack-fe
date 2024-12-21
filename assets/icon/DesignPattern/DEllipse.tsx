import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const DEllipse = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path fill="#131927" d="M12 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
        <Path d="M12 22c4.418 0 8-4.477 8-10S16.418 2 12 2 4 6.477 4 12s3.582 10 8 10" />
        <Path fill="#131927" d="M12 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
      </G>
    </Svg>
  );
};
