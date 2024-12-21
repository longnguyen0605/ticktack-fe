import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Pentagon = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke="#131927"
        d="M11.647 2.256a.6.6 0 0 1 .706 0l9.756 7.089a.6.6 0 0 1 .218.67L18.6 21.485a.6.6 0 0 1-.57.414H5.97a.6.6 0 0 1-.57-.414l-3.727-11.47a.6.6 0 0 1 .218-.67z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
