import React from 'react'

import downSortIcon from '../../icons/down-icon.svg'
import upSortIcon from '../../icons/up-icon.svg'
import noneSortIcon from '../../icons/none-sort-icon.svg'

// добавить в проект иконки и импортировать
const downIcon = downSortIcon
const upIcon = upSortIcon
const noneIcon = noneSortIcon

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    // return '' // исправить
    switch (sort) {
        case (''):
            return down; break
        case (down):
            return up; break
        case (up):
            return ''; break
        default: return down
    }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            <img
                id={id + '-icon-' + sort}
                src={icon}
            />
        </span>
    )
}

export default SuperSort
