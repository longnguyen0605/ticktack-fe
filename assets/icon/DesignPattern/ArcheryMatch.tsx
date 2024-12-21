import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ArcheryMatch = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M8.61 15.89 20.63 3.867M8.61 15.89H5.782l-2.829 2.829h2.829v2.828l2.828-2.828zM20.63 3.87h-2.828m2.829 0v2.828M15.39 15.89 3.37 3.867M15.39 15.89h2.828l2.829 2.829h-2.829v2.828l-2.828-2.828zM3.37 3.87h2.828m-2.829 0v2.828" />
      </G>
    </Svg>
  );
};
