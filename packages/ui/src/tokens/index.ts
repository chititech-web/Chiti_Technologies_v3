import tokens from "./tokens.json";

export type ChitiUDS = typeof tokens.chiti_uds;
export type ThemeColors = ChitiUDS["theme"]["dark"]["color"];
export type BrandColors = ChitiUDS["brand"];
export type SemanticColors = ChitiUDS["semantic"];
export type SpacingTokens = ChitiUDS["spacing"];
export type TypographyTokens = ChitiUDS["typography"];
export type ElevationTokens = ChitiUDS["elevation"];
export type MotionTokens = ChitiUDS["motion"];
export type BorderRadiusTokens = ChitiUDS["borderRadius"];

export const chitiTokens = tokens.chiti_uds;
export default chitiTokens;
