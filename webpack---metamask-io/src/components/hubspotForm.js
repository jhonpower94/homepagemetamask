import React from 'react'
import PropTypes from 'prop-types'
import ReactHubspotForm from 'react-hubspot-form'
import classnames from 'classnames'
import styled, {
    withTheme
} from 'styled-components'
import Loading from './Loading'

const HubspotForm = props => {
    const {
        portalId,
        formId,
        campaignId,
        title,
        displayTitle,
        width,
        customClass,
        customId,
    } = props

    const hasExternalStyles = customClass ? .includes('external-styles')

    const moveSubmit = () => {
        if (customClass === 'newsletterOnNewsDetail') {
            const hsEmail = document.querySelector(
                '.newsletterOnNewsDetail .hs-email'
            )
            const hsSubmit = document.querySelector(
                '.newsletterOnNewsDetail .hs-submit'
            )
            hsEmail.appendChild(hsSubmit)
        }

        if (customClass ? .includes('newsletterOn')) {
            const hsEmailInput = document.querySelector('.hs-email input')
            if (hsEmailInput) {
                hsEmailInput.setAttribute('placeholder', 'Email address')
            }
        }
        return true
    }

    return ( <
        Wrapper width = {
            width
        }
        className = {
            customClass
        } { ...(customId && {
                id: customId
            })
        } >
        <
        Content > {
            title && displayTitle ? ( <
                Title className = {
                    classnames('popupTitle')
                } > {
                    title
                } < /Title>
            ) : null
        } <
        Form hasExternalStyles = {
            hasExternalStyles
        } >
        <
        ReactHubspotForm portalId = {
            portalId
        }
        formId = {
            formId
        }
        sfdcCampaignId = {
            campaignId
        }
        onReady = {
            moveSubmit
        }
        loading = { < Loading / >
        }
        /> <
        /Form> <
        /Content> <
        /Wrapper>
    )
}

HubspotForm.propTypes = {
    portalId: PropTypes.string.isRequired,
    formId: PropTypes.string.isRequired,
    campaignId: PropTypes.string,
    title: PropTypes.string,
    displayTitle: PropTypes.bool,
}

export default withTheme(HubspotForm)

const Title = styled.h2 `
  display: block;
  margin-bottom: 40px;

  .registerEventForm & {
    margin-bottom: 0;
    font-size: 24px;
  }

  .registerCustodyForm &,
  .accessFireBlockForm & {
    font-size: 24px;
    margin-bottom: 24px;
  }
`

const Wrapper = styled.div `
  display: block;
  max-width: 100%;
  ${({ width }) => (width ? `
width: $ {
    width
};
` : 'min-width: 300px;')}

  &.newsletterOnNewsDetail {
    margin-top: 56px;
    height: 410px;
    position: relative;
  }

  &.newsletterOnSnaps {
    width: 100%;
    max-width: 460px;
    margin: 0 auto;
  }

  &.formMW510 {
    max-width: 510px;
  }

  .registerEventForm &,
  .registerCustodyForm & {
    padding: 20px;
    padding-bottom: 3px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid rgba(51, 51, 51, 0.1);
    box-shadow: -15px 15px 24px rgba(0, 0, 0, 0.05),
      -3px 3px 10px rgba(0, 0, 0, 0.07);
    border-radius: 5px;

    @media (min-width: ${({ theme }) => theme.device.mobile}) {
      padding-top: 40px;
      padding-bottom: 23px;
      padding-left: 55px;
      padding-right: 55px;
    }
  }

  body.dark-mode .registerEventForm &,
  body.dark-mode .registerCustodyForm & {
    background-color: #121212;
  }
`

const Content = styled.div `
  .newsletterOnNewsDetail & {
    background: ${({ theme }) => theme.background.white};
    box-shadow: rgba(0, 0, 0, 0.1) 0px 7px 29px 0px;
    border-radius: 24px;
    padding: 32px;
    position: absolute;
    z-index: 1;
    width: calc(100% - 40px);
    .dark-mode & {
      box-shadow: 0 10px 30px 0 rgba(255, 255, 255, 0.2);
    }
  }
  .accessFireBlockForm & {
    padding: 40px;
    padding-bottom: 3px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid rgba(51, 51, 51, 0.1);
    box-shadow: -15px 15px 24px rgba(0, 0, 0, 0.05),
      -3px 3px 10px rgba(0, 0, 0, 0.07);
    border-radius: 5px;

    body.dark-mode & {
      background-color: #24292e;
    }
  }
`

