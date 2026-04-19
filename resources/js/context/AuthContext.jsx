import { router } from '@inertiajs/react';
import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';
import http, { ensureCsrfCookie } from '../lib/http';

const AuthContext = createContext(null);

const shouldBootstrapAuth = () => {
    const path = window.location.pathname;

    return (
        path.startsWith('/admin') ||
        path.startsWith('/dashboard') ||
        path.startsWith('/login')
    );
};

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isReady, setIsReady] = useState(false);

    const fetchCurrentUser = useCallback(async () => {
        setIsLoading(true);

        try {
            const { data } = await http.get('/api/auth/user');
            setUser(data?.user ?? null);
        } catch (error) {
            setUser(null);
        } finally {
            setIsLoading(false);
            setIsReady(true);
        }
    }, []);

    useEffect(() => {
        if (!shouldBootstrapAuth()) {
            setIsLoading(false);
            setIsReady(true);
            return;
        }

        fetchCurrentUser();
    }, [fetchCurrentUser]);

    const login = useCallback(async ({ email, password, remember = false }) => {
        await ensureCsrfCookie();
        const { data } = await http.post('/api/auth/login', {
            email,
            password,
            remember,
        });

        setUser(data?.user ?? null);

        return data;
    }, []);

    const logout = useCallback(async () => {
        try {
            await http.post('/api/auth/logout');
        } finally {
            setUser(null);
            router.visit('/admin/login', { replace: true });
        }
    }, []);

    const updateProfile = useCallback(async (payload) => {
        let response;

        if (payload.avatar instanceof File) {
            const formData = new FormData();
            formData.append('_method', 'PUT');

            Object.entries(payload).forEach(([key, value]) => {
                if (value === undefined || value === null) {
                    return;
                }

                formData.append(key, value);
            });

            response = await http.post('/api/auth/user', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
        } else {
            response = await http.put('/api/auth/user', payload);
        }

        setUser(response?.data?.user ?? null);

        return response?.data;
    }, []);

    const hasPermission = useCallback(
        (permission) => Boolean(user?.permissions?.includes(permission)),
        [user],
    );

    const hasRole = useCallback(
        (role) => Boolean(user?.roles?.includes(role)),
        [user],
    );

    const value = useMemo(
        () => ({
            user,
            isLoading,
            isReady,
            isAuthenticated: Boolean(user),
            login,
            logout,
            fetchCurrentUser,
            updateProfile,
            hasPermission,
            hasRole,
        }),
        [
            user,
            isLoading,
            isReady,
            login,
            logout,
            fetchCurrentUser,
            updateProfile,
            hasPermission,
            hasRole,
        ],
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider.');
    }

    return context;
}
