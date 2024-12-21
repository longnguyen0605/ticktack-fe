import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Atom = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M4.404 13.61C3.515 13.145 3 12.592 3 12c0-1.657 4.03-3 9-3s9 1.343 9 3c0 .714-.75 1.37-2 1.886M12 11.01l.01-.011" />
        <Path d="M16.882 6c-.005-1.023-.263-1.747-.797-2.02-1.476-.751-4.502 2.23-6.759 6.658-2.256 4.429-2.889 8.629-1.413 9.381.528.269 1.253.061 2.07-.519" />
        <Path d="M9.6 4.252c-.66-.386-1.243-.497-1.687-.271-1.476.752-.844 4.952 1.413 9.38 2.257 4.43 5.283 7.41 6.759 6.658 1.312-.669.958-4.061-.722-7.917" />
      </G>
    </Svg>
  );
};
