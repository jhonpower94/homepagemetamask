import React from 'react'
import styled, {
    withTheme
} from 'styled-components'
import {
    Link
} from 'gatsby'
import lowerCase from 'lodash/lowerCase'
import Context from '../../Context/ContextPage'
const TabHeaderItem = props => {
    const {
        activeId,
        label,
        id,
        typeLayout,
        setActiveStateId,
        isTabParam,
    } = props
    const {
        pagination: paginationContextValue
    } = React.useContext(Context)
    const {
        setPaginationPage
    } = paginationContextValue || {}
    const changeTab = () => {
        setActiveStateId(id)
        if (setPaginationPage) {
            setPaginationPage(1)
        }
    }

    if (isTabParam) {
        return ( <
            Link to = {
                `/news/${encodeURIComponent(lowerCase(label))}/`
            } >
            <
            Item typeLayout = {
                typeLayout
            }
            active = {
                activeId === id
            } > {
                label
            } <
            /Item> <
            /Link>
        )
    }
    return ( <
        Item typeLayout = {
            typeLayout
        }
        active = {
            activeId === id
        }
        onClick = {
            changeTab
        } > {
            label
        } <
        /Item>
    )
}

export default withTheme(TabHeaderItem)

const Item = styled.div `
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  padding: 8px 24px;
  color: ${({ theme }) => theme.primaryColor};
  border: 1px solid ${({ theme }) => theme.primaryColor};

  &:not(:first-child) {
    border-left: 0;
  }

  &:first-child {
    border-top-left-radius: 24px;
    border-bottom-left-radius: 24px;
  }

  &:last-child {
    border-top-right-radius: 24px;
    border-bottom-right-radius: 24px;
  }

  ${({ active, theme }) =>
    active
      ? `
background - color: $ {
    theme.button.primary.bg
};
color: $ {
    theme.button.primary.text
};
`
      : ''}

  ${({ typeLayout, active, theme }) =>
    typeLayout === 'module'
      ? `
border - radius: 999 px!important;
height: 40 px;
border: none!important;
background - color: $ {
    active ? theme.button.primary.bg : 'transparent'
};
color: $ {
    active ? theme.button.primary.text : theme.text.darkGray
};
box - shadow: $ {
    active ? '0 4px 9px rgba(196, 196, 196, 0.1)' : ''
};
min - width: 190 px;
white - space: nowrap;

&
: hover {
    color: $ {
        !active ? theme.text.dark : ''
    };
}

@media(max - width: $ {
    theme.device.miniDesktopMediaMax
}) {
    min - width: 100 px;
}
@media(max - width: $ {
    theme.device.tabletMediaMax
}) {
    padding: 8 px 104 px;
}
@media(max - width: $ {
    theme.device.mobileMediaMax
}) {
    padding: 8 px 12 px;
    width: 100 % ;
    font - size: 14 px;
}
`
      : null}
`