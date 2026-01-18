export interface FullpageApi {
  moveTo: (section: string, slide?: number) => void;
  moveSectionDown: () => void;
  moveSectionUp: () => void;
  reBuild: () => void;
  // Simplified to what we use or might likely use
  setAllowScrolling: (allow: boolean) => void;
  setKeyboardScrolling: (allow: boolean) => void;
  setRecordHistory: (record: boolean) => void;
  setAutoScrolling: (auto: boolean) => void;
  fitToSection: () => void;
}
