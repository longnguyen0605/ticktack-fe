import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const DirectorChair = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeLinejoin="round" strokeWidth="1.5">
        <Path
          d="M19 12 5 21M5 3v9M19 3v9M5 12l14 9M4 12h16"
          strokeLinecap="round"
        />
        <Path d="M5 4h14M5 7h14" />
      </G>
    </Svg>
  );
};
