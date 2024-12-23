import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const PenTabletConnectUsb = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path
          d="M22 7V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M2 12h4M6 3v18" />
        <Path
          d="M19.25 12H11M18.7 12l-.825 3h-1.65M17.6 12l-1.1-3h-1.926M22 12a1.37 1.37 0 0 0-1.375-1.364c-.76 0-1.375.61-1.375 1.364a1.37 1.37 0 0 0 1.375 1.364c.76 0 1.375-.61 1.375-1.364"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
