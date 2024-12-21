import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ArrowBl = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke="#131927"
        d="M19 6 6 19m0 0V6.52M6 19h12.48"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
