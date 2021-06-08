import { createContext, ReactNode, useState } from 'react';

interface LinkContextData {
  hasClickedLink: boolean;
  handleClickLink: () => void;
}

interface LinkContextProps {
  children: ReactNode;
}

export const LinkContext = createContext({} as LinkContextData);

export function LinkProvider({ children }: LinkContextProps): JSX.Element {
  const [hasClickedLink, setHasClickedLink] = useState(false);
  const handleClickLink = (): void => setHasClickedLink(!hasClickedLink);

  return (
    <LinkContext.Provider
      value={{
        hasClickedLink,
        handleClickLink,
      }}
    >
      {children}
    </LinkContext.Provider>
  );
}
