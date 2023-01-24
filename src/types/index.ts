export type H = {
    authorization: string;
    session: string;
};

export type R = {
    [key: string]: any;
    message: string;
    isError: boolean;
    isLoading: boolean;
};


type Document = {
    _id: string;
    __v: number;
    createdAt: string;
    updatedAt: string;
}

export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    sessionId: string; // rotates every time user logs in
    days: string[]; // array of day ids
    friends: string[]; // array of user ids
    friendRequests: string[]; // array of user ids
    friendCode: string; // unique code to add friends
    settings: {
        theme: string;
        language: 'english' | 'spanish' | 'french'
    }
    stats: IStats;
    assessments: string[];
}

export interface IDay extends Document {
    date: string;
    userId: string;
    exercises: [string];
    food: [string];
    stats: IStats
}

export interface IExercise extends Document {
    dayId: string;
    userId: string;
    time: string; // 04:00 (military)
    tags: ITag[];
    exercise: string;
    weight: number;
    reps: number;
}


export interface ITag {
    label: string;
    color: string;
}

export interface IStats {
    exercises: {
        [exercise: string]: {
            totalReps: number;
            totalWeight: number;
            totalSets: number;
        }
    };
    tags: {
        [tag: string]: {
            tagCount: number;
            tagLocations: string;
        }
    };
}

export interface IFood extends Document {
    dayId: string;
    userId: string;
    time: string; // 04:00 (military)
    tags: ITag[];
    name: string;
    macros: {
        protein: number;
        carbs: number;
        fat: number;
    };
    calories: number;
}

export interface IFriendRequest extends Document {
    from: string;
    to: string;
    status: 'pending' | 'accepted' | 'rejected';
    message: string;
}

