import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const PcMouse = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke={props.stroke?props.stroke:"#131927"}
        d="M12 2v0a8 8 0 0 1 8 8v4a8 8 0 0 1-8 8v0a8 8 0 0 1-8-8v-4a8 8 0 0 1 8-8zm0 0v7"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
