import React from 'react';
import { useArtworks } from '../art-pages/ArtworksContext';
import TopNav from '../TopNav';
import Loader from '../fields/Loader';

function TagList() {
    const { tags, isLoading, hasError } = useArtworks();

    if (isLoading) {
        return (
            <div className="flex items-center justify-center w-full h-full min-h-screen">
                <Loader />
            </div>
        )
    }

    if (hasError) return <div>Error loading tags.</div>;

    return (
        <div className="flex h-screen w-full flex-col">
            <TopNav />
            <div className="flex h-screen w-full items-center justify-center">
                <div>
                    <h1 className="text-2xl font-bold">Tags</h1>
                    {tags.map(tag => (
                        <div key={tag.id} className="border p-2 my-2">
                            {tag.name}
                            </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TagList
