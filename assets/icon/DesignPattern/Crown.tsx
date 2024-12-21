import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Crown = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke="#131927"
        d="M19.2 17 21 7l-6.3 3L12 7l-2.7 3L3 7l1.8 10z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
