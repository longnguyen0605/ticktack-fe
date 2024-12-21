import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Tram = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeLinecap="round" strokeWidth="1.5">
        <Path
          d="m15 16.01.01-.011M9 16.01l.01-.011M13 6l1-4m0 0h3m-3 0H7m6 4h2a5 5 0 0 1 5 5v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a5 5 0 0 1 5-5z"
          strokeLinejoin="round"
        />
        <Path d="m10.5 20-2 2.5M13.5 20l2 2.5M16.5 20l2 2.5M7.5 20l-2 2.5" />
        <Path
          d="M9.609 9h4.782A2.61 2.61 0 0 1 17 11.609a.39.39 0 0 1-.391.391H7.39A.39.39 0 0 1 7 11.609 2.61 2.61 0 0 1 9.609 9"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
