import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const GoogleDriveWarning = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M9.143 3.004 14.857 3m-5.714.004L2 15.004m7.143-12 4.902 9.496m.812-9.5L5.575 21m9.282-18L21.5 14M5.575 21 2 15.004M5.575 21h6.429M2 15.004h10.5M18 16v2M18 22.01l.01-.011" />
      </G>
    </Svg>
  );
};
