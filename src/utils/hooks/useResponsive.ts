import { useMediaQuery } from 'react-responsive'


export const useResponsive =() => {
    const isResponsiveweb = useMediaQuery({ query: '(max-width: 1270px)' })
    const isResponsiveTablet = useMediaQuery({ query: '(max-width: 1070px)' })
    const isResponsiveMobile = useMediaQuery({ query: '(max-width: 820px)' })
    return {isResponsiveTablet, isResponsiveMobile, isResponsiveweb}
}