import { router } from '@inertiajs/react';
import axios from 'axios';

const http = axios.create({
    headers: {
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
    withXSRFToken: true,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
});

let redirectInProgress = false;

http.interceptors.response.use(
    (response) => response,
    (error) => {
        if (
            error?.response?.status === 401 &&
            !window.location.pathname.startsWith('/admin/login') &&
            !redirectInProgress
        ) {
            redirectInProgress = true;

            router.visit('/admin/login', {
                replace: true,
                onFinish: () => {
                    redirectInProgress = false;
                },
            });
        }

        return Promise.reject(error);
    },
);

export async function ensureCsrfCookie() {
    await http.get('/sanctum/csrf-cookie');
}

export default http;
