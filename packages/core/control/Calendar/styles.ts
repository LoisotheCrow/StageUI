import WhaleTypes from '@flow-ui/whale/types'
import Types from './types'

const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props> = (props, theme) => {

    return {
        dateGrind: [{
            position: 'relative',
            color: theme.color.onSurface.css(),
        }],

        weekDay: [{
            userSelect: 'none',
            ...theme.typography.text.m,
            marginTop: '0.25rem',
            marginBottom: '0.5rem',
            fontWeight: 400,
        }],

        title: [{
            color: theme.color.onSurface.css(),
            padding: '0.25rem'
        }],

        /**
         * Styles for day/month/year squire
         */
        gridBlock: (variant) => [
            {
                transition: 'all 0.2s',
                fontWeight: 400,
                minWidth: '2rem',
                height: '2rem',
                cursor: 'pointer',
                margin:'0.125rem',
                opacity: 1,
                background: theme.color.background.css(),
                borderWidth: theme.assets.border.width,
                borderStyle: theme.assets.border.style,
                borderColor: theme.color.surface.css(),
                borderRadius: theme.radius.narrow,
                color: theme.color.hardest.css(),
                userSelect: 'none',
                ...theme.typography.text.l,
                ':hover': {
                    background: theme.color.lightest.css()
                }
            },
            variant({
                isCurrent: [{
                    borderColor: theme.color.primary.css()
                }],
                isDisabled: [{
                    opacity: 0.3,
                    ':hover': {
                        background: theme.color.background.css()
                    }
                }], 
                isCurrentMonth: [{
                    color: theme.color.onSurface.css(),
                    background: theme.color.surface.css()
                }],
                isActive: [{
                    background: theme.color.primary.css(),
                    color: theme.color.onPrimary.css(),
                    ':hover': {
                        background: theme.color.primary.css()
                    }
                }], 
            })
        ],
    }
}

export default styles