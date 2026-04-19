import { Head } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    Briefcase,
    Camera,
    Car,
    Check,
    ChevronRight,
    ChevronDown,
    Edit,
    FileText,
    LayoutDashboard,
    Loader2,
    LogOut,
    Mail,
    Phone,
    Plus,
    Save,
    ShieldCheck,
    Trash2,
    User,
    Users,
    X,
} from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import RequireAuth from '../../Components/Auth/RequireAuth';
import { useAuth } from '../../context/AuthContext';
import {
    createBlogPost,
    deleteBlogPost,
    fetchBlogPosts,
    updateBlogPost,
    updateBlogPostStatus,
} from '../../services/blogPostService';
import '../Websites/Website6/website6.css';

const BLOG_CATEGORIES = [
    'All',
    'EV Mobility',
    'Corporate Travel',
    'Fleet Management',
    'Women Safety',
    'Operations',
    'Technology',
];

const STATUS_OPTIONS = [
    { value: 'draft', label: 'Draft' },
    { value: 'published', label: 'Published' },
    { value: 'archived', label: 'Archived' },
];

const STATUS_FILTERS = [
    { value: 'all', label: 'All' },
    { value: 'draft', label: 'Draft' },
    { value: 'published', label: 'Published' },
    { value: 'archived', label: 'Archived' },
];

const EMPTY_CONTENT = { heading: '', blocks: [] };

const createEmptyPost = () => ({
    title: '',
    excerpt: '',
    category: 'EV Mobility',
    status: 'draft',
    image: '',
    imageFile: null,
    removeFeaturedImage: false,
    content: { ...EMPTY_CONTENT },
});

const formatRole = (roles = []) => {
    if (!roles?.length) {
        return 'Admin';
    }

    return roles[0]
        .split('_')
        .map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
        .join(' ');
};

const formatDate = (dateString) => {
    if (!dateString) {
        return 'N/A';
    }

    const value = new Date(dateString);
    if (Number.isNaN(value.getTime())) {
        return 'N/A';
    }

    return value.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
};

const statusBadgeClass = (status) => {
    if (status === 'published') {
        return 'bg-emerald-100 text-emerald-700';
    }

    if (status === 'archived') {
        return 'bg-slate-200 text-slate-700';
    }

    return 'bg-amber-100 text-amber-700';
};

const mapApiPostToUiPost = (post) => ({
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    category: post.category || 'General',
    image: post.featured_image_url || 'https://picsum.photos/seed/dtc-blog/600/400',
    content: post.content || { ...EMPTY_CONTENT },
    status: post.status || 'draft',
    date: formatDate(post.published_at || post.created_at),
    readTime: '5 min read',
});

