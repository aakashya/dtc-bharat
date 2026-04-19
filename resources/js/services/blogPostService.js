import http from '../lib/http';

const toFormData = (payload, includeMethod = null) => {
    const formData = new FormData();

    if (includeMethod) {
        formData.append('_method', includeMethod);
    }

    Object.entries(payload).forEach(([key, value]) => {
        if (value === undefined || value === null) {
            return;
        }

        if (key === 'content') {
            formData.append('content', JSON.stringify(value));
            return;
        }

        if (typeof value === 'boolean') {
            formData.append(key, value ? '1' : '0');
            return;
        }

        formData.append(key, value);
    });

    return formData;
};

export async function fetchBlogPosts(status = '') {
    const { data } = await http.get('/api/cms/blog-posts', {
        params: status ? { status } : {},
    });

    return {
        posts: data?.posts ?? [],
        counts: data?.counts ?? {
            draft: 0,
            published: 0,
            archived: 0,
        },
    };
}

export async function createBlogPost(payload) {
    const data = toFormData(payload);
    const response = await http.post('/api/cms/blog-posts', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });

    return response?.data;
}

export async function updateBlogPost(id, payload) {
    const data = toFormData(payload, 'PUT');
    const response = await http.post(`/api/cms/blog-posts/${id}`, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });

    return response?.data;
}

export async function updateBlogPostStatus(id, status) {
    const response = await http.patch(`/api/cms/blog-posts/${id}/status`, { status });

    return response?.data;
}

export async function deleteBlogPost(id) {
    const response = await http.delete(`/api/cms/blog-posts/${id}`);

    return response?.data;
}
