import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const AlignLeftBox = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m16.004 3.995-.011.01M20.004 3.995l-.011.01M20.004 7.995l-.011.01M20.004 11.995l-.011.01M20.004 15.995l-.011.01M20.004 19.995l-.011.01M16.004 19.995l-.011.01M12.006 3.995h-8v16h8z" />
      </G>
    </Svg>
  );
};
