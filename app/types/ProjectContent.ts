export interface SectionData {
    title: string;
    body: string;
  }
  
  export interface MapSectionData {
    title: string;
    figureCaption: string;
    body: string;
  }
  
  export interface HeaderData {
    journalTitle: string;
    mainTitle: string;
    subtitle: string;
  }
  
  export interface ProjectContent {
    header: HeaderData;
    themeSection: SectionData;
    individualSection: SectionData;
    digitalVisionSection: SectionData;
    reflectionSection: SectionData;
    mapSection: MapSectionData;
  }
  