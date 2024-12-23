import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const GoogleDrive = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke={props.stroke?props.stroke:"#131927"}
        d="M9.143 3.004 14.857 3m-5.714.004L2 15.004m7.143-12L18.433 21M14.856 3 22 15.004M14.857 3 5.575 21m12.857 0H5.575m12.857 0L22 15.004M5.575 21 2 15.004m20 0H2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
