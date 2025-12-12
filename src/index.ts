import {createCollection, eq, localStorageCollectionOptions, Query} from '@tanstack/react-db';

interface Space {
    id: string;
}

interface Thread {
    id: string;
}

export const threadsCollection = createCollection(
    localStorageCollectionOptions<Thread>({
        id: 'threads',
        storageKey: 'threads',
        getKey: item => item.id,
    }),
);

export const spacesCollection = createCollection(
    localStorageCollectionOptions<Space>({
        id: 'spaces',
        storageKey: 'spaces',
        getKey: item => item.id,
    }),
);

// broken with leftJoin
export const baseSpaceQuery = new Query()
    .from({t: threadsCollection})
    .leftJoin({s: spacesCollection}, ({t, s}) => eq(s.id, t.id))
    .select(({t, s}) => ({
        id: t.id,
        threadId: t.id,
        spaceId: s?.id,
    }));


// works without leftJoin
export const workingBaseSpaceQuery = new Query()
    .from({t: threadsCollection})
    .select(({t}) => ({
        id: t.id,
        threadId: t.id,
    }));
