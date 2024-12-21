import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Bbq = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Path
          d="M8.5 14.5 5 22M8 6s1-1.061 1-2c0-1.333-1-2-1-2M12 6s1-1.061 1-2c0-1.333-1-2-1-2M16 6s1-1.061 1-2c0-1.333-1-2-1-2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M16.5 17.5h-9" strokeLinejoin="round" />
        <Path
          d="m15.5 14.5 2.1 4.5M18.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M12 15a7 7 0 0 0 6.975-6.4.563.563 0 0 0-.575-.6H5.6a.563.563 0 0 0-.575.6A7 7 0 0 0 12 15Z" />
      </G>
    </Svg>
  );
};