const Form = styled.div `
  display: block;
  ${({ hasExternalStyles }) =>
    hasExternalStyles &&
    ` &
    form {
        img {
            width: 180 px;
        }
        fieldset {
            border: 0;
            padding: 0;
            margin: 0;
            max - width: 500 px;
        }
        .hs - button {
            font - family: 'Helvetica Neue', Helvetica, Arial, sans - serif;
            margin: 0;
            cursor: pointer;
            display: inline - block;
            font - weight: 700;
            line - height: 12 px;
            position: relative;
            text - align: center;
            transition: all 0.15 s linear;
            background - color: #037dd6;
      border-color: # 037 dd6;
            color: #fff;
            border - radius: 3 px;
            border - style: solid;
            border - width: 1 px;
            font - size: 14 px;
            padding: 12 px 24 px;
            border - radius: 15 px;
            background - clip: padding - box; &
            : hover {
                background - color: #ff8f73;
                border - color: #ff8f73;
            } &
            : focus {
                background - color: #ff8f73;
                border - color: #ff8f73;
            } &
            : active {
                background - color: #e66e50;
                border - color: #e66e50;
            }
        }
        label {
            font - size: 14 px;
            width: 130 px;
            color: #33475b;
      display: block;
      float: none;
      width: auto;
      font-weight: 500;
      line-height: 20px;
      padding-top: 0;
      margin-bottom: 4px;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      .dark-mode & {
        color: # fff;
        }
    }
    .hs - video - form {
        label {
            color: #fff!important;
        }
        .hs - back - button {
                background - color: #fff;
                width: 20 % ;
                height: 38 px;
                margin - right: 10 px;
                border: 1 px solid;
                border - radius: 3 px;
            }
            .hs - button {
                width: 70 % ;
                span {
                    font - size: 15 px;
                }
            }
            .hs - richtext {
                color: #fff!important;
            }
            .legal - consent - container {
                max - height: 180 px!important;
                overflow - y: scroll!important; &
                : after {
                    content: '';
                    display: block;
                    height: 100 px;
                    width: 100 % ;
                }
            }
            .legal - consent - wrapper {
                position: relative;
            }
            .legal - consent - overlay {
                position: absolute;
                pointer - events: none;
                left: 0;
                bottom: 0;
                height: 100 px;
                width: 100 % ;
                background: linear - gradient(
                    to bottom,
                    rgba(255, 255, 255, 0) 0 % ,
                    #292929 100%
        );
      }
    }
    .hs-error-msgs {
      label {
        color: # f2545b; margin - top: 0;
                }
            }
            .hs - input {
                display: inline - block;
                width: 90 % ;
                max - width: 500 px;
                height: 40 px;
                padding: 9 px 10 px;
                font - family: 'Helvetica Neue',
                Helvetica,
                Arial,
                sans - serif;
                font - size: 16 px;
                font - weight: normal;
                line - height: 22 px;
                color: #33475b;
      .dark-mode & {
        color: # 000;
            }
        border: 1 px solid# cbd6e2;
        box - sizing: border - box;
        border - radius: 3 px; &
        : not([type = 'file']) {
                background - color: #f5f8fa;
            } &
            : -moz - placeholder {
                color: #bfbfbf;
            } &
            ::-webkit - input - placeholder {
                color: #bfbfbf;
            }
        option { &
            : disabled {
                color: #bfbfbf;
            }
        }
        input {
            transition: border 0.2 s linear;
        }
        textarea {
            transition: border 0.2 s linear;
        } &
        : focus {
            outline: none;
            border - color: rgba(82, 168, 236, 0.8);
        }
    }
    .hs - input[type = 'checkbox'] {
        cursor: pointer;
        width: auto;
        height: auto;
        padding: 0;
        margin: 3 px 5 px 3 px 0 px;
        line - height: normal;
        border: none;
    }
    .hs - input[type = 'radio'] {
        cursor: pointer;
        width: auto;
        height: auto;
        padding: 0;
        margin: 3 px 5 px 3 px 0 px;
        line - height: normal;
        border: none;
    }
    .hs - input[type = 'file'] {
        padding: initial;
        border: initial;
        line - height: initial;
        box - shadow: none;
    }
select.is - placeholder {
    color: #bfbfbf; &
    : focus {
        color: #33475b;
        .dark-mode & {
          color: # 000;
    }
}
}
textarea.hs - input {
    height: auto;
}
select[multiple].hs - input {
    height: inherit;
}
input.hs - input.error {
    border - color: #c87872; &
    : focus {
        border - color: #b9554d;
    }
}
div.field.error {
    input {
        border - color: #c87872; &
        : focus {
            border - color: #b9554d;
        }
    }
    textarea {
        border - color: #c87872; &
        : focus {
            border - color: #b9554d;
        }
    }
    .chzn - choices {
        border - color: #c87872; &
        : focus {
            border - color: #b9554d;
        }
    }
}
textarea.hs - input.error {
    border - color: #c87872; &
    : focus {
        border - color: #b9554d;
    }
}
select.hs - input.error {
        border - color: #c87872; &
        : focus {
            border - color: #b9554d;
        }
    }
    .actions {
        margin - top: 18 px;
        margin - bottom: 18 px;
        /* padding: 17px 0px; */
    }
    .inputs - list {
        margin: 0 0 5 px;
        width: 100 % ;
        padding - left: 5 px; >
        li {
            display: block;
            padding: 0;
            width: 100 % ;
            padding - top: 0;
            margin - bottom: unset; +
            {
                li {
                    padding - top: 2 px;
                }
            }
        }
        label {
            float: none;
            width: auto;
            padding: 0;
            line - height: 18 px;
            white - space: normal;
            font - weight: normal;
        } &
        : first - child {
            padding - top: 6 px;
        }
    }
ul.no - list {
        list - style: none;
    }
    .field {
        margin - bottom: 18 px;
    }
    .hs - field - desc {
        color: #7c98b6;
      margin: 0px 0px 6px;
      font-size: 11px;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
    .hs-form-required {
      color: red;
    }
    .hs-richtext {
      margin-bottom: 3px;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      line-height: 24px;
      font-size: 14px;
      color: # 33475 b;
        .dark - mode & {
            color: #fff;
        }
        hr {
            margin - left: 0;
            width: 91 % ;
        }
    }
    .hs - dependent - field { >
        div {
            input.hs - input { &
                    : not([type = 'checkbox']) { &
                        : not([type = 'radio']) {
                            width: 90 % ;
                        }
                    }
                }
                .hs - input { &
                    : not([type = 'checkbox']) { &
                        : not([type = 'radio']) {
                            width: 100 % ;
                        }
                    }
                }
        }
    }
    .hs - input {
        max - width: 100 % ;
    }
fieldset {
    max - width: 100 % ; >
    div { &
        : last - of -type {
            .hs - input { &
                : not([type = 'checkbox']) { &
                    : not([type = 'radio']) {
                        width: 100 % ;
                        max - width: 100 % ;
                    }
                }
            }
        }
    }
    input { &
        : not([type = 'image']) { &
            : not([type = 'submit']) { &
                : not([type = 'button']) { &
                    : not([type = 'radio']) { &
                        : not([type = 'checkbox']) { &
                            : not([type = 'file']) {
                                box - sizing: border - box;
                                padding: 0 15 px;
                                min - height: 27 px;
                            }
                        }
                    }
                }
            }
        }
    }
    textarea {
        padding: 10 px 15 px;
    }
} >
div.form - columns - 3 {
    .hs - form - field {
        width: 33.3 % ;
    }
}
fieldset.form - columns - 3 {
        .hs - form - field {
            width: 33.3 % ;
        }
    } >
    div { >
        div { &
            : last - of -type {
                .hs - input { &
                    : not([type = 'checkbox']) { &
                        : not([type = 'radio']) {
                            width: 100 % ;
                            max - width: 100 % ;
                        }
                    }
                }
            }
        }
        input { &
            : not([type = 'image']) { &
                : not([type = 'submit']) { &
                    : not([type = 'button']) { &
                        : not([type = 'radio']) { &
                            : not([type = 'checkbox']) { &
                                : not([type = 'file']) {
                                    box - sizing: border - box;
                                    padding: 0 15 px;
                                    min - height: 27 px;
                                }
                            }
                        }
                    }
                }
            }
        }
        textarea {
            padding: 10 px 15 px;
        }
    }

form.hs - form - rtl {
        .field {
            flex: 0 1 100 % ;
        }
        .hs - input[type = 'checkbox'] {
                margin: 3 px 5 px 3 px 5 px;
            }
            .hs - input[type = 'radio'] {
                margin: 3 px 5 px 3 px 5 px;
            }
        fieldset {
            display: flex;
        }
        fieldset[class ^= 'form-columns-'] {
            .input {
                margin - right: 0 px;
            }
        }
        ul {
            padding: 0 px;
        }
        .legal - consent - container {
                .hs - form - booleancheckbox - display {
                    input {
                        width: auto;
                        float: right;
                    } >
                    span {
                        margin - left: 0 px;
                    }
                }
            }
            .hs - dependent - field {
                display: flex;
                flex: 0 1 100 % ;
                flex - wrap: wrap;
            }
    }
    .email - correction {
        padding - top: 3 px;
        font - size: 12 px;
        font - family: 'Helvetica Neue', Helvetica, Arial, sans - serif;
        a {
            cursor: pointer;
        }
    }
    .email - validation {
        padding - top: 3 px;
        font - size: 12 px;
        font - family: 'Helvetica Neue', Helvetica, Arial, sans - serif;
        a {
            cursor: pointer;
        }
    }
    .hs - form - field {
        input[type = 'text'] {
            border - radius: 15 px;
            background - clip: padding - box;
            padding: 10 px 15 px;
        }
        input[type = 'email'] {
            border - radius: 15 px;
            background - clip: padding - box;
            padding: 10 px 15 px;
        }
        input[type = 'phone'] {
            border - radius: 15 px;
            background - clip: padding - box;
            padding: 10 px 15 px;
        }
        input[type = 'number'] {
            border - radius: 15 px;
            background - clip: padding - box;
            padding: 10 px 15 px;
        }
        input[type = 'tel'] {
            border - radius: 15 px;
            background - clip: padding - box;
            padding: 10 px 15 px;
        }
        input[type = 'date'] {
            border - radius: 15 px;
            background - clip: padding - box;
            padding: 10 px 15 px;
        }
        textarea {
            border - radius: 15 px;
            background - clip: padding - box;
            padding: 10 px 15 px;
        }
        select {
            border - radius: 15 px;
            background - clip: padding - box;
            padding: 10 px 15 px;
        }
    }
    .hs -
    default -font - element {
        font - family: 'Helvetica Neue', Helvetica, Arial, sans - serif;
        line - height: normal;
    }
    .hs - main - font - element {
        font - family: 'Helvetica Neue', Helvetica, Arial, sans - serif;
        line - height: normal;
    }
    .hs - form {
        width: 100 % ;
    }
    .hs - submit { >
        .actions {
            text - align: left;
        }
    }
    .hs - button {
        background: #037dd6;
      border-color: # 037 dd6;
        color: #ffffff;
        font - size: 12 px;
        line - height: 12 px;
        font - family: helvetica;
        white - space: pre - wrap; &
        : hover {
                background: #037dd6;
        border-color: # 037 dd6;
                color: #ffffff;
                font - size: 12 px;
                line - height: 12 px;
                font - family: helvetica; &
                : not(.inactive) {
                    background: #037dd6;
          border-color: # 037 dd6;
                    color: #ffffff;
                    font - size: 12 px;
                    line - height: 12 px;
                    font - family: helvetica;
                }
            } &
            : focus {
                background: #037dd6;
        border-color: # 037 dd6;
                color: #ffffff;
                font - size: 12 px;
                line - height: 12 px;
                font - family: helvetica;
            } &
            : active {
                background: #037dd6;
        border-color: # 037 dd6;
                color: #ffffff;
                font - size: 12 px;
                line - height: 12 px;
                font - family: helvetica; &
                : not(.inactive) { &
                    : not(.link) {
                        background: #037dd6;
            border-color: # 037 dd6;
                        color: #ffffff;
                        font - size: 12 px;
                        line - height: 12 px;
                        font - family: helvetica;
                    }
                }
            }
    }
legend.hs - field - desc {
    font - family: helvetica;
    color: #7c98b6;
      font-size: 11px;
    }
    .hs-form-field {
      label {
        &:not(.hs-error-msg) {
          font-family: helvetica;
          font-size: 13px;
          color: # 33475 b;
    .dark - mode & {
        color: #fff;
    }
}
}
}
.legal - consent - container {
    .hs - richtext {
        font - family: helvetica;
        color: #33475b;
        font-size: 14px;
        .dark-mode & {
          color: # fff;
    }
}
label { &
    : not(.hs - error - msg) {
        font - family: helvetica;
        color: #33475b;
          font-size: 14px;
          .dark-mode & {
            color: # fff;
    }
}
}
}
.hs - main - font - element {
    font - family: helvetica;
}
a {
    text - decoration: underline; &
    : link {
        color: #0000ee;
      }
      &:active {
        color: # 0000e e;
    } &
    : visited {
        color: #551a8b;
        .dark-mode & {
          color: # DA70D6;
    }
} &
: hover {
    color: #551a8b;
      }
    }
    .inputs-list.inline-list {
      li {
        vertical-align: top;
        display: inline-block;
        word-wrap: break-word;
        padding-right: 16px;
        &:after {
          clear: both;
        }
        input {
          float: left;
        }
      }
    }
    .inputs-list.inline-list.inline-list-2 {
      li {
        width: 50%;
        &:nth-child(2n) {
          padding-right: 0;
        }
      }
    }
    .inputs-list.inline-list.inline-list-3 {
      li {
        width: 33%;
        &:nth-child(3n) {
          width: 34%;
          padding-right: 0;
        }
      }
    }
    .hs-richtext {
      word-break: break-word;
    }
    fieldset.form-columns-1 {
      .hs-input {
        width: 95%;
      }
      .input {
        margin-right: 8px;
      }
      input[type= 'checkbox'] {
    width: auto;
}
input[type = 'radio'] {
    width: auto;
}
}
fieldset.form - columns - 2 {
    .hs - form - field {
            width: 50 % ;
            float: left;
        }
        .input {
            margin - right: 8 px;
        }
}
fieldset.form - columns - 3 {
    .hs - form - field {
            width: 32.7 % ;
            float: left;
        }
        .input {
            margin - right: 8 px;
        }
}
label.hs - hidden {
        visibility: hidden;
    }
    .hs - field - desc {
        width: 100 % ;
    }
    .submitted - message.hs - main - font - element {
        font - family: helvetica;
    }
    .submitted - message {
        font - size: 16 px;
        color: #33475b;
      .dark-mode & {
        color: # fff;
    }
}
.fn - date - picker.pika - single {
        z - index: 9999;
        display: block;
        position: relative;
        color: #333;
      background: # fff;
        border: 1 px solid# ccc;
        border - bottom - color: #bbb;
        font - family: Helvetica Neue, Helvetica, Arial, sans - serif;
        * zoom: 1; &
        : after {
            content: ' ';
            display: table;
            clear: both;
        } &
        : before {
            content: ' ';
            display: table;
        }
    }
    .fn - date - picker.pika - single.is - hidden {
        display: none;
    }
    .fn - date - picker.pika - single.is - bound {
        position: absolute;
        box - shadow: 0 5 px 15 px - 5 px rgba(0, 0, 0, 0.5);
    }
    .fn - date - picker {
        .pika - lendar {
                float: left;
                width: 240 px;
                margin: 8 px;
            }
            .pika - title {
                position: relative;
                text - align: center;
                select {
                    cursor: pointer;
                    position: absolute;
                    z - index: 9998;
                    margin: 0;
                    left: 0;
                    top: 5 px;
                    filter: alpha(opacity = 0);
                    opacity: 0;
                }
            }
            .pika - label {
                display: inline - block;
                * display: inline;
                position: relative;
                z - index: 9999;
                overflow: hidden;
                margin: 0;
                padding: 5 px 3 px;
                font - size: 14 px;
                line - height: 20 px;
                font - weight: 700;
                background - color: #fff;
            }
            .pika - next {
                display: block;
                cursor: pointer;
                position: relative;
                outline: none;
                border: 0;
                padding: 0;
                width: 20 px;
                height: 30 px;
                text - indent: 20 px;
                white - space: nowrap;
                overflow: hidden;
                background - color: transparent;
                background - position: 50 % ;
                background - repeat: no - repeat;
                background - size: 75 % 75 % ;
                opacity: 0.5;
                * position: absolute;
                * top: 0;
                float: right;
                background - image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAYAAAAsEj5rAAAAU0lEQVR42u3VOwoAMAgE0dwfAnNjU26bYkBCFGwfiL9VVWoO+BJ4Gf3gtsEKKoFBNTCoCAYVwaAiGNQGMUHMkjGbgjk2mIONuXo0nC8XnCf1JXgArVIZAQh5TKYAAAAASUVORK5CYII=');
                * right: 0; &
                : hover {
                    opacity: 1;
                }
            }
            .pika - prev {
                display: block;
                cursor: pointer;
                position: relative;
                outline: none;
                border: 0;
                padding: 0;
                width: 20 px;
                height: 30 px;
                text - indent: 20 px;
                white - space: nowrap;
                overflow: hidden;
                background - color: transparent;
                background - position: 50 % ;
                background - repeat: no - repeat;
                background - size: 75 % 75 % ;
                opacity: 0.5;
                * position: absolute;
                * top: 0;
                float: left;
                background - image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAYAAAAsEj5rAAAAUklEQVR42u3VMQoAIBADQf8Pgj+OD9hG2CtONJB2ymQkKe0HbwAP0xucDiQWARITIDEBEnMgMQ8S8+AqBIl6kKgHiXqQqAeJepBo/z38J/U0uAHlaBkBl9I4GwAAAABJRU5ErkJggg==');
                * left: 0; &
                : hover {
                    opacity: 1;
                }
            }
            .pika - next.is - disabled {
                cursor: default;
                opacity: 0.2;
            }
            .pika - prev.is - disabled {
                cursor: default;
                opacity: 0.2;
            }
            .is - rtl {
                .pika - next {
                        float: left;
                        background - image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAYAAAAsEj5rAAAAUklEQVR42u3VMQoAIBADQf8Pgj+OD9hG2CtONJB2ymQkKe0HbwAP0xucDiQWARITIDEBEnMgMQ8S8+AqBIl6kKgHiXqQqAeJepBo/z38J/U0uAHlaBkBl9I4GwAAAABJRU5ErkJggg==');
                        * left: 0;
                    }
                    .pika - prev {
                        float: right;
                        background - image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAYAAAAsEj5rAAAAU0lEQVR42u3VOwoAMAgE0dwfAnNjU26bYkBCFGwfiL9VVWoO+BJ4Gf3gtsEKKoFBNTCoCAYVwaAiGNQGMUHMkjGbgjk2mIONuXo0nC8XnCf1JXgArVIZAQh5TKYAAAAASUVORK5CYII=');
                        * right: 0;
                    }
            }
            .pika - select {
                display: inline - block;
                * display: inline;
            }
            .pika - table {
                width: 100 % ;
                border - collapse: collapse;
                border - spacing: 0;
                border: 0;
                td {
                    width: 14.285714285714286 % ;
                    padding: 0;
                }
                th {
                    width: 14.285714285714286 % ;
                    padding: 0;
                    color: #999;
          font-size: 12px;
          line-height: 25px;
          font-weight: 700;
          text-align: center;
        }
        abbr {
          border-bottom: none;
          cursor: help;
        }
      }
      .pika-button {
        cursor: pointer;
        display: block;
        box-sizing: border-box;
        outline: none;
        border: 0;
        margin: 0;
        width: 100%;
        padding: 5px;
        color: # 666;
                    font - size: 12 px;
                    line - height: 15 px;
                    text - align: right;
                    background: #f5f5f5; &
                    : hover {
                        color: #fff!important;
                        background: #ff8000!important;
                        box - shadow: none!important;
                        border - radius: 3 px!important;
                    }
                }
                .is - today {
                    .pika - button {
                        color: #3af;
          font-weight: 700;
        }
      }
      .is-selected {
        .pika-button {
          color: # fff;
                        font - weight: 700;
                        background: #3af;
          box-shadow: inset 0 1px 3px # 178 fe5;
                        border - radius: 3 px;
                    }
                }
                .is - disabled {
                    .pika - button {
                        pointer - events: none;
                        cursor: default;
                        color: #999;
          opacity: 0.3;
        }
      }
      .pika-week {
        font-size: 11px;
        color: # 999;
                    }
                }
                .hs - fieldtype - intl - phone.hs - input {
                    padding: 0;
                    background: none;
                    border: none;
                    height: auto; &
                    : after {
                            clear: both;
                            content: ' ';
                            display: table;
                        }
                        .hs - input {
                            margin - bottom: 0;
                        }
                    input {
                        width: 68 % !important;
                        float: right;
                    }
                    select {
                        float: left;
                        width: 30 % !important;
                    }
                }
                .legal - consent - container {
                    .field.hs - form - field {
                            margin - bottom: 8 px;
                        }
                        .hs - field - desc.checkbox - desc {
                            margin: -12 px 0 0 21 px;
                        }
                        .hs - form - booleancheckbox - display {
                            input {
                                float: left;
                            } >
                            span {
                                display: block;
                                margin - left: 20 px;
                            }
                            p {
                                margin: 0;
                                display: inline;
                            }
                        }
                        .hs - error - msgs {
                            label {
                                color: #f2545b;
                            }
                        }~{
                            .hs_recaptcha {
                                margin - top: 18 px;
                            }
                        }
                }
                .cookie - reset - container {
                    font - size: 14 px;
                    margin - bottom: 10 px;
                    text - align: right;
                }#
                hs - outer - captcha - target {
                    display: none;
                    height: 0;
                    width: 0;
                    *{
                        display: none;
                        height: 0;
                        width: 0;
                    }
                }
                .hubspot - link__container {
                    font - size: 14 px;
                    padding - bottom: 40 px;
                    position: relative;
                    color: #9fa0a2;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    }
    .hubspot-link-text {
      color: # 00 a4bd;
                    font - weight: 400;
                }
                .hubspot - link__container.sproket {
                    color: #9fa0a2;
      .hubspot-link__icon {
        width: 30px;
        margin-right: 0;
        float: left;
        margin-top: -9px;
        margin-left: -5px;
      }
    }
    .hubspot-link {
      color: # 9 fa0a2;
                    text - decoration: none; &
                    : hover {
                        text - decoration: none;
                        .hubspot - link - text {
                            text - decoration: underline;
                        }
                    }
                }
                .hubspot - link__icon {
                    margin - bottom: -1 px;
                    margin - right: 5 px;
                }
                @media(max - width: 400 px) {
                    .email - correction {
                            form {
                                .form - columns - 2 {
                                        .hs - form - field {
                                            float: none;
                                            width: 100 % ;
                                            .hs - input {
                                                width: 90 % ;
                                            }
                                            input[type = 'checkbox'] {
                                                width: 24 px;
                                            }
                                            input[type = 'radio'] {
                                                width: 24 px;
                                            }
                                        }
                                    }
                                    .form - columns - 3 {
                                        .hs - form - field {
                                            float: none;
                                            width: 100 % ;
                                            .hs - input {
                                                width: 90 % ;
                                            }
                                            input[type = 'checkbox'] {
                                                width: 24 px;
                                            }
                                            input[type = 'radio'] {
                                                width: 24 px;
                                            }
                                        }
                                    }
                            }
                        }
                        .email - validation {
                            form {
                                .form - columns - 2 {
                                        .hs - form - field {
                                            float: none;
                                            width: 100 % ;
                                            .hs - input {
                                                width: 90 % ;
                                            }
                                            input[type = 'checkbox'] {
                                                width: 24 px;
                                            }
                                            input[type = 'radio'] {
                                                width: 24 px;
                                            }
                                        }
                                    }
                                    .form - columns - 3 {
                                        .hs - form - field {
                                            float: none;
                                            width: 100 % ;
                                            .hs - input {
                                                width: 90 % ;
                                            }
                                            input[type = 'checkbox'] {
                                                width: 24 px;
                                            }
                                            input[type = 'radio'] {
                                                width: 24 px;
                                            }
                                        }
                                    }
                            }
                        }
                        .hs - phone { >
                            .input { >
                                .hs - fieldtype - intl - phone.hs - input { >
                                    input.hs - input {
                                            width: 68 % !important;
                                        } >
                                        select.hs - input {
                                            width: 30 % !important;
                                        }
                                }
                            }
                        }
                        .hs - input { &
                            : not([type = 'checkbox']) { &
                                : not([type = 'radio']) {
                                    margin - right: 0!important;
                                    width: 100 % !important;
                                }
                            }
                        }
                    fieldset {
                        margin - right: 0!important;
                        width: 100 % !important;
                    }

                    &
                    : not(.hs - video - form) {
                        .form - columns - 2 {
                                .hs - form - field {
                                    float: none;
                                    width: 100 % ;
                                    .hs - input {
                                        width: 95 % ;
                                    }
                                    input[type = 'checkbox'] {
                                        width: auto;
                                    }
                                    input[type = 'radio'] {
                                        width: auto;
                                    }
                                }
                            }
                            .form - columns - 3 {
                                .hs - form - field {
                                    float: none;
                                    width: 100 % ;
                                    .hs - input {
                                        width: 95 % ;
                                    }
                                    input[type = 'checkbox'] {
                                        width: auto;
                                    }
                                    input[type = 'radio'] {
                                        width: auto;
                                    }
                                }
                            }
                    }
                }
                @media(min - device - width: 320 px) and(max - device - width: 480 px) {
                    .email - correction {
                            form {
                                .form - columns - 2 {
                                        .hs - form - field {
                                            float: none;
                                            width: 100 % ;
                                            .hs - input {
                                                width: 90 % ;
                                            }
                                            input[type = 'checkbox'] {
                                                width: 24 px;
                                            }
                                            input[type = 'radio'] {
                                                width: 24 px;
                                            }
                                        }
                                    }
                                    .form - columns - 3 {
                                        .hs - form - field {
                                            float: none;
                                            width: 100 % ;
                                            .hs - input {
                                                width: 90 % ;
                                            }
                                            input[type = 'checkbox'] {
                                                width: 24 px;
                                            }
                                            input[type = 'radio'] {
                                                width: 24 px;
                                            }
                                        }
                                    }
                            }
                        }
                        .email - validation {
                            form {
                                .form - columns - 2 {
                                        .hs - form - field {
                                            float: none;
                                            width: 100 % ;
                                            .hs - input {
                                                width: 90 % ;
                                            }
                                            input[type = 'checkbox'] {
                                                width: 24 px;
                                            }
                                            input[type = 'radio'] {
                                                width: 24 px;
                                            }
                                        }
                                    }
                                    .form - columns - 3 {
                                        .hs - form - field {
                                            float: none;
                                            width: 100 % ;
                                            .hs - input {
                                                width: 90 % ;
                                            }
                                            input[type = 'checkbox'] {
                                                width: 24 px;
                                            }
                                            input[type = 'radio'] {
                                                width: 24 px;
                                            }
                                        }
                                    }
                            }
                        }
                        .hs - input { &
                            : not([type = 'checkbox']) { &
                                : not([type = 'radio']) {
                                    margin - right: 0!important;
                                    width: 100 % !important;
                                }
                            }
                        }
                    fieldset {
                        margin - right: 0!important;
                        width: 100 % !important;
                    } &
                    : not(.hs - video - form) {
                        .form - columns - 2 {
                                .hs - form - field {
                                    float: none;
                                    width: 100 % ;
                                    .hs - input {
                                        width: 95 % ;
                                    }
                                    input[type = 'checkbox'] {
                                        width: auto;
                                    }
                                    input[type = 'radio'] {
                                        width: auto;
                                    }
                                }
                            }
                            .form - columns - 3 {
                                .hs - form - field {
                                    float: none;
                                    width: 100 % ;
                                    .hs - input {
                                        width: 95 % ;
                                    }
                                    input[type = 'checkbox'] {
                                        width: auto;
                                    }
                                    input[type = 'radio'] {
                                        width: auto;
                                    }
                                }
                            }
                    }
                }
                @media(max - device - width: 480 px) and(min - device - width: 320 px) { >
                    .hs - phone { >
                        .input { >
                            .hs - fieldtype - intl - phone.hs - input { >
                                input.hs - input {
                                        width: 68 % !important;
                                    } >
                                    select.hs - input {
                                        width: 30 % !important;
                                    }
                            }
                        }
                    }
                }
            }
        `}
`