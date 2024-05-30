import { useNavigate } from "react-router-dom"

export const useNavigation = () => {
    const navigate = useNavigate()

    const goback = () => {
        navigate(-1)
    }

    const navigation = (props: string) => {
        navigate(props)
    }

    return {goback, navigate}
}