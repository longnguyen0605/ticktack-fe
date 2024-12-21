import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Edit = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M3 21h18M12.222 5.828 15.05 3 20 7.95l-2.828 2.828m-4.95-4.95-5.607 5.607a1 1 0 0 0-.293.707v4.536h4.536a1 1 0 0 0 .707-.293l5.607-5.607m-4.95-4.95 4.95 4.95" />
      </G>
    </Svg>
  );
};
