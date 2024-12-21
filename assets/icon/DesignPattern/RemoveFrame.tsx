import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const RemoveFrame = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path
          d="M4.998 2H2v2.998h2.998zM4.998 3.5h14M3.5 4.998V19M20.498 5v14.002M4.998 20.5h14M4.998 19H2v2.998h2.998zM21.998 2.001H19v2.998h2.998zM21.998 19.001H19v2.998h2.998z"
          strokeMiterlimit="1.5"
        />
        <Path d="M9 12h6" />
      </G>
    </Svg>
  );
};
