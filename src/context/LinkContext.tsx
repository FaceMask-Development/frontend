import { createContext, ReactNode, useState } from "react"

interface LinkContextData {
    hasClickedLink: boolean;
    handleClickLink: () => void;
}

interface LinkContextProps {
    children: ReactNode;
}

export const LinkContext = createContext({} as LinkContextData)

export function LinkProvider({ children }: LinkContextProps) {
    const [hasClickedLink, setHasClickedLink] = useState(false);

    function handleClickLink() {
        setHasClickedLink(true);
        console.log(hasClickedLink)
    }

    return (
        <LinkContext.Provider value={{
            hasClickedLink,
            handleClickLink,
        }}>
            {children}
        </LinkContext.Provider>
    )
}
