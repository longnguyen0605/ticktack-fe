import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const HardDrive = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path
          d="m10 17.01.01-.011M6 17.01l.01-.011"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M2 13v7.4a.6.6 0 0 0 .6.6h18.8a.6.6 0 0 0 .6-.6V13M2 13h20M2 13l2.872-9.572A.6.6 0 0 1 5.446 3h13.108a.6.6 0 0 1 .574.428L22 13" />
      </G>
    </Svg>
  );
};
