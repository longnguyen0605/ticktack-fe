import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Dialpad = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        fill="#131927"
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M5.5 10a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M5.5 15a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M12 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M12 10a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M12 15a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M12 20a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M18.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M18.5 10a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M18.5 15a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1" />
      </G>
    </Svg>
  );
};
