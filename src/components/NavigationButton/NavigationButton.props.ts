export interface NavigationButtonProps {
    options: string[] | [] 
    getTitle?: (option: any) => void;
}