
import React, { Fragment } from 'react'
import { Block, Icon, Text } from '@flow-ui/core'
import * as CoreScope from '@flow-ui/core'
import ThemeTypes from '@flow-ui/core/misc/themes/types'
import * as LabScope from '@flow-ui/lab'
//@ts-ignore
import ts from 'typescript/lib/typescriptServices'

Object.assign(window, {
    React,
    ...React,
    ...CoreScope,
    ...LabScope
})

interface PreviewProps {
    theme: ThemeTypes.Index
    code: string
    showGrid: boolean
    fullscreen: boolean
    onExitFullscreen: () => void
}

const Preview = (props: PreviewProps) => {
    const {theme, code, showGrid, fullscreen, onExitFullscreen} = props
    const traspiledCode = code && ts.transpile(code, {
        jsx: 'react',
        module: 'es6',
    }).split('export default ')[1].trim().slice(0, -1) + '()'
    
    return (
        <Fragment>
            <Block h="100%" css={{ position: 'relative' }}>
                <Block 
                    p="2rem" 
                    css={[
                        { 
                            position: 'absolute', 
                            zIndex: 1, 
                            top: 0, 
                            left: 0, 
                            right: 0, 
                            bottom: 0 
                        },
                        showGrid && {
                            '&::before': {
                                content: '\'\'',
                                position: 'absolute',
                                zIndex: -1,
                                left: 0, right: 0, bottom: 0, top: 0,
                                backgroundColor: theme.color.background.hex(),
                                backgroundImage: `
                                    linear-gradient(45deg, ${theme.color.surface.hex()} 25%, transparent 25%),
                                    linear-gradient(-45deg, ${theme.color.surface.hex()} 25%, transparent 25%), 
                                    linear-gradient(45deg, transparent 75%, ${theme.color.surface.hex()} 75%), 
                                    linear-gradient(-45deg, transparent 75%, ${theme.color.surface.hex()} 75%)
                                `,
                                backgroundSize: '2rem 2rem',
                                backgroundPosition: '0 0, 0 1rem, 1rem -1rem, -1rem 0px',
                                borderRadius: '0 8px 8px 0',
                            }
                        }
                    ]}>
                    {Function('"use strict";return (' + traspiledCode + ')')()}
                </Block>
            </Block>                        
            {fullscreen && (
                <Icon
                    shape="oval"
                    background={c => c.lightest.css()}
                    type={t => t.outline.collapse}
                    css={{
                        position: 'fixed',
                        top: '1rem',
                        right: '1rem',
                        zIndex: 9999,
                    }}
                    onClick={onExitFullscreen}
                />
            )}
        </Fragment>
    )
}

export default Preview