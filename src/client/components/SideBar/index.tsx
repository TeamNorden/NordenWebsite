import { BsGear, BsHouse, BsMoon, BsNewspaper, BsSun } from 'react-icons/bs'
import { Box, Divider, Image, Tooltip, useMantineColorScheme } from '@mantine/core'
import Link from 'next/link'
import { User } from '~client/types/global'
import { CSSProperties } from 'react'

const ThemeIcon = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const handleMode = () => toggleColorScheme()
  return <span onClick={handleMode}>{colorScheme === 'dark' ? <BsSun size="25" /> : <BsMoon size="25" />}</span>
}

const SideBarIcon = ({
  icon,
  href,
  tooltip,
  style,
}: {
  icon: any
  href?: string | undefined
  tooltip?: string | undefined
  style?: CSSProperties | undefined
}) => {
  const { colorScheme } = useMantineColorScheme()
  return href ? (
    <Link href={href}>
      <Box component={'a'}>
        {tooltip ? (
          <Tooltip
            className={'sidebar-icon group"'}
            position="right"
            placement="center"
            gutter={25}
            label={tooltip}
            style={style || {}}
            color={colorScheme === 'dark' ? 'dark' : 'gray'}
          >
            {icon}
          </Tooltip>
        ) : (
          <div className="sidebar-icon group" style={style || {}}>
            {icon}
          </div>
        )}
      </Box>
    </Link>
  ) : tooltip ? (
    <Tooltip
      className={'sidebar-icon group"'}
      position="right"
      placement="center"
      gutter={25}
      label={tooltip}
      color={colorScheme === 'dark' ? 'dark' : 'gray'}
      style={style || {}}
    >
      {icon}
    </Tooltip>
  ) : (
    <div className="sidebar-icon group" style={style || {}}>
      {icon}
    </div>
  )
}

const SideBar = ({ user }: { user?: User | undefined }) => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg"
    >
      <SideBarIcon icon={<BsHouse size="25" />} href={'/'} tooltip={'Home'} />

      <SideBarIcon icon={<BsNewspaper size="25" />} href={'/docs'} tooltip={'Docs'} />

      <SideBarIcon icon={<BsGear size="25" />} href={'/dashboard'} tooltip={'Dashboard'} />

      <Divider className={'sidebar-hr'} orientation={'horizontal'} />

      <SideBarIcon icon={<ThemeIcon />} tooltip={'Change Theme'} />

      {user && (
        <SideBarIcon
          style={{
            marginTop: 'auto',
          }}
          icon={<Image src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`} radius={1000} />}
          tooltip={user.username}
        />
      )}
    </div>
  )
}

export default SideBar
