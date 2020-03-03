import React from 'react';
/**
 * @type {React.Context<{setTheme: (theme) => void}>}
 */
const layoutContext = React.createContext({ setTheme: () => {} });

export default layoutContext;
