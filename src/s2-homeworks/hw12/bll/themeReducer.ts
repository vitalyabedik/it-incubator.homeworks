export type ThemeType = {
    themeId: number
}

const initState: ThemeType = {
    themeId: 1
}

type ActionsType = changeThemeIdType

export const themeReducer = (state = initState, action: ActionsType): ThemeType => { // fix any
    switch (action.type) {
        case ('SET_THEME_ID'): {
            return {
                ...state,
                themeId: +action.id
            }
        }

        default:
            return state
    }
}


type changeThemeIdType = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const) // fix any
