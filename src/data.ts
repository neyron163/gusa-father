type UsersType = {
    [key: string]: {
        cId: string;
        pId: string;
    };
};

export const DATA: {
    users: UsersType;
} = {
    users: {},
};
