export function useMDXComponents(components) {
    return {
        h1: ({ children }) => <h1 className="px-10 text-2xl">{children}</h1>,
        ...components,
    }
}
