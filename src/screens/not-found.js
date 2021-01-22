/** @jsx jsx */
import {jsx} from '@emotion/core'

import {Link} from 'components/lib'

function NotFoundScreen() {
  return (
    <div
      css={{
        height: '100%',
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>
        Похоже вы заблудились. <Link to="/">Перейти на главную</Link>
      </div>
    </div>
  )
}

export {NotFoundScreen}
