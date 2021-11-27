export interface MenuItemType {
    label: TNavLabels
    path: CssNavPath | CssLayoutList | TestList | TNavLabels | ''
    active: boolean
}

export type CssNavPath =
    | 'css'
    | 'cssFlex'
    | 'cssGrid'
    | 'cssPosition'
    | 'cssSemanticTags'
    | 'cssDisplay'
    | 'cssTags'
export type CssLayoutList = 'layoutBudget'
export type TestList = 'test' | 'testHooks' | 'testTypescript' | 'testEmptyComponent' | 'testTS' | 'testRxjs'

export type TNavLabels = 'Home' | 'Css' | 'Test' | 'RXjs'

export type TNavigation = {
    [key in TNavLabels]: {
        label: key
        path: CssNavPath | CssLayoutList | TestList | TNavLabels | ''
        active: boolean
    }
}


