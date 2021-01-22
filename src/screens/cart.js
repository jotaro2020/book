import * as React from 'react'
import {Link} from 'components/lib'
import {ListItemList} from 'components/list-item-list'

function CartScreen() {
  return (
    <div style={{marginLeft: '50px'}}>
      <ListItemList
        filterListItems={li => !li.finishDate}
        noFilteredListItems={<p>Пока что кoрзина пуста</p>}
      />
    </div>
  )
}

export {CartScreen}
