import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const CornerBottomRight = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m20.01 8-.01.011M20.01 4l-.01.011M16.01 4l-.01.011M12.01 4l-.01.011M8.01 4 8 4.011M4.01 4 4 4.011M4.01 8 4 8.011M4.01 12l-.01.011M4.01 16l-.01.011M4.01 20l-.01.011M8.01 20l-.01.011M20.01 12.01v8h-8v-8z" />
      </G>
    </Svg>
  );
};
