import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const OrganicFood = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M9 18s.9-3.741 3-6" />
        <Path d="m16.186 7.241.374 3.89c.243 2.523-1.649 4.77-4.172 5.012-2.475.238-4.718-1.571-4.956-4.047a4.503 4.503 0 0 1 4.05-4.914l4.147-.4a.51.51 0 0 1 .557.46" />
        <Path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" />
      </G>
    </Svg>
  );
};
