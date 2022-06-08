import { IconButton, Tooltip } from '@mui/material'
import Github from '../images/Github.png'
import React from 'react'

export default function Footer() {
    return (
        <div className="footer">
            <Tooltip title="Visit Github">
                <IconButton>
                    <a target="_blank" href="https://github.com/souravjai" rel="noreferrer">
                    <img src={Github} alt="Github" height="45px"/>
                    </a>
                </IconButton>
            </Tooltip>
        </div>
    )
}
