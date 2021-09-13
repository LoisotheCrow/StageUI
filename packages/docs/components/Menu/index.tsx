import React, { useState } from 'react'
import { Block, Button, Flexbox, Link, Text, useTheme } from '@stage-ui/core'
import { Brush, Github, Menu as Burger } from '@stage-ui/icons'
import ButtonTypes from '@stage-ui/core/control/Button/types'
import { panel } from '@stage-ui/docs/components/Themer/src/ThemeConfigurator'
import ThemeSwitcher from './ThemeSwitcher'
import { CustomPageProps } from '../../utils/core'

type MenuItemProps = ButtonTypes.Props & {
  active: boolean
}
const MenuItem = (props: MenuItemProps & { mobile?: boolean }) => {
  const { active, ...buttomProps } = props
  return (
    <Button
      p="0"
      mr="m"
      size="xl"
      decoration="text"
      color={
        // eslint-disable-next-line no-nested-ternary
        props.active ? (props.mobile ? 'surface' : 'onSurface') : props.mobile ? 'hardest' : 'light'
      }
      overrides={{
        container: {
          transition: 'all 0.125s',
          fontWeight: 'bold',
          background: 'none !important',
        },
      }}
      {...buttomProps}
    />
  )
}

const MenuItems = (props: CustomPageProps & { onCloseMobileMenu?: () => void }) => {
  return (
    <>
      <MenuItem
        mobile={!!props.onCloseMobileMenu}
        label="Getting started"
        active={!!/\/getting-started/.exec(props.path)}
        onClick={() => {
          props.onCloseMobileMenu?.()
          props.setPath('/getting-started')
        }}
      />
      <MenuItem
        mobile={!!props.onCloseMobileMenu}
        label="Props"
        active={!!/\/props/.exec(props.path)}
        onClick={() => {
          props.onCloseMobileMenu?.()
          props.setPath('/props')
        }}
      />
      <MenuItem
        mobile={!!props.onCloseMobileMenu}
        label="Overrides"
        active={!!/\/overrides/.exec(props.path)}
        onClick={() => {
          props.onCloseMobileMenu?.()
          props.setPath('/overrides')
        }}
      />
      <MenuItem
        mobile={!!props.onCloseMobileMenu}
        label="Theming"
        active={!!/\/theming/.exec(props.path)}
        onClick={() => {
          props.onCloseMobileMenu?.()
          props.setPath('/theming')
        }}
      />
      <MenuItem
        mobile={!!props.onCloseMobileMenu}
        label="Icons"
        active={!!/\/icons/.exec(props.path)}
        onClick={() => {
          props.onCloseMobileMenu?.()
          props.setPath('/icons')
        }}
      />
      <MenuItem
        mobile={!!props.onCloseMobileMenu}
        label="Components"
        active={!!/\/components/.exec(props.path)}
        onClick={() => {
          props.onCloseMobileMenu?.()
          props.setPath('/components')
        }}
      />
    </>
  )
}
const Menu = (props: CustomPageProps) => {
  const landingPage = props.path === '/'
  const theme = useTheme()
  const [mobileMenu, setMobileMenu] = useState(false)
  if (landingPage) {
    return null
  }

  return (
    <Flexbox w="100%" column pb="xl">
      <Flexbox justifyContent="space-between" alignItems="center">
        {/* <Block mr="xl">
          <Text size="m" weight={800} onClick={() => {
            props.onCloseMobileMenu?.()
            props.setPath('/')}>
            {props.config.nam
            }e}
          </Text>
        </Block> */}
        <Flexbox flex={1} display={['flex', 'flex', 'none']}>
          <MenuItems {...props} />
        </Flexbox>
        <Flexbox>
          <ThemeSwitcher
            themes={props.themes}
            currentTheme={props.theme}
            setTheme={props.setTheme}
          />
          <Brush
            onClick={() => {
              panel(theme, props.setTheme, {
                boxShadow: '0 -2rem 10rem rgba(0,0,0,0.2)',
                border: 0,
              })
            }}
            style={{ display: 'block' }}
            size="1.5rem"
            ml="1rem"
            color="primary"
          />
          {props.config.git && (
            <Link target="_blank" href={props.config.git} ml="1rem">
              <Github size="1.5rem" />
            </Link>
          )}
        </Flexbox>
        <Flexbox display={['none', 'none', 'flex']} css={{ zIndex: 101 }}>
          <Burger
            size="1.5rem"
            shape="circle"
            backgroundColor="onSurface"
            color="surface"
            onClick={() => {
              setMobileMenu(!mobileMenu)
            }}
          />
        </Flexbox>
        <Block
          position="fixed"
          p="xl"
          backgroundColor={theme.color.onSurface}
          css={{
            width: '100vw',
            height: '100vh',
            top: 0,
            left: 0,
            zIndex: 100,
            visibility: mobileMenu ? 'visible' : 'hidden',
            opacity: mobileMenu ? '1' : '0',
            transform: mobileMenu ? 'scale(1)' : 'scale(1.05)',
            transition: 'all 0.125s ease-in-out;',
          }}
        >
          <MenuItems
            {...props}
            onCloseMobileMenu={() => {
              setMobileMenu(false)
            }}
          />
        </Block>
      </Flexbox>
    </Flexbox>
  )
}

export default Menu
