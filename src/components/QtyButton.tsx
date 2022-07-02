import React, {FC, memo} from 'react'
import {Button,ButtonGroup} from '@mui/material'
interface Props {
    value: number,
    onReamove: any,
    onAdd: any
}
export const QtyButton: FC<Props> = memo(({value, onAdd, onReamove}) => {
    return (
        <ButtonGroup variant="outlined" size="small" aria-label="text button group">
            <Button onClick={() => onReamove()} size="small"><span className="material-symbols-outlined">remove</span></Button>
            <Button size="small" disabled>{value}</Button>
            <Button onClick={() => onAdd()} size="small"><span className="material-symbols-outlined">add</span></Button>
        </ButtonGroup>
    )
})