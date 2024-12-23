import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const PauseWindow = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeLinecap="round" strokeWidth="1.5">
        <Path d="M16 21H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v9" />
        <Path
          d="M19 17v5M22 17v5M2 7h20M5 5.01l.01-.011M8 5.01l.01-.011M11 5.01l.01-.011"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
