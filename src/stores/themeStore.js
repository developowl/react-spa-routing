import { create } from 'zustand';

const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme === 'dark' ? 'dark' : 'light';
    }
    return 'light';
};

const useThemeStore = create((set) => ({
    theme: getInitialTheme(),

    toggleTheme: () => {
        set((state) => {
            const newTheme = state.theme === 'light' ? 'dark' : 'light';

            if (typeof window !== 'undefined' && window.localStorage) {
                localStorage.setItem('theme', newTheme);
            }
            return { theme: newTheme };
        });
    },
}));

export default useThemeStore;
