
const panelsArr = [0,1,1,1,0]; //1 = solid black border
const estShotsGroup = {
  typeOne: {areas: "'panel-1 panel-1 panel-1' 'panel-1 panel-1 panel-1' 'panel-2 panel-3 panel-3'", defaults: [0,0,0]}, 
  typeTwo: {areas: "'panel-1 panel-1 panel-1' 'panel-2 panel-2 panel-3' 'panel-4 panel-5 panel-5'", defaults: [0,0,0,0,0]}
}
const actionPagesGroup = {
  typeOne: {areas: "'panel-1 panel-2 panel-3' 'panel-4 panel-5 panel-6' 'panel-7 panel-8 panel-8'", defaults: [0,0,0,0,0,0,0,0]},
  typeTwo: {areas: "'panel-1 panel-1 panel-2' 'panel-3 panel-4 panel-4' 'panel-3 panel-4 panel-4'", defaults: [0,0,0,0]}
}
const dialogPagesGroup = {
  typeOne: {areas: "'panel-1 panel-2 panel-2' 'panel-3 panel-3 panel-4' 'panel-5 panel-6 panel-6'", defaults: [0,0,0,0,0,0]},
};
const characterIntrosGroup = {
  typeOne: {areas: "'panel-1 panel-2 panel-2' 'panel-1 panel-2 panel-2' 'panel-3 panel-3 panel-4'", defaults: [0,0,0,0], desc: "introduces character"},
  typeTwo: {areas: "'panel-1 panel-1 panel-2' 'panel-1 panel-1 panel-2' 'panel-3 panel-4 panel-4'", defaults: [0,0,0,0], desc: "introduces character"},
  typeThree: {areas: "'panel-1 panel-1 panel-2' 'panel-3 panel-3 panel-3' 'panel-3 panel-3 panel-3'", defaults: [0,0,0], desc: "introduces character"}
};
const singlePanelPagesGroup = {
  typeOne: {areas: "'panel-1 . .' 'panel-1 . .' '. . .'", defaults: [0]},
};

const pageGoalz = [
  {id: 1, text: "Establishes Setting and Mood"},
  {id: 2, text: "Introduces Character and Status Quo"},
  {id: 3, text: "Deepens some essential threat to the status quo"},
  {id: 4, text: "Introduces an antagonist or threat"},
  {id: 5, text: "Action and initial failure"},
  {id: 6, text: "Recovery,preparation, and building resolve: montage or dialog"},
  {id: 7, text: "New confrontation"},
  {id: 8, text: "Fierce conflict"},
  {id: 9, text: "Winning or resolution"},
  {id: 10, text: "After glow."},
];

const makePage = (pageIndex, layoutType, output, panels) => {
  const actualPanels = panels?.length === layoutType.defaults.length ? panels : layoutType.defaults;
  const isBlueForPrint = Boolean(output === "print");
  const pageContent = actualPanels.map((panel, index) => {
    const currPanelIndex = index+1;
    const isBlue = Boolean(!isBlueForPrint || panel === 1);
    return `<div class="panel panel-${currPanelIndex}" ${isBlue ? "style='border: 1px solid black;'" : "style='border: 1px dashed cyan;color: cyan;'"}>${currPanelIndex}</div>`
  }).join("");
  console.log("tag-pageContent: ", pageIndex, pageContent);
  document.getElementById(`page-${pageIndex}`).innerHTML = `${pageContent}`;
  document.getElementById(`page-${pageIndex}`).style.gridTemplateAreas = layoutType.areas;
  document.getElementById(`pageNumber-${pageIndex}`).innerHTML = `<div class="pageGoalz">${pageGoalz[pageIndex-1].text}</div><div>${pageIndex}</div>`;
  return pageContent;
};


const makeComic = pages => {
    console.log("tag-pages: ", pages);  
  pages.forEach((page, index) => {
    console.log("tag-page: ", page);
    const { layoutType = dialogPagesGroup.typeOne, output = "print", panels = [] } = page;
    console.log("tag-layoutType-output-panels: ", layoutType, output, panels);
    const pageIndex = index+1;
    console.log("tag-pageIndex: ", pageIndex);
    makePage(pageIndex, layoutType, output, panels);
  });
}

const comicOnePages = [
  {layoutType: estShotsGroup.typeOne, output: "print", panels: [0,1,1]},
  {layoutType: characterIntrosGroup.typeThree, output: "print", panels: [1,1,0]},
  {layoutType: dialogPagesGroup.typeOne, output: "print", panels: [1,1,1,0,0,1]},
  {layoutType: characterIntrosGroup.typeOne, output: "print", panels: [1,0,1,1]},
  {layoutType: actionPagesGroup.typeOne, output: "print", panels: [1,1,1,1,1,1,1,0]},
  {layoutType: dialogPagesGroup.typeOne, output: "print", panels: [0,1,1,0,1,1]},
  {layoutType: characterIntrosGroup.typeTwo, output: "print", panels: [1,0,1,1]},
  {layoutType: dialogPagesGroup.typeOne, output: "print", panels: [0,1,1,0,0,1]},
  {layoutType: actionPagesGroup.typeTwo, output: "print", panels: [1,1,1,0]},
  {layoutType: singlePanelPagesGroup.typeOne, output: "print", panels: [1]}
];

const comicBasicPages = [
  {layoutType: estShotsGroup.typeTwo},
  {layoutType: actionPagesGroup.typeOne},
  {layoutType: dialogPagesGroup.typeOne},
  {layoutType: estShotsGroup.typeOne},
  {layoutType: characterIntrosGroup.typeOne},
  {layoutType: characterIntrosGroup.typeTwo},
  {layoutType: actionPagesGroup.typeOne},
  {layoutType: actionPagesGroup.typeOne},
  {layoutType: actionPagesGroup.typeOne},
  {layoutType: actionPagesGroup.typeOne}
];

//makeComic(comicBasicPages);
makeComic(comicOnePages);


//Establishing shot, tone page, dialog, character Intro 
const shots = [
  {type: "Establishing Shot", description: "This is our setting", isEssential: true},
  {type: "Establishing Mood1"},
  {type: "Establishing Mood2"},
  {type: "Character Introduction"},
  {type: "Establishing Mood1"},
  {type: "Establishing Mood2"},
  {type: "Establishing Mood1"},
];