function CustomSelect({ value, options, onChange, compact = false }) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);
    const selectedOption = options.find((option) => option.value === value) || options[0];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!containerRef.current?.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={containerRef} className={`relative ${compact ? 'min-w-[118px]' : 'w-full'}`}>
            <button
                type="button"
                onClick={() => setIsOpen((previous) => !previous)}
                className={`flex w-full items-center border bg-white text-left font-semibold text-corporate-blue shadow-sm transition-all hover:border-brand/40 ${
                    compact
                        ? 'justify-between rounded-xl border-slate-200 px-2.5 py-2 text-xs uppercase tracking-wider'
                        : 'rounded-2xl border-slate-200 px-6 py-4 text-sm'
                }`}
            >
                <span className={`${compact ? 'pr-1' : 'pr-3'} truncate`}>{selectedOption?.label || ''}</span>
                <ChevronDown
                    size={compact ? 14 : 18}
                    className={`shrink-0 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {isOpen ? (
                <div
                    className={`absolute z-20 mt-2 w-full overflow-hidden border border-slate-200 bg-white shadow-xl ${
                        compact ? 'right-0 rounded-2xl' : 'rounded-3xl'
                    }`}
                >
                    {options.map((option) => {
                        const isActive = option.value === value;

                        return (
                            <button
                                key={option.value}
                                type="button"
                                onClick={() => {
                                    onChange(option.value);
                                    setIsOpen(false);
                                }}
                                className={`flex w-full items-center justify-between px-4 py-3 text-left transition-all ${
                                    isActive
                                        ? 'bg-brand/10 font-bold text-brand'
                                        : 'text-slate-600 hover:bg-slate-50'
                                } ${compact ? 'text-xs uppercase tracking-wider' : 'text-sm'}`}
                            >
                                <span>{option.label}</span>
                                {isActive ? <Check size={14} /> : null}
                            </button>
                        );
                    })}
                </div>
            ) : null}
        </div>
    );
}

export default function DashboardPage() {
    const {
        hasPermission,
        logout,
        updateProfile,
        user,
    } = useAuth();
    const [activeTab, setActiveTab] = useState('blogs');
    const [posts, setPosts] = useState([]);
    const [postCounts, setPostCounts] = useState({
        all: 0,
        draft: 0,
        published: 0,
        archived: 0,
    });
    const [statusFilter, setStatusFilter] = useState('all');
    const [isLoadingPosts, setIsLoadingPosts] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [isSavingPost, setIsSavingPost] = useState(false);
    const [isDeletingPostId, setIsDeletingPostId] = useState(null);
    const [currentPost, setCurrentPost] = useState(null);
    const [formError, setFormError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const [isEditingProfile, setIsEditingProfile] = useState(false);
    const [isSavingProfile, setIsSavingProfile] = useState(false);
    const [profileError, setProfileError] = useState('');
    const [profileSuccess, setProfileSuccess] = useState('');
    const [tempUser, setTempUser] = useState(null);
    const [tempAvatarFile, setTempAvatarFile] = useState(null);

    const dashboardUser = useMemo(() => ({
        name: user?.name || 'Admin',
        email: user?.email || '',
        role: formatRole(user?.roles),
        phone: user?.phone || '',
        avatar:
            user?.avatar_url ||
            `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(user?.name || 'Admin')}`,
        bio:
            user?.bio ||
            'Manage your CMS operations and monitor content from this administrative dashboard.',
        location: user?.location || 'India',
        joinedDate: formatDate(user?.created_at),
    }), [user]);

    const canCreatePosts = hasPermission('create posts');
    const canEditPosts = hasPermission('edit posts');
    const canPublishPosts = hasPermission('publish posts');
    const canArchivePosts = hasPermission('archive posts');
    const canDeletePosts = hasPermission('delete posts');

    useEffect(() => {
        setTempUser(dashboardUser);
    }, [dashboardUser]);

    useEffect(() => {
        if (activeTab === 'blogs') {
            loadPosts();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTab, statusFilter]);

    const loadPosts = async () => {
        setIsLoadingPosts(true);
        setFormError('');

        try {
            const { posts: apiPosts, counts } = await fetchBlogPosts(
                statusFilter === 'all' ? '' : statusFilter,
            );

            setPosts(apiPosts.map(mapApiPostToUiPost));
            const normalizedCounts = {
                draft: Number(counts?.draft || 0),
                published: Number(counts?.published || 0),
                archived: Number(counts?.archived || 0),
            };

            setPostCounts({
                ...normalizedCounts,
                all: normalizedCounts.draft + normalizedCounts.published + normalizedCounts.archived,
            });
        } catch (error) {
            setFormError(error?.response?.data?.message || 'Failed to load posts.');
        } finally {
            setIsLoadingPosts(false);
        }
    };

    const handleDelete = async (id) => {
        if (!canDeletePosts || !window.confirm('Are you sure you want to delete this post?')) {
            return;
        }

        setIsDeletingPostId(id);
        setFormError('');
        setSuccessMessage('');

        try {
            await deleteBlogPost(id);
            await loadPosts();
            setSuccessMessage('Post deleted successfully.');
        } catch (error) {
            setFormError(error?.response?.data?.message || 'Unable to delete post.');
        } finally {
            setIsDeletingPostId(null);
        }
    };

    const handleEdit = (post) => {
        if (!canEditPosts) {
            return;
        }

        setCurrentPost({
            ...post,
            imageFile: null,
            removeFeaturedImage: false,
            content: JSON.parse(JSON.stringify(post.content || EMPTY_CONTENT)),
        });
        setFormError('');
        setSuccessMessage('');
        setIsEditing(true);
    };

    const handleImageUpload = (event) => {
        const file = event.target.files?.[0];
        if (!file) {
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            setCurrentPost((previous) => ({
                ...previous,
                image: reader.result,
                imageFile: file,
                removeFeaturedImage: false,
            }));
        };
        reader.readAsDataURL(file);
    };

    const addBlock = (type) => {
        const newBlock =
            type === 'paragraph'
                ? { type: 'paragraph', text: '' }
                : { type: 'list', items: [''] };

        setCurrentPost((previous) => {
            const content = previous.content || { ...EMPTY_CONTENT };
            return {
                ...previous,
                content: {
                    ...content,
                    blocks: [...(content.blocks || []), newBlock],
                },
            };
        });
    };

    const updateBlock = (index, value) => {
        setCurrentPost((previous) => {
            const blocks = [...(previous.content?.blocks || [])];
            blocks[index] = { ...blocks[index], ...value };
            return {
                ...previous,
                content: { ...previous.content, blocks },
            };
        });
    };

    const removeBlock = (index) => {
        setCurrentPost((previous) => {
            const blocks = (previous.content?.blocks || []).filter((_, idx) => idx !== index);
            return {
                ...previous,
                content: { ...previous.content, blocks },
            };
        });
    };

    const handleSave = async (event) => {
        event.preventDefault();

        if (!currentPost?.title?.trim() || !currentPost?.excerpt?.trim()) {
            setFormError('Title and excerpt are required.');
            return;
        }

        setIsSavingPost(true);
        setFormError('');
        setSuccessMessage('');

        const payload = {
            title: currentPost.title.trim(),
            excerpt: currentPost.excerpt.trim(),
            category: currentPost.category || 'EV Mobility',
            status: currentPost.status || 'draft',
            content: currentPost.content || { ...EMPTY_CONTENT },
        };

        if (currentPost.imageFile) {
            payload.featured_image = currentPost.imageFile;
        }

        if (currentPost.removeFeaturedImage) {
            payload.remove_featured_image = true;
        }

        try {
            if (currentPost.id) {
                await updateBlogPost(currentPost.id, payload);
                setSuccessMessage('Post updated successfully.');
            } else {
                await createBlogPost(payload);
                setSuccessMessage('Post created successfully.');
            }

            setIsEditing(false);
            setCurrentPost(null);
            await loadPosts();
        } catch (error) {
            const validationErrors = error?.response?.data?.errors;
            const firstValidationError = validationErrors
                ? Object.values(validationErrors)?.[0]?.[0]
                : null;

            setFormError(firstValidationError || error?.response?.data?.message || 'Unable to save post.');
        } finally {
            setIsSavingPost(false);
        }
    };

    const handleStatusChange = async (post, status) => {
        if (!post?.id || post.status === status) {
            return;
        }

        setFormError('');
        setSuccessMessage('');

        try {
            await updateBlogPostStatus(post.id, status);
            await loadPosts();
            setSuccessMessage('Post status updated.');
        } catch (error) {
            setFormError(error?.response?.data?.message || 'Unable to update status.');
        }
    };

    const handleSaveProfile = async () => {
        if (!tempUser) {
            return;
        }

        setProfileError('');
        setProfileSuccess('');
        setIsSavingProfile(true);

        const payload = {
            name: tempUser.name,
            email: tempUser.email,
            phone: tempUser.phone,
            location: tempUser.location,
            bio: tempUser.bio,
            avatar_url: tempAvatarFile ? undefined : tempUser.avatar,
        };

        if (tempAvatarFile) {
            payload.avatar = tempAvatarFile;
        }

        try {
            await updateProfile(payload);
            setIsEditingProfile(false);
            setTempAvatarFile(null);
            setProfileSuccess('Profile updated successfully.');
        } catch (error) {
            const validationErrors = error?.response?.data?.errors;
            const firstValidationError = validationErrors
                ? Object.values(validationErrors)?.[0]?.[0]
                : null;

            setProfileError(firstValidationError || error?.response?.data?.message || 'Unable to update profile.');
        } finally {
            setIsSavingProfile(false);
        }
    };

    return (
        <RequireAuth permission="view dashboard">
            <div className="w6-root min-h-screen bg-slate-50">
                <Head title="Admin Dashboard" />

                <div className="flex min-h-screen bg-slate-50">
                    <aside className="fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-corporate-blue text-white">
                        <div className="flex items-center gap-3 p-8">
                            <div className="electric-glow flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-white">
                                <Car size={24} />
                            </div>
                            <div>
                                <h1 className="font-display text-lg font-bold leading-none">
                                    DTC <span className="text-brand">Admin</span>
                                </h1>
                                <p className="text-[10px] font-semibold uppercase tracking-widest opacity-50">
                                    Dashboard
                                </p>
                            </div>
                        </div>

                        <nav className="flex-grow space-y-2 px-4 py-8">
                            <button
                                onClick={() => setActiveTab('blogs')}
                                className={`w-full rounded-2xl px-6 py-4 text-left font-bold transition-all ${
                                    activeTab === 'blogs'
                                        ? 'bg-brand text-white shadow-lg'
                                        : 'text-white/60 hover:bg-white/5 hover:text-white'
                                }`}
                            >
                                <span className="flex items-center gap-4">
                                    <FileText size={20} /> Blog CMS
                                </span>
                            </button>
                            <button
                                onClick={() => setActiveTab('drivers')}
                                className={`w-full rounded-2xl px-6 py-4 text-left font-bold transition-all ${
                                    activeTab === 'drivers'
                                        ? 'bg-brand text-white shadow-lg'
                                        : 'text-white/60 hover:bg-white/5 hover:text-white'
                                }`}
                            >
                                <span className="flex items-center gap-4">
                                    <Users size={20} /> Drivers
                                    <span className="ml-auto rounded-full bg-white/20 px-2 py-0.5 text-[10px] uppercase">
                                        Soon
                                    </span>
                                </span>
                            </button>
                            <button
                                onClick={() => setActiveTab('cabs')}
                                className={`w-full rounded-2xl px-6 py-4 text-left font-bold transition-all ${
                                    activeTab === 'cabs'
                                        ? 'bg-brand text-white shadow-lg'
                                        : 'text-white/60 hover:bg-white/5 hover:text-white'
                                }`}
                            >
                                <span className="flex items-center gap-4">
                                    <Car size={20} /> Cabs
                                    <span className="ml-auto rounded-full bg-white/20 px-2 py-0.5 text-[10px] uppercase">
                                        Soon
                                    </span>
                                </span>
                            </button>
                        </nav>

                        <div className="relative border-t border-white/10 p-4">
                            <AnimatePresence>
                                {isProfileMenuOpen ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className="absolute bottom-full left-4 right-4 z-[60] mb-4 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-2xl"
                                    >
                                        <div className="border-b border-slate-100 bg-slate-50 p-6">
                                            <p className="truncate text-sm font-bold text-corporate-blue">{dashboardUser.name}</p>
                                            <p className="truncate text-xs text-slate-400">{dashboardUser.email}</p>
                                        </div>
                                        <div className="space-y-1 p-2">
                                            <button
                                                onClick={() => {
                                                    setActiveTab('profile');
                                                    setIsEditing(false);
                                                    setIsEditingProfile(false);
                                                    setIsProfileMenuOpen(false);
                                                }}
                                                className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-bold text-corporate-blue transition-all hover:bg-slate-50"
                                            >
                                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/10 text-brand">
                                                    <User size={16} />
                                                </div>
                                                Edit Profile
                                            </button>
                                            <button
                                                onClick={logout}
                                                className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-bold text-red-500 transition-all hover:bg-red-50"
                                            >
                                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100 text-red-500">
                                                    <LogOut size={16} />
                                                </div>
                                                Logout
                                            </button>
                                        </div>
                                    </motion.div>
                                ) : null}
                            </AnimatePresence>

                            <button
                                onClick={() => setIsProfileMenuOpen((previous) => !previous)}
                                className={`flex w-full items-center gap-3 rounded-2xl p-3 font-bold transition-all ${
                                    isProfileMenuOpen ? 'bg-white/10' : 'hover:bg-white/5'
                                }`}
                            >
                                <div className="h-10 w-10 overflow-hidden rounded-xl border-2 border-white/20">
                                    <img src={dashboardUser.avatar} alt="Profile" className="h-full w-full object-cover" />
                                </div>
                                <div className="flex-grow overflow-hidden text-left">
                                    <p className="truncate text-xs font-bold uppercase leading-tight tracking-wider">
                                        {dashboardUser.name}
                                    </p>
                                    <p className="truncate text-[10px] opacity-50">{dashboardUser.role}</p>
                                </div>
                                <ChevronRight
                                    size={16}
                                    className={`transition-transform duration-300 ${
                                        isProfileMenuOpen ? 'rotate-90 text-brand' : 'opacity-40'
                                    }`}
                                />
                            </button>
                        </div>
                    </aside>

                    <main className="ml-72 flex-grow p-12">
                        <header className="mb-12 flex flex-wrap items-center justify-between gap-6">
                            <div>
                                <h2 className="font-display text-3xl font-bold text-corporate-blue">
                                    {activeTab === 'blogs'
                                        ? 'Blog Content Management'
                                        : activeTab === 'drivers'
                                        ? 'Driver Management'
                                        : activeTab === 'cabs'
                                        ? 'Cab Fleet Management'
                                        : 'Admin Profile'}
                                </h2>
                                <p className="mt-1 text-slate-500">
                                    {activeTab === 'profile'
                                        ? 'Manage your personal information and preferences'
                                        : 'Manage your website content and operations'}
                                </p>
                            </div>

                            {activeTab === 'blogs' && !isEditing && canCreatePosts ? (
                                <button
                                    onClick={() => {
                                        setCurrentPost(createEmptyPost());
                                        setIsEditing(true);
                                        setFormError('');
                                        setSuccessMessage('');
                                    }}
                                    className="flex items-center gap-2 rounded-2xl bg-brand px-8 py-4 font-bold text-white shadow-xl transition-all hover:bg-brand-dark"
                                >
                                    <Plus size={20} /> Create New Post
                                </button>
                            ) : null}
                        </header>

                        {formError ? (
                            <div className="mb-6 rounded-2xl border border-red-100 bg-red-50 px-5 py-4 text-sm text-red-600">
                                {formError}
                            </div>
                        ) : null}

                        {successMessage ? (
                            <div className="mb-6 rounded-2xl border border-emerald-100 bg-emerald-50 px-5 py-4 text-sm text-emerald-600">
                                {successMessage}
                            </div>
                        ) : null}

                        {activeTab === 'profile' ? (
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                                <div className="overflow-hidden rounded-[3rem] border border-slate-100 bg-white shadow-2xl">
                                    <div className="relative h-48 bg-gradient-to-r from-corporate-blue to-corporate-blue/80">
                                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
                                    </div>

                                    <div className="relative px-12 pb-12">
                                        <div className="relative -mt-24 mb-8 inline-block">
                                            <div className="group relative h-40 w-40 overflow-hidden rounded-[2.5rem] border-8 border-white bg-white shadow-2xl">
                                                <img
                                                    src={isEditingProfile ? tempUser?.avatar : dashboardUser.avatar}
                                                    alt="Profile"
                                                    className="h-full w-full object-cover"
                                                />
                                                {isEditingProfile ? (
                                                    <label className="absolute inset-0 cursor-pointer bg-black/40 opacity-0 transition-all group-hover:opacity-100">
                                                        <div className="flex h-full flex-col items-center justify-center text-white">
                                                            <Camera size={24} className="mb-2" />
                                                            <span className="text-[10px] font-bold uppercase tracking-widest">
                                                                Update Photo
                                                            </span>
                                                        </div>
                                                        <input
                                                            type="file"
                                                            className="hidden"
                                                            accept="image/*"
                                                            onChange={(event) => {
                                                                const file = event.target.files?.[0];
                                                                if (!file) {
                                                                    return;
                                                                }

                                                                const reader = new FileReader();
                                                                reader.onloadend = () => {
                                                                    setTempUser((previous) => ({
                                                                        ...previous,
                                                                        avatar: reader.result,
                                                                    }));
                                                                    setTempAvatarFile(file);
                                                                };
                                                                reader.readAsDataURL(file);
                                                            }}
                                                        />
                                                    </label>
                                                ) : null}
                                            </div>
                                            <div className="absolute -right-2 bottom-4 flex h-10 w-10 items-center justify-center rounded-2xl border-4 border-white bg-brand text-white shadow-lg">
                                                <ShieldCheck size={20} />
                                            </div>
                                        </div>

                                        <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
                                            <div>
                                                <h3 className="font-display text-4xl font-bold text-corporate-blue">{dashboardUser.name}</h3>
                                                <p className="mt-1 flex items-center gap-2 font-medium text-slate-500">
                                                    <Briefcase size={16} className="text-brand" /> {dashboardUser.role}
                                                    <span className="mx-1 h-1.5 w-1.5 rounded-full bg-slate-300" />
                                                    <span className="font-bold text-brand">{dashboardUser.location}</span>
                                                </p>
                                            </div>
                                            <div className="flex gap-4">
                                                {!isEditingProfile ? (
                                                    <>
                                                        <button
                                                            onClick={() => {
                                                                setTempUser(dashboardUser);
                                                                setTempAvatarFile(null);
                                                                setIsEditingProfile(true);
                                                                setProfileError('');
                                                                setProfileSuccess('');
                                                            }}
                                                            className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-8 py-4 font-bold text-corporate-blue transition-all hover:bg-slate-100"
                                                        >
                                                            <Edit size={18} /> Edit Profile
                                                        </button>
                                                        <button
                                                            onClick={logout}
                                                            className="flex items-center gap-2 rounded-2xl border border-red-100 bg-white px-8 py-4 font-bold text-red-500 transition-all hover:bg-red-50"
                                                        >
                                                            <LogOut size={18} /> Logout
                                                        </button>
                                                    </>
                                                ) : (
                                                    <>
                                                        <button
                                                            onClick={() => setIsEditingProfile(false)}
                                                            className="rounded-2xl px-8 py-4 font-bold text-slate-500 transition-all hover:bg-slate-50"
                                                        >
                                                            Cancel
                                                        </button>
                                                        <button
                                                            onClick={handleSaveProfile}
                                                            className="electric-glow flex items-center gap-2 rounded-2xl bg-brand px-10 py-4 font-bold text-white transition-all hover:bg-brand-dark"
                                                            disabled={isSavingProfile}
                                                        >
                                                            {isSavingProfile ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
                                                            Save Changes
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                        {profileError ? (
                                            <div className="mb-5 rounded-2xl border border-red-100 bg-red-50 p-4 text-sm text-red-600">
                                                {profileError}
                                            </div>
                                        ) : null}

                                        {profileSuccess ? (
                                            <div className="mb-5 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-emerald-600">
                                                {profileSuccess}
                                            </div>
                                        ) : null}

                                        {!isEditingProfile ? (
                                            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                                                <div className="col-span-2 space-y-8">
                                                    <div>
                                                        <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-400">About Me</h4>
                                                        <p className="text-lg leading-relaxed text-slate-600">{dashboardUser.bio}</p>
                                                    </div>
                                                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                                        <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
                                                            <p className="mb-2 text-xs font-bold uppercase text-slate-400">Email Address</p>
                                                            <p className="flex items-center gap-2 font-bold text-corporate-blue">
                                                                <Mail size={16} className="text-brand" /> {dashboardUser.email}
                                                            </p>
                                                        </div>
                                                        <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
                                                            <p className="mb-2 text-xs font-bold uppercase text-slate-400">Phone Number</p>
                                                            <p className="flex items-center gap-2 font-bold text-corporate-blue">
                                                                <Phone size={16} className="text-brand" /> {dashboardUser.phone || 'N/A'}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="space-y-6">
                                                    <div className="relative overflow-hidden rounded-[2rem] bg-corporate-blue p-8 text-white shadow-xl">
                                                        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/5 blur-2xl" />
                                                        <h4 className="mb-4 text-xs font-bold uppercase opacity-60">Account Details</h4>
                                                        <ul className="space-y-4 text-sm">
                                                            <li className="flex justify-between">
                                                                <span className="opacity-60">Status</span>
                                                                <span className="font-bold text-green-400">Active</span>
                                                            </li>
                                                            <li className="flex justify-between">
                                                                <span className="opacity-60">Role</span>
                                                                <span className="font-bold">{dashboardUser.role}</span>
                                                            </li>
                                                            <li className="flex justify-between">
                                                                <span className="opacity-60">Joined</span>
                                                                <span className="font-bold">{dashboardUser.joinedDate}</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <form className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                                <div>
                                                    <label className="mb-2 block text-sm font-bold text-corporate-blue">Full Name</label>
                                                    <input
                                                        type="text"
                                                        value={tempUser?.name || ''}
                                                        onChange={(event) => setTempUser((previous) => ({ ...previous, name: event.target.value }))}
                                                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 focus:border-brand focus:outline-none"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="mb-2 block text-sm font-bold text-corporate-blue">Email Address</label>
                                                    <input
                                                        type="email"
                                                        value={tempUser?.email || ''}
                                                        onChange={(event) => setTempUser((previous) => ({ ...previous, email: event.target.value }))}
                                                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 focus:border-brand focus:outline-none"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="mb-2 block text-sm font-bold text-corporate-blue">Phone Number</label>
                                                    <input
                                                        type="tel"
                                                        value={tempUser?.phone || ''}
                                                        onChange={(event) => setTempUser((previous) => ({ ...previous, phone: event.target.value }))}
                                                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 focus:border-brand focus:outline-none"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="mb-2 block text-sm font-bold text-corporate-blue">Location</label>
                                                    <input
                                                        type="text"
                                                        value={tempUser?.location || ''}
                                                        onChange={(event) => setTempUser((previous) => ({ ...previous, location: event.target.value }))}
                                                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 focus:border-brand focus:outline-none"
                                                    />
                                                </div>
                                                <div className="col-span-2">
                                                    <label className="mb-2 block text-sm font-bold text-corporate-blue">Bio / Personal Note</label>
                                                    <textarea
                                                        rows={4}
                                                        value={tempUser?.bio || ''}
                                                        onChange={(event) => setTempUser((previous) => ({ ...previous, bio: event.target.value }))}
                                                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 focus:border-brand focus:outline-none"
                                                    />
                                                </div>
                                            </form>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ) : null}

                        {activeTab === 'blogs' ? (
                            <div className="space-y-8">
                                <div className="flex flex-wrap gap-2">
                                    {STATUS_FILTERS.map((filter) => (
                                        <button
                                            key={filter.value}
                                            onClick={() => setStatusFilter(filter.value)}
                                            className={`rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all ${
                                                statusFilter === filter.value
                                                    ? 'bg-corporate-blue text-white'
                                                    : 'bg-white text-slate-500 hover:bg-slate-100'
                                            }`}
                                        >
                                            {filter.label} ({postCounts[filter.value] || 0})
                                        </button>
                                    ))}
                                </div>

                                {isEditing ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="rounded-[3rem] border border-slate-100 bg-white p-12 shadow-2xl"
                                    >
                                        <div className="mb-10 flex items-center justify-between">
                                            <h3 className="text-2xl font-bold text-corporate-blue">
                                                {currentPost?.id ? 'Edit Post' : 'New Post'}
                                            </h3>
                                            <button onClick={() => setIsEditing(false)} className="text-slate-400 transition-colors hover:text-brand">
                                                <X size={24} />
                                            </button>
                                        </div>
                                        <form onSubmit={handleSave} className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                            <div className="col-span-2">
                                                <label className="mb-2 block text-sm font-bold text-corporate-blue">Post Title</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={currentPost?.title || ''}
                                                    onChange={(event) => setCurrentPost((previous) => ({ ...previous, title: event.target.value }))}
                                                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 focus:border-brand focus:outline-none"
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-bold text-corporate-blue">Category</label>
                                                <CustomSelect
                                                    value={currentPost?.category || 'EV Mobility'}
                                                    onChange={(nextValue) =>
                                                        setCurrentPost((previous) => ({ ...previous, category: nextValue }))
                                                    }
                                                    options={BLOG_CATEGORIES.filter((category) => category !== 'All').map((category) => ({
                                                        value: category,
                                                        label: category,
                                                    }))}
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-bold text-corporate-blue">Status</label>
                                                <CustomSelect
                                                    value={currentPost?.status || 'draft'}
                                                    onChange={(nextValue) =>
                                                        setCurrentPost((previous) => ({ ...previous, status: nextValue }))
                                                    }
                                                    options={STATUS_OPTIONS.filter((option) => {
                                                        if (option.value === 'published' && !canPublishPosts) return false;
                                                        if (option.value === 'archived' && !canArchivePosts) return false;
                                                        return true;
                                                    })}
                                                />
                                            </div>
                                            <div className="col-span-2">
                                                <label className="mb-2 block text-sm font-bold text-corporate-blue">Featured Image</label>
                                                <div className="flex items-center gap-4">
                                                    {currentPost?.image ? (
                                                        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-slate-200">
                                                            <img src={currentPost.image} className="h-full w-full object-cover" alt="Preview" />
                                                        </div>
                                                    ) : null}
                                                    <label className="flex flex-grow cursor-pointer items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 px-6 py-4 font-bold text-slate-500 transition-all hover:border-brand">
                                                        <Plus size={20} /> {currentPost?.image ? 'Change Image' : 'Upload Image'}
                                                        <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                                                    </label>
                                                    {currentPost?.image ? (
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                setCurrentPost((previous) => ({
                                                                    ...previous,
                                                                    image: '',
                                                                    imageFile: null,
                                                                    removeFeaturedImage: true,
                                                                }))
                                                            }
                                                            className="rounded-xl border border-red-100 px-4 py-3 text-xs font-bold uppercase tracking-wider text-red-500 hover:bg-red-50"
                                                        >
                                                            Remove
                                                        </button>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className="col-span-2">
                                                <label className="mb-2 block text-sm font-bold text-corporate-blue">Excerpt</label>
                                                <textarea
                                                    required
                                                    rows={2}
                                                    value={currentPost?.excerpt || ''}
                                                    onChange={(event) => setCurrentPost((previous) => ({ ...previous, excerpt: event.target.value }))}
                                                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 focus:border-brand focus:outline-none"
                                                />
                                            </div>

                                            <div className="col-span-2 border-t border-slate-100 pt-8">
                                                <h4 className="mb-6 text-lg font-bold text-corporate-blue">Article Content</h4>
                                                <div className="mb-6">
                                                    <label className="mb-2 block text-sm font-bold text-corporate-blue">Main Heading</label>
                                                    <input
                                                        type="text"
                                                        value={currentPost?.content?.heading || ''}
                                                        onChange={(event) =>
                                                            setCurrentPost((previous) => ({
                                                                ...previous,
                                                                content: { ...previous.content, heading: event.target.value },
                                                            }))
                                                        }
                                                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 focus:border-brand focus:outline-none"
                                                    />
                                                </div>

                                                <div className="space-y-6">
                                                    {(currentPost?.content?.blocks || []).map((block, index) => (
                                                        <div key={`${block.type}-${index}`} className="group/block relative rounded-2xl border border-slate-100 bg-slate-50 p-6">
                                                            <button
                                                                type="button"
                                                                onClick={() => removeBlock(index)}
                                                                className="absolute right-4 top-4 text-slate-300 opacity-0 transition-colors group-hover/block:opacity-100 hover:text-red-500"
                                                            >
                                                                <Trash2 size={16} />
                                                            </button>

                                                            <div className="mb-4 flex items-center gap-2">
                                                                <span className="rounded-full bg-corporate-blue/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-corporate-blue">
                                                                    {block.type}
                                                                </span>
                                                            </div>

                                                            {block.type === 'paragraph' ? (
                                                                <textarea
                                                                    value={block.text}
                                                                    onChange={(event) => updateBlock(index, { text: event.target.value })}
                                                                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-brand focus:outline-none"
                                                                    placeholder="Enter paragraph text..."
                                                                    rows={3}
                                                                />
                                                            ) : (
                                                                <div className="space-y-2">
                                                                    {(block.items || []).map((item, itemIndex) => (
                                                                        <div key={`${index}-${itemIndex}`} className="flex gap-2">
                                                                            <input
                                                                                type="text"
                                                                                value={item}
                                                                                onChange={(event) => {
                                                                                    const items = [...(block.items || [])];
                                                                                    items[itemIndex] = event.target.value;
                                                                                    updateBlock(index, { items });
                                                                                }}
                                                                                className="flex-grow rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm focus:border-brand focus:outline-none"
                                                                                placeholder="List item..."
                                                                            />
                                                                            <button
                                                                                type="button"
                                                                                onClick={() => {
                                                                                    const items = (block.items || []).filter((_, idx) => idx !== itemIndex);
                                                                                    updateBlock(index, { items });
                                                                                }}
                                                                                className="text-slate-300 hover:text-red-500"
                                                                            >
                                                                                <X size={14} />
                                                                            </button>
                                                                        </div>
                                                                    ))}
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => updateBlock(index, { items: [...(block.items || []), ''] })}
                                                                        className="mt-2 flex items-center gap-1 text-xs font-bold text-brand"
                                                                    >
                                                                        <Plus size={14} /> Add Item
                                                                    </button>
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="mt-8 flex gap-4">
                                                    <button
                                                        type="button"
                                                        onClick={() => addBlock('paragraph')}
                                                        className="flex flex-grow items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-200 py-3 font-bold text-slate-400 transition-all hover:border-brand hover:text-brand"
                                                    >
                                                        <Plus size={18} /> Add Paragraph
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => addBlock('list')}
                                                        className="flex flex-grow items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-200 py-3 font-bold text-slate-400 transition-all hover:border-brand hover:text-brand"
                                                    >
                                                        <Plus size={18} /> Add List
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="col-span-2 mt-12 flex justify-end gap-4 border-t border-slate-100 pt-8">
                                                <button
                                                    type="button"
                                                    onClick={() => setIsEditing(false)}
                                                    className="rounded-2xl px-8 py-4 font-bold text-slate-500 transition-all hover:bg-slate-50"
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    type="submit"
                                                    disabled={isSavingPost}
                                                    className="flex items-center gap-2 rounded-2xl bg-corporate-blue px-10 py-4 font-bold text-white shadow-xl transition-all hover:bg-corporate-blue/90 disabled:cursor-not-allowed disabled:opacity-60"
                                                >
                                                    {isSavingPost ? <Loader2 size={18} className="animate-spin" /> : <Save size={20} />}
                                                    {isSavingPost ? 'Saving...' : 'Save Post'}
                                                </button>
                                            </div>
                                        </form>
                                    </motion.div>
                                ) : (
                                    <div className="grid grid-cols-1 gap-6">
                                        {isLoadingPosts ? (
                                            <div className="flex items-center justify-center rounded-3xl border border-slate-100 bg-white p-16 text-slate-500">
                                                <Loader2 size={22} className="mr-3 animate-spin" />
                                                Loading posts...
                                            </div>
                                        ) : posts.length ? (
                                            posts.map((post) => (
                                                <motion.div
                                                    key={post.id}
                                                    layout
                                                    className="flex items-center gap-6 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
                                                >
                                                    <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl">
                                                        <img src={post.image} alt="" className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                                                    </div>
                                                    <div className="flex-grow">
                                                        <div className="mb-1 flex items-center gap-3">
                                                            <span className="text-[10px] font-bold uppercase tracking-widest text-brand">{post.category}</span>
                                                            <span className="text-[10px] text-slate-400">• {post.date}</span>
                                                            <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${statusBadgeClass(post.status)}`}>
                                                                {post.status}
                                                            </span>
                                                        </div>
                                                        <h4 className="text-lg font-bold text-corporate-blue">{post.title}</h4>
                                                        <p className="line-clamp-1 text-sm text-slate-500">{post.excerpt}</p>
                                                    </div>

                                                    <div className="flex items-center gap-2">
                                                        {(canPublishPosts || canArchivePosts) ? (
                                                            <CustomSelect
                                                                compact
                                                                value={post.status}
                                                                onChange={(nextValue) => handleStatusChange(post, nextValue)}
                                                                options={[
                                                                    { value: 'draft', label: 'Draft' },
                                                                    ...(canPublishPosts ? [{ value: 'published', label: 'Published' }] : []),
                                                                    ...(canArchivePosts ? [{ value: 'archived', label: 'Archived' }] : []),
                                                                ]}
                                                            />
                                                        ) : null}
                                                        {canEditPosts ? (
                                                            <button
                                                                onClick={() => handleEdit(post)}
                                                                className="rounded-xl bg-slate-50 p-3 text-slate-400 transition-all hover:bg-brand/10 hover:text-brand"
                                                            >
                                                                <Edit size={18} />
                                                            </button>
                                                        ) : null}
                                                        {canDeletePosts ? (
                                                            <button
                                                                onClick={() => handleDelete(post.id)}
                                                                disabled={isDeletingPostId === post.id}
                                                                className="rounded-xl bg-slate-50 p-3 text-slate-400 transition-all hover:bg-red-50 hover:text-red-500 disabled:cursor-not-allowed disabled:opacity-50"
                                                            >
                                                                {isDeletingPostId === post.id ? <Loader2 size={18} className="animate-spin" /> : <Trash2 size={18} />}
                                                            </button>
                                                        ) : null}
                                                    </div>
                                                </motion.div>
                                            ))
                                        ) : (
                                            <div className="rounded-3xl border border-slate-100 bg-white p-16 text-center text-slate-500">
                                                No posts found for this status.
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        ) : null}

                        {activeTab !== 'blogs' && activeTab !== 'profile' ? (
                            <div className="rounded-[3rem] border border-slate-100 bg-white p-20 text-center shadow-sm">
                                <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-slate-50 text-slate-300">
                                    <LayoutDashboard size={48} />
                                </div>
                                <h3 className="mb-4 font-display text-2xl font-bold text-corporate-blue">Module Coming Soon</h3>
                                <p className="mx-auto max-w-md text-slate-500">
                                    We are currently building the {activeTab} management system. This module will include real-time tracking, automated scheduling, and performance analytics.
                                </p>
                            </div>
                        ) : null}
                    </main>
                </div>
            </div>
        </RequireAuth>
    );
}
