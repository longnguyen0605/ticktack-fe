import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const SpockHandGesture = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m18 7.5.919.153a2 2 0 0 1 1.623 2.407l-.528 2.376a.6.6 0 0 0-.014.13V17.5q0 0 0 0c0 2-1.6 4-4 4H9.42a2 2 0 0 1-1.519-.698l-4.548-5.307a1.58 1.58 0 0 1-.034-2.018v0a1.582 1.582 0 0 1 2.426-.054L8 16v-3.5" />
        <Path d="m9 5-.79.132a2 2 0 0 0-1.595 2.522L8 12.5M11 12.5 8.923 4.606a1.514 1.514 0 0 1 1.215-1.879v0a1.514 1.514 0 0 1 1.713 1.108L14 12M17 12.5l1-5 .247-1.485a1.536 1.536 0 0 0-1.262-1.768v0a1.536 1.536 0 0 0-1.762 1.233L14 12" />
      </G>
    </Svg>
  );
};
