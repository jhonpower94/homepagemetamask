import React from 'react'
import PropTypes from 'prop-types'
import ContentWrapper from '../ContentWrapper'
import styled from 'styled-components'
import {
    useLocation
} from '@reach/router'
import {
    contentfulModuleToComponent
} from '../../lib/utils/moduleToComponent'
import classnames from 'classnames'
import {
    SectionTitle,
    Section,
    EyebrowStyle
} from '../StyledGeneral'
import {
    parseContentfulAssetUrl
} from '../../lib/utils/urlParser'
import TabWrapper from '../Tab/TabWrapper'
import withProcessPreviewData from '../../lib/utils/withProcessPreviewData'
import ParseMD from '../ParseMD'

const ContentfulModuleContainer = props => {
        const {
            moduleConfig: {
                headline,
                description,
                backgroundColor,
                backgroundImage,
                backgroundSize,
                paddingTop,
                displayHeadline,
                headlineAlignCenter,
                contentAlignCenter,
                headlineMarginTop0,
                noPaddingBottom,
                modules,
                sectionPadding,
                modulesMargin,
                previewMode = false,
                isTab,
                customClass,
                eyebrow,
                sideImage,
                showLeftArrow,
                iconConfig,
            },
        } = props

        const {
            pathname
        } = useLocation()
        const {
            childMarkdownRemark: {
                html
            } = {}
        } = description || {}
        const bgUrl = parseContentfulAssetUrl(backgroundImage, previewMode)
        const sideImageUrl = parseContentfulAssetUrl(sideImage, previewMode)
        const htmlData = previewMode ? description : html
        const isCategoryTab = customClass === 'newsCategoriesTab' && isTab
        const isSecurityPage = pathname === '/security/'
        const tabs =
            isTab && modules && modules.length ?
            modules.map(item => ({
                label: item.title,
                id: previewMode ? item.title : item.contentful_id,
                content: ( <
                    TabContent > {
                        contentfulModuleToComponent({
                            ...item,
                            previewMode,
                        })
                    } <
                    /TabContent>
                ),
            })) :
            null

        return ( <
            Container sectionPadding = {
                sectionPadding
            }
            bgUrl = {
                bgUrl
            }
            backgroundSize = {
                backgroundSize
            }
            className = {
                classnames({
                    noPaddingBottom: noPaddingBottom,
                    [customClass]: customClass,
                    [`bg-${backgroundColor}`]: backgroundColor,
                })
            } >
            {
                bgUrl ? ( <
                    BackgroundSection backgroundSize = {
                        backgroundSize
                    } >
                    <
                    img src = {
                        bgUrl
                    }
                    alt = "" / >
                    <
                    /BackgroundSection>
                ) : null
            } <
            ContentWrapper customClass = {
                customClass
            } >
            <
            Inner hasSideImage = {!!sideImageUrl
            } >
            <
            MainContent > {
                (headline && displayHeadline) || htmlData || eyebrow ? ( <
                    ContentInfo paddingTop = {
                        paddingTop
                    } > {
                        eyebrow ? < EyebrowStyle > {
                            eyebrow
                        } < /EyebrowStyle> : null} {
                            headline && displayHeadline ? ( <
                                Title headlineMarginTop0 = {
                                    headlineMarginTop0
                                }
                                className = {
                                    classnames({
                                        'txt-center': headlineAlignCenter,
                                    })
                                }
                                dangerouslySetInnerHTML = {
                                    {
                                        __html: headline
                                    }
                                }
                                />
                            ) : null
                        } {
                            htmlData ? ( <
                                > {
                                    previewMode || isSecurityPage ? ( <
                                        SubInfo className = {
                                            classnames({
                                                'txt-center': contentAlignCenter,
                                            })
                                        } >
                                        <
                                        ParseMD > {
                                            htmlData
                                        } < /ParseMD> <
                                        /SubInfo>
                                    ) : ( <
                                        SubInfo className = {
                                            classnames({
                                                'txt-center': contentAlignCenter,
                                            })
                                        }
                                        dangerouslySetInnerHTML = {
                                            {
                                                __html: htmlData
                                            }
                                        }
                                        />
                                    )
                                } <
                                />
                            ) : null
                        } <
                        /ContentInfo>
                    ): null
                } {
                    tabs ? ( <
                        TabWrapper tabs = {
                            tabs
                        }
                        typeLayout = {
                            'module'
                        }
                        activeTabDefault = {
                            previewMode ? modules[0].title : modules[0].contentful_id
                        }
                        isTabParam = {
                            isCategoryTab
                        } >
                        < /TabWrapper>
                    ) : null
                } {
                    !isTab && modules && modules.length && ( <
                        Modules contentAlignCenter = {
                            contentAlignCenter
                        }
                        modulesMargin = {
                            modulesMargin
                        } >
                        {
                            modules.map(m =>
                                contentfulModuleToComponent({
                                    ...m,
                                    previewMode,
                                    hasModuleContainer: true,
                                    containerBgColor: backgroundColor,
                                    color: ['dark'].includes(backgroundColor) ?
                                        'white' :
                                        'black',
                                    showLeftArrow,
                                    iconConfig,
                                })
                            )
                        } <
                        /Modules>
                    )
                } <
                /MainContent> {
                    sideImageUrl ? ( <
                        SideImage sectionPadding = {
                            sectionPadding
                        } >
                        <
                        img src = {
                            sideImageUrl
                        }
                        alt = "" / >
                        <
                        /SideImage>
                    ) : null
                } <
                /Inner> <
                /ContentWrapper> <
                /Container>
            )
        }

        const parsePreviewData = data => {
            data = data.moduleConfig.previewContent || data.moduleConfig
            const {
                modulesCollection
            } = data

            const dataUpdate = {
                moduleConfig: {
                    previewMode: true,
                    modules: modulesCollection ? .items,
                    ...data,
                },
            }
            return dataUpdate
        }

        export default withProcessPreviewData(parsePreviewData)(
            ContentfulModuleContainer
        )

        ContentfulModuleContainer.propTypes = {
            moduleConfig: PropTypes.shape({
                title: PropTypes.string,
                description: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
                paddingTop: PropTypes.string,
                backgroundColor: PropTypes.string,
                backgroundImage: PropTypes.object,
                headlineAlignCenter: PropTypes.bool,
                contentAlignCenter: PropTypes.bool,
                headlineMarginTop0: PropTypes.bool,
                displayHeadline: PropTypes.bool,
                noPaddingBottom: PropTypes.bool,
            }),
        }

        const MainContent = styled.div `
  display: block;

  .registerEventForm & {
    display: flex;
    flex-direction: column-reverse;
  }
`

        const Inner = styled.div `
  display: block;
  ${({ hasSideImage, theme }) =>
    hasSideImage
      ? `
        max - width: 100 % ;

        @media(max - width: $ {
            theme.device.miniDesktopMediaMax
        }) {
            max - width: 728 px;
        }

        @media(min - width: $ {
            theme.device.miniDesktop
        }) and(max - width: $ {
            theme.device.twoKResolutionMax
        }) {
            display: flex;

            $ {
                MainContent
            } {
                flex: 1;
                min - width: 0;
            }
        }
        `
      : `
        `}
`

        const SideImage = styled.div `
  display: block;
  margin-top: 40px;
  img {
    filter: drop-shadow(-15px 15px 24px rgba(0, 0, 0, 0.05))
      drop-shadow(-3px 3px 10px rgba(0, 0, 0, 0.07));
    border-radius: 5px;
  }
  width: 100%;

  @media (min-width: ${({ theme }) =>
      theme.device.miniDesktop}) and (max-width: ${({ theme }) =>
      theme.device.twoKResolutionMax}) {
    margin-top: 0;
    width: 33.33%;

    .sideImageOverflow & {
      min-width: 500px;
      width: 48%;
      margin-left: 40px;
      ${({ sectionPadding }) =>
        sectionPadding
          ? `
        margin - top: calc(0 px - ($ {
            sectionPadding
        } + 40 px));
        `
          : `
        `}
    }

    .sideImageOverflowRight & {
      min-width: 500px;
      width: 48%;
      margin-left: 40px;
    }
  }
`

        const BackgroundSection = styled.div `
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: -1;

  img {
    width: 100%;
  }
  ${({ backgroundSize }) =>
    backgroundSize === 'contain'
      ? `
        img {
            width: 100 % ;
            height: auto;
        }
        `
      : `
        bottom: 0;
        img {
            width: 100 % ;
            height: 100 % ;
            object - fit: cover;
        }
        `}
`

        const Container = styled(Section)
        `
  position: relative;
  
  ${({ bgUrl }) =>
    bgUrl
      ? `
        z - index: 3;
        `
      : ''}

  @media (max-width: ${({ theme }) => theme.device.tabletMediaMax}) {
    &.mobileSectionBottom0 {
      padding-bottom: 0;
    }
  }
`

        const Title = styled(SectionTitle)
        `
  display: block;
  margin-bottom: 20px;

  ${({ headlineMarginTop0 }) => (headlineMarginTop0 ? 'margin-top: 0;' : `
        `)}

  .storiesOnNewsDetail & {
    font-size: 40px;
    line-height: 56px;
    @media (max-width: ${({ theme }) => theme.device.tabletMediaMax}) {
      font-size: 30px;
      line-height: 36px;
    }
    @media (max-width: ${({ theme }) => theme.device.mobileMediaMax}) {
      font-size: 25px;
      line-height: 30px;
    }
  }

  .registerCustodyForm & {
    margin-top: 0;
    margin-bottom: 16px;
  }
`

        const Modules = styled.div `
  display: block;
  .storiesOnNewsDetail & {
    @media (min-width: ${({ theme }) => theme.device.miniDesktop}) {
      padding-top: 40px;
      position: relative;
    }
  }
  ${({ contentAlignCenter }) =>
    contentAlignCenter
      ? `
        display: flex;
        flex - direction: column;
        align - items: center;
        `
      : `
        `}

  > * {
    &:not(:last-child) {
      margin-bottom: ${({ modulesMargin }) => modulesMargin || '40px'};
      @media (max-width: ${({ theme }) => theme.device.tabletMediaMax}) {
        .mobileCardGridModulesGap12 & {
          margin-bottom: 12px !important;
        }
      }
    }
  }

  > .ctaModuleContainer {
    padding: 22px;
    margin-bottom: 0;
  }
`

        const ContentInfo = styled.div `
  margin-bottom: 40px;

  .contentInfoDesktopMb12 & {
    @media (min-width: ${({ theme }) => theme.device.miniDesktop}) {
      margin-bottom: 12px;
    }
  }

  & > *:last-child {
    margin-bottom: 0 !important;
  }
  ${({ paddingTop }) =>
    paddingTop
      ? `
        padding - top: $ {
            paddingTop
        };
        `
      : ''}

  .contentInfoBottom0 & {
    margin-bottom: 0;
  }

  .contentInfoBottom27 & {
    margin-bottom: 27px;
  }

  .contentInfoBottom35 & {
    margin-bottom: 35px;
  }

  @media (max-width: ${({ theme }) => theme.device.mobileMediaMax}) {
    margin-bottom: 24px;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.device.tabletMediaMax}) {
    padding-top: 0;
    .storiesOnNewsDetail & {
      padding-top: 40px;
    }
  }

  .registerEventForm & {
    width: 625px;
    max-width: 100%;
    margin: 0 auto;
    padding-top: 32px;
    font-size: 13px;
    line-height: 150%;
    letter-spacing: 0.2px;
    & p {
      margin-bottom: 0;
    }
  }
  .registerCustodyForm & {
    width: 625px;
    max-width: 100%;
    margin: 0 auto;
    padding-top: 0;
  }
`

        const SubInfo = styled.div `
  display: block;

  .storiesOnNewsDetail & {
    text-align: center;
    color: ${({ theme }) => theme.text.default};
  }

  #reportBugFn {
    cursor: pointer;
    color: #2196f3;
  }

  .registerCustodyForm & {
    margin-bottom: 3.25rem !important;
  }
`

        const TabContent = styled.div `
  @media (min-width: ${({ theme }) => theme.device.tablet}) {
    padding: 0 48px;

    .newsCategoriesTab & {
      padding: 0;
    }
  }
`