import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Bold = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke="#131927"
        d="M12 11.667H8m4 0s3.333 0 3.333-3.334S12 5 12 5H8.6a.6.6 0 0 0-.6.6v6.067m4 0s4 0 4 3.666S12 19 12 19H8.6a.6.6 0 0 1-.6-.6v-6.733"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
