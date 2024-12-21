import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const MoreVert = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        fill="#131927"
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M12 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M12 18.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M12 6.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
      </G>
    </Svg>
  );
};
