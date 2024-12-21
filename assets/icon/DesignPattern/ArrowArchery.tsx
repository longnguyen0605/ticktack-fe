import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ArrowArchery = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke="#131927"
        d="M8.61 15.89 20.63 3.867M8.61 15.89H5.782l-2.829 2.829h2.829v2.828l2.828-2.828zM20.63 3.87h-2.828m2.829 0v2.828"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
