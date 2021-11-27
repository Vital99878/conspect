export interface TNavItem {
    label: TNavLabels
    path: CssNavPath | CssLayoutList | TestList | TNavLabels | TTestDropdown | ''
    active: boolean,
    dropdown?: TNavItem[]
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
export type TTestDropdown = 'test_1' | 'test_2'

export type TNavLabels = 'Home' | 'Css' | 'Test' | 'RXjs'

export type TNavigation = {
    [key in TNavLabels]: TNavItem
}


