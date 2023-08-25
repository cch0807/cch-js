/**
 * Key Value Mapping
 */

enum State {
    loading,
    done,
    error,
}

type GlobalApiStatus = {
    getUser: State;
    paginatedUsers: State | undefined;
    banUser: State | null;
    getPosts: State;
};

type UserApiStatus = {
    getUser: State;
    paginateUsers: State | undefined;
    banUser: State | null;
};

type UserApiStatus2 = {
    getUser: GlobalApiStatus['getUser'];
    paginatedUsers: GlobalApiStatus['paginatedUsers'];
    banUser: GlobalApiStatus['banUser'];
};

type UserApiStatus3 = {
    [k in 'getUser' | 'paginatedUsers' | 'banUser']: GlobalApiStatus[k];
    // getUser;
    // paginatedUsers;
    // banUser;
};

type PickedUserApiStatus = Pick<
    GlobalApiStatus,
    'getUser' | 'paginatedUsers' | 'banUser'
>;

type OmitUserApiStatus = Omit<GlobalApiStatus, 'getPosts'>;

/**
 * keyof
 */
type AllKeys = keyof GlobalApiStatus;

const key: AllKeys = 'banUser';

type KeyOfUserApiStatus = {
    [k in keyof GlobalApiStatus]: GlobalApiStatus[k];
};

type KeyOfUserApiStatus2 = {
    [k in Exclude<keyof GlobalApiStatus, 'getPosts'>]: GlobalApiStatus[k];
};

interface LoadingStatus {
    type: 'loading';
    data: string[];
}

interface ErrorStatus {
    type: 'error';
    message: string;
}

type FetchStatus = LoadingStatus | ErrorStatus;

type StatusType = FetchStatus['type'];
