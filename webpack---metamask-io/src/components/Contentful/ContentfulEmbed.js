import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
    SectionTitle
} from '../StyledGeneral'
import Embed from '../Embed'
import {
    parseContentfulAssetUrl
} from '../../lib/utils/urlParser'
import withProcessPreviewData from '../../lib/utils/withProcessPreviewData'

const ContentfulEmbed = props => {
        const {
            moduleConfig: {
                embed: {
                    embed
                },
                title,
                displayTitle,
                moduleId,
                previewMode = false,
                layoutType,
                playOnPopup,
                thumbnail,
            },
        } = props
        const thumbnailUrl = parseContentfulAssetUrl(thumbnail, previewMode)
        return ( <
            Wrapper id = {
                moduleId
            }
            layoutType = {
                layoutType
            } > {
                title && displayTitle ? < Title > {
                    title
                } < /Title> : null} <
                Embed
                playOnPopup = {
                    playOnPopup
                }
                html = {
                    previewMode ? props.moduleConfig.embed : embed
                }
                thumbnailUrl = {
                    thumbnailUrl
                }
                /> <
                /Wrapper>
            )
        }

        const parsePreviewData = data => {
            data = data.moduleConfig.previewContent || data.moduleConfig

            const dataUpdate = {
                moduleConfig: {
                    previewMode: true,
                    ...data,
                },
            }
            return dataUpdate
        }

        export default withProcessPreviewData(parsePreviewData)(ContentfulEmbed)

        ContentfulEmbed.propTypes = {
            moduleConfig: PropTypes.shape({
                displayTitle: PropTypes.bool,
                title: PropTypes.string,
                embed: PropTypes.oneOfType([
                    PropTypes.shape({
                        embed: PropTypes.string.isRequired,
                    }),
                    PropTypes.string,
                ]),
                moduleId: PropTypes.string,
                playOnPopup: PropTypes.bool,
            }),
        }

        const Title = styled(SectionTitle)
        `
  text-align: center;
  margin-bottom: 32px;
`

        const Wrapper = styled.div `
  display: block;
  width: 100%;

  ${({ layoutType, theme }) =>
    layoutType === 'horizontal'
      ? `
        @media(min - width: $ {
            theme.device.miniDesktop
        }) {
            display: flex;
            align - items: center;
            $ {
                Title
            } {
                margin - right: 40 px;
            } &
            > * {
                flex: 1;
                min - width: 0;
            }
        }
        `
      : `
        `}
  .embed-mb-20 & {
    margin-bottom: 20px;
  }
`