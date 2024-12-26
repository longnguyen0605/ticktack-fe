type SuggestionParamList = {
    categoryMenu: undefined;
    categoryEdit: undefined;
    appSelect: {categoryId: number};
    appPlanning: {appId: string};
    appEdit: {categoryId: number};
    appTimer: {appId: string, appLogoURL: string, activity:string, usingTime: number};
    appTimeout: {appId: string};

  };


export default SuggestionParamList;
