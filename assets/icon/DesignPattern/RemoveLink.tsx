import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const RemoveLink = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M7.143 16.995A5.3 5.3 0 0 1 6 16.871c-2.29-.505-4-2.495-4-4.873 0-2.714 2.226-4.923 5-4.996M13.318 9.634A5.5 5.5 0 0 0 11 7.5" />
        <Path d="M16.857 7q.59.001 1.143.124c2.29.505 4 2.495 4 4.874 0 2.76-2.302 4.997-5.143 4.997h-1.714c-2.826 0-5.143-2.506-5.143-4.997 0 0 0-.998.5-1.498M3 3l18 18" />
      </G>
    </Svg>
  );
};
