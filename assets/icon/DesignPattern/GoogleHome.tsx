import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const GoogleHome = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeLinecap="round" strokeWidth="1.5">
        <Path d="M17.708 17A9 9 0 1 0 4.291 5a9 9 0 0 0 13.417 12Zm0 0H19.5a2.5 2.5 0 0 1 2.5 2.5v0a2.5 2.5 0 0 1-2.5 2.5H17" />
        <Path
          d="m11 11.01.01-.011M8 11.01l.01-.011M14 11.01l.01-.011"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
