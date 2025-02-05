'use client';
import { useState } from 'react';
import { useUsers } from '../hooks/useUsers';
import { usePosts } from '../hooks/usePosts';
import { UserCard } from '../components/usercard';
import { PostList } from '../components/postlist';
import { ErrorMessage } from '../components/errormessage';
import { LoadingSpinner } from '@/components/loadingspinner';
import UserSkeleton from '../components/skeletons/userskeleton';
import PostsSkeleton from '../components/skeletons/postskeleton';

export default function Dashboard() {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchUser, setSearchUser] = useState('');
  const [sortData, setSortData] = useState<'name' | 'company'>('name');
  const postsPerPage = 3;

  // Users React Query
  const { data: users, isLoading: usersLoading, error: usersError } = useUsers();

  // Posts React Query
  const {
    data: posts = [],
    isLoading: postsLoading,
    error: postsError,
  } = usePosts(selectedUserId || 0);

  // Filter users based on search user
  const filteredUsers = users?.filter((user) => {
    const nameMatch = user.name.toLowerCase().includes(searchUser.toLowerCase());
    const emailMatch = user.email.toLowerCase().includes(searchUser.toLowerCase());
    return nameMatch || emailMatch;
  });

  // Sort data based on name or email
  const sortedList = filteredUsers?.sort((a, b) => {
    if (sortData === 'name') {
      return a.name.localeCompare(b.name); // Sort by name
    } else if (sortData === 'company') {
      return a.company.name.localeCompare(b.company.name); // Sort by company name
    }
    return 0;
  });

  // Pagination posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  if (usersLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (usersError || postsError) {
    return <ErrorMessage message={(usersError as Error)?.message || (postsError as Error)?.message} />;
  }

  return (
    <div className="container mx-auto px-4 mb-6">
      <h1 className="text-xl font-semibold mt-2 mb-4">Dashboard</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Users Section */}
        <div className="w-full lg:w-1/3">
          <h2 className="text-base font-semibold text-gray-700">Users</h2>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 mt-2 mb-4">
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchUser}
              onChange={(e) => setSearchUser(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg text-sm text-gray-500"
            />
            {/* Sort Dropdown */}
            <select
              value={sortData}
              onChange={(e) => setSortData(e.target.value as 'name' | 'company')}
              className="w-full p-2 border border-gray-300 rounded-lg text-sm text-gray-500"
            >
              <option value="name">Sort by Name</option>
              <option value="company">Sort by Company</option>
            </select>
          </div>
          {usersLoading ? (
            <UserSkeleton />
          ) : sortedList && sortedList.length > 0 ? (
            sortedList.map((user) => (
              <UserCard key={user.id} user={user} onClick={() => setSelectedUserId(user.id)} />
            ))
          ) : (
            <p>No users found...</p>
          )}
        </div>

        {/* Posts Section */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-base font-semibold text-gray-700">Posts</h2>
          {selectedUserId ? (
            postsLoading ? (
              <PostsSkeleton />
            ) : posts && posts.length > 0 ? (
              <>
                <PostList currentPosts={currentPosts} />
                <div className="join mt-4 flex-wrap">
                  {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, i) => (
                    <button
                      key={i + 1}
                      className={`join-item btn ${currentPage === i + 1 ? 'btn-active' : ''}`}
                      onClick={() => handlePageChange(i + 1)}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <p className="text-gray-700">No posts found for this user.</p>
            )
          ) : (
            <p className="text-gray-700">Select a user to view their posts</p>
          )}
        </div>
      </div>
    </div>
  );
}