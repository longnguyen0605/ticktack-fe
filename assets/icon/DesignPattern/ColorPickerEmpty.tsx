import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ColorPickerEmpty = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M13.879 7.697 16 9.818a1 1 0 0 1 0 1.414L8.363 18.87a1 1 0 0 1-.326.218L5.54 20.115c-1.233.507-2.466-.726-1.958-1.958L4.61 15.66a1 1 0 0 1 .218-.326l7.636-7.637a1 1 0 0 1 1.415 0M13.878 3.454l2.121 2.121m4.243 4.243-2.121-2.121m-2.122-2.122 1.414-1.414a1 1 0 0 1 1.415 0l.707.707a1 1 0 0 1 0 1.414L18.12 7.697m-2.122-2.122 2.122 2.122" />
      </G>
    </Svg>
  );
};
