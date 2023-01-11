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

export interface IFriendRequest extends Document {
    from: string;
    to: string;
    status: 'pending' | 'accepted' | 'rejected';
    message: string;
}


export interface IInitialAssessment extends Document {
    userId: string;
    assessment: {
        age: number;
        height: number;
        weight: number;
        goal: 'lose' | 'maintain' | 'gain';
        activityLevel: 'sedentary' | 'light' | 'moderate' | 'heavy' | 'extreme';
    };
}


export type ExerciseName = {
    movementMode: 'compound' | 'isolation';
    movementType: 'push' | 'pull' | 'squat' | 'hinge' | 'carry' | 'rotation' | 'other';
    exercise: AllExercises;


}

export type AllExercises =
    | { name: 'bench press', variations: ['incline', 'decline'], equipment: ['barbell', 'dumbbell' ],  muscleGroups: ['chest', 'triceps'], tags: [ 'bro-split', 'push', 'upper-body'], relatedTo: ['chest fly', 'push ups'] }
    | { name: 'chest fly', variations: ['incline', 'decline'], equipment: ['dumbbell'], muscleGroups: ['chest', 'triceps'], tags: ['bro-split', 'push', 'upper-body'], relatedTo: ['bench press', 'push ups'] }
    | { name: 'push ups', variations: ['incline', 'decline', 'knee',], equipment: ['bodyweight'], muscleGroups: ['chest', 'triceps'], tags: ['bro-split', 'push', 'upper-body'], relatedTo: ['chest fly', 'bench press'] }
    | { name: 'shoulder press', variations: [], equipment: ['barbell', 'dumbbell'], muscleGroups: ['shoulders'], tags: ['bro-split', 'push', 'upper-body'], relatedTo: ['shoulder fly', 'lateral raise'] }
    | { name: 'shoulder fly', variations: [], equipment: ['dumbbell'], muscleGroups: ['shoulders'], tags: ['bro-split', 'push', 'upper-body'], relatedTo: ['shoulder press', 'lateral raise'] }
    | { name: 'lateral raise', variations: [], equipment: ['dumbbell'], muscleGroups: ['shoulders'], tags: ['bro-split', 'push', 'upper-body'], relatedTo: ['shoulder fly', 'shoulder press'] }


