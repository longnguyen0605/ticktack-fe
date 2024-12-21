import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Church = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m12 6-7.718 4.824a.6.6 0 0 0-.282.508V21.4a.6.6 0 0 0 .6.6H12m0-16 7.718 4.824a.6.6 0 0 1 .282.508V21.4a.6.6 0 0 1-.6.6H12m0-16V4m0-2v2m-2 0h2m0 0h2m-2 18v-5M16 17.01l.01-.011M16 13.01l.01-.011M12 13.01l.01-.011M8 13.01l.01-.011M8 17.01l.01-.011" />
      </G>
    </Svg>
  );
};
