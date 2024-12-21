import Svg, { Path, G, ClipPath, Defs, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const UmbrellaFull = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" clipPath="url(#a)" strokeWidth="1.5">
        <Path d="M19.778 4.043C17.701 2.081 14.938 1 12 1S6.3 2.08 4.222 4.043 1 8.616 1 11.391c0 .336.289.609.644.609s.645-.273.645-.609c0-1.013.872-1.837 1.944-1.837C6.126 9.554 5.431 12 6.823 12c1.39 0 .696-2.446 2.588-2.446S12 12 12 12s.697-2.446 2.589-2.446S15.988 12 17.178 12s.696-2.446 2.589-2.446c1.072 0 1.944.824 1.944 1.837 0 .336.289.609.645.609.355 0 .644-.273.644-.609 0-2.775-1.144-5.385-3.222-7.348Z" />
        <Path
          d="M12 12v8c0 4-6 4-6 0"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath>
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
