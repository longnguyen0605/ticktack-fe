import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const MacDock = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path
          fill="#131927"
          d="M8 17a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M12 17a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M16 17a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"
        />
        <Path d="M21 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1M2 17.5l2-1M22 17.5l-2-1" />
      </G>
    </Svg>
  );
};
