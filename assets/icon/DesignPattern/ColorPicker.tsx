import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ColorPicker = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m7 13.16 5.464-5.464a1 1 0 0 1 1.415 0l2.12 2.122a1 1 0 0 1 0 1.414l-1.928 1.929M7 13.16l-2.172 2.172a1 1 0 0 0-.218.327l-1.028 2.496c-.508 1.233.725 2.466 1.958 1.958l2.497-1.028a1 1 0 0 0 .326-.217l5.708-5.708M7 13.16h7.071M13.878 3.454l2.121 2.121m4.243 4.243-2.121-2.121m-2.122-2.122 1.414-1.414a1 1 0 0 1 1.415 0l.707.707a1 1 0 0 1 0 1.415L18.12 7.697m-2.122-2.122 2.122 2.122" />
      </G>
    </Svg>
  );
};
