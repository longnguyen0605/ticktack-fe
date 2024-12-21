import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Fingerprint = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M7 3.516A9.004 9.004 0 0 1 20.648 8.5M21 22v-8M3 22V11c0-1.052.18-2.062.512-3" />
        <Path d="M18 22V11.3C18 7.82 15.314 5 12 5s-6 2.82-6 6.3V14M6 22v-4" />
        <Path d="M9 22V11.15C9 9.41 10.343 8 12 8c.865 0 1.645.385 2.193 1M15 22v-8M12 22v-3.5M12 11v3" />
      </G>
    </Svg>
  );
};
