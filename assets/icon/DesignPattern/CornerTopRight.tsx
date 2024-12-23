import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const CornerTopRight = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m20.01 16.01-.01-.011M20.01 20.01l-.01-.011M16.01 20.01l-.01-.011M12.01 20.01l-.01-.011M8.01 20.01 8 19.999M4.01 20.01 4 19.999M4.01 16.01 4 15.999M4.01 12.01 4 11.999M4.01 8.01 4 7.999M4.01 4.01 4 3.999M8.01 4.01 8 3.999M20.01 12V4h-8v8z" />
      </G>
    </Svg>
  );
};
