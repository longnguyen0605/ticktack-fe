import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const AlignTopBox = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m4 16 .01-.011M4 20l.01-.011M8 20l.01-.011M12 20l.01-.011M16 20l.01-.011M20 20l.01-.011M20 16l.01-.011M4 12V4h16v8z" />
      </G>
    </Svg>
  );
};
