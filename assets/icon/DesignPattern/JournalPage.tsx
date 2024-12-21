import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const JournalPage = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M6 6h8M6 10h12M13 14h5M13 18h5M2 21.4V2.6a.6.6 0 0 1 .6-.6h15.652a.6.6 0 0 1 .424.176l3.148 3.148A.6.6 0 0 1 22 5.75V21.4a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6" />
        <Path d="M6 18v-4h3v4zM18 2v3.4a.6.6 0 0 0 .6.6H22" />
      </G>
    </Svg>
  );
};
