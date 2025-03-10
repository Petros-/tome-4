import { vi, expect, test } from 'vitest'
import { handleDelete } from '../art-pages/ArtworkDetails'
import { deleteDoc, doc, getFirestore } from 'firebase/firestore';

// mock some fake data for the test
vi.mock('firebase/firestore', async (importOriginal) => {
    const actual = await importOriginal();
    return {
        ...actual,
        deleteDoc: vi.fn(),
        doc: vi.fn((...args) => {
            console.log("doc was called with:", args);
            return {id: 'mockDocRef'};
        }),
        getFirestore: vi.fn(() => ({})),
    };
});

test('should delete the artwork', async () => {
    const fakeUser = { uid: 'fakeUserId' };
    const fakeSetArtworks = vi.fn();
    const artworkId = 'fakeArtworkId';

    await handleDelete(artworkId, fakeUser, fakeSetArtworks)

    expect(doc).toHaveBeenCalledWith(expect.anything(), 'accounts', 'fakeUserId', 'artworks', 'fakeArtworkId');
    expect(deleteDoc).toHaveBeenCalledWith({ id: 'mockDocRef' });
    expect(fakeSetArtworks).toHaveBeenCalled();

})