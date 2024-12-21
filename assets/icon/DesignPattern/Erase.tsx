import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Erase = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M21 21H9M15.89 14.89 8.465 7.463M2.893 12.607l9.193-9.193a2 2 0 0 1 2.828 0l4.95 4.95a2 2 0 0 1 0 2.828l-9.243 9.243a1.93 1.93 0 0 1-2.728 0l-5-5a2 2 0 0 1 0-2.828" />
      </G>
    </Svg>
  );
};
