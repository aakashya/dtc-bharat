import { router } from '@inertiajs/react';
import { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function RequireAuth({ children, permission = null }) {
    const { hasPermission, isAuthenticated, isLoading, isReady } = useAuth();

    useEffect(() => {
        if (!isLoading && isReady && !isAuthenticated) {
            router.visit('/admin/login', { replace: true });
        }
    }, [isAuthenticated, isLoading, isReady]);

    if (!isReady || isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-50">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-brand/20 border-t-brand" />
            </div>
        );
    }

    if (!isAuthenticated) {
        return null;
    }

    if (permission && !hasPermission(permission)) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
                <div className="max-w-md rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
                    <h2 className="mb-3 text-2xl font-display font-bold text-corporate-blue">Access Restricted</h2>
                    <p className="text-sm text-slate-500">
                        Your account does not currently have permission to access this module.
                    </p>
                </div>
            </div>
        );
    }

    return children;
}
