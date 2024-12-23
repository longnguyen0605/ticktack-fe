import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ViewColumns3 = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke={props.stroke?props.stroke:"#131927"}
        d="M9 3H3.6a.6.6 0 0 0-.6.6v16.8a.6.6 0 0 0 .6.6H9M9 3v18M9 3h6M9 21h6m0-18h5.4a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H15m0-18v18"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
