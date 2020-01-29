import callProp from '@flow-ui/core/misc/utils/callProp'
import variant from '@flow-ui/core/misc/utils/variant'
import Types from './types'
import fieldStyles from '../../misc/hocs/Field/styles'
import WhaleTypes from '@flow-ui/whale/types'

const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props> = (props, theme) => {
    const { 
        size = 'm', 
        multiselect
    } = props
    
    let color = callProp(props.color, theme.color)
    let backgroundColor = callProp(props.backgroundColor, theme.color)

    const multiselectAdditionalPadding = variant(size, {
        'm': '.25rem',
        'l': '.25rem',
        'xl': '.5rem'
    })

    return {
        ...fieldStyles<Types.Overrides>(props, theme, {
            manyLines: multiselect,
            additionalPadding: multiselect ? multiselectAdditionalPadding : '',
            labelOverlayPosition: 'center',
            overrides: {
                field: (variant) => [
                    variant({
                        open: [{
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                            borderTopRightRadius: theme.radius.narrow,
                            borderTopLeftRadius: theme.radius.narrow,
                        }]
                    })
                ]
            }
        }),

        placeholder: [{
            color: theme.color.light.css(),
            userSelect: 'none',
            cursor: 'pointer',
            padding: multiselectAdditionalPadding,
        }],

        input:[{
            outline: 0,
            padding: 0,
            margin: 0,
            border: 'none',
            backgroundImage: 'none',
            backgroundColor: 'transparent',
            boxShadow: 'none',
            font: 'inherit',
            color: 'inherit',
            cursor: 'inherit',
            flex: 1,
            '&::placeholder': {
                color: theme.color.light.css()
            }
        }],

        options: [{
            display: 'flex',
            flexWrap: 'wrap',
            marginBottom: '-.25rem',
            marginRight: '-.25rem',
            padding: multiselectAdditionalPadding,
            '> *': {
                marginBottom: '.25rem !important',
                marginRight: '.25rem',
            }
        }],

        optionItem: [
            {
                display: 'flex',
                alignItems: 'center',
                borderWidth: '1px',
                height: 'fit-content',
                borderStyle: 'solid',
                borderColor: theme.color.primary.alpha(.5).css(),
                background: theme.color.primary.alpha(.1).css(),
                color: theme.color.primary.css(),
                overflow: 'hidden',
            }
        ],

        optionItemText: [
            {
                minHeight: '100%',
                borderRightWidth: '1px',
                borderRightStyle: 'solid',
                borderRightColor: theme.color.primary.alpha(.5).css(),
                alignText: 'center'
            },
            variant(size, {
                'xs': {
                    padding: '.125rem .25rem',
                    ...theme.typography.text.xs
                },
                's': {
                    padding: '.125rem .25rem',
                    ...theme.typography.text.s,
                },
                'm': {
                    padding: '.125rem .25rem',
                    ...theme.typography.text.m,
                },
                'l': {
                    padding: '.125rem .25rem',
                    ...theme.typography.text.l,
                },
                'xl': {
                    padding: '.125rem .25rem',
                    fontSize: theme.typography.header.xs.fontSize,
                    lineHeight: theme.typography.header.xs.lineHeight,
                }
            }),
        ],

        dropMenu: (variant) => [
            {
                overflow: 'auto',
                maxHeight: '10rem',
                borderStyle: 'solid',
                borderWidth: '1px',
                borderColor: theme.color.lightest.css(),
                borderTop: 'none',
                background: backgroundColor || theme.color.surface.css(),
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
            },
            variant({
                shape: {
                    rounded: [{
                        borderRadius: theme.radius.narrow
                    }],
                    round: [
                        {
                            borderRadius: '4rem'
                        },
                        variant({
                            open: [{
                                borderBottomRightRadius: theme.radius.narrow,
                                borderBottomLeftRadius: theme.radius.narrow,
                                borderTopLeftRadius: 0,
                                borderTopRightRadius: 0
                            }]
                        })
                    ]
                },
                decoration: {
                    'filled': [{
                        borderColor: 'transparent',
                    }],
                    'underline': [{
                        borderColor: 'transparent',
                        paddingLeft: 0,
                        paddingRight: 0,
                    }],
                    'none': [{
                        borderColor: 'transparent',
                    }]
                },
                focus: [{
                    borderColor: theme.color.primary.css(),
                }],
                open: [
                    
                ]
            }),
            {
                borderColor: color
            }
        ],

        dropItem: (variant) =>[
            {
                cursor: 'pointer',
                padding: '0.5rem 0.75rem',
                height: 'fit-content',
                ':hover': {
                    background: theme.color.background.css()
                }
            },
            variant({
                size: theme.typography.text,
                underCursor: [{
                    background: theme.color.primary.css(),
                    color: theme.color.onPrimary.css(),
                    ':hover': {
                        background: theme.color.primary.css()
                    }
                }]
            })
        ],
    }
}

export default styles