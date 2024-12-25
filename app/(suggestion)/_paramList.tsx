type SuggestionParamList = {
    categoryMenu: undefined;
    categoryEdit: undefined;
    appSelect: {categoryId: number};
    appPlanning: {appId: number};
    appEdit: {categoryId: number};
    appTimer: {appId: number, appLogoURL: string, activity:string, usingTime: number};
    appTimeout: undefined;

  };


export default SuggestionParamList;
