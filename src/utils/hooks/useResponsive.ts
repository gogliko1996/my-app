import { useMediaQuery } from 'react-responsive'


export const useResponsive =() => {
    const isResponsiveTablet = useMediaQuery({ query: '(max-width: 1070px)' })
    const isResponsiveMobile = useMediaQuery({ query: '(max-width: 820px)' })

    return {isResponsiveTablet, isResponsiveMobile}
}