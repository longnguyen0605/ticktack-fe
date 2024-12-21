import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const AddKeyframe = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M16 5h3m3 0h-3m0 0V2m0 3v3M16.819 14.329l-5.324 5.99a2 2 0 0 1-2.99 0l-5.324-5.99a2 2 0 0 1 0-2.658l5.324-5.99a2 2 0 0 1 2.99 0l5.324 5.99a2 2 0 0 1 0 2.658" />
      </G>
    </Svg>
  );
};
